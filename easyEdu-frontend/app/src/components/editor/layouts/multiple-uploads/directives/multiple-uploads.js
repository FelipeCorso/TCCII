define(function() {
    "use strict";
    function MultipleUploads() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/multiple-uploads/views/_multiple-uploads.html',
            scope: {
                options: '=',
                model: '=',
                doneCallback: '&doneCallback',
                queueChange: "&queueChange",
                onRemoveItem: "&"
            },
            controller: MultipleUploadsCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    MultipleUploadsCtrl.$inject = ['FileUploader'];

    /*@ngInject*/
    function MultipleUploadsCtrl(FileUploader) {
        var vm = this,
            files = [],
            queue = [],
            uploader = vm.uploader = new FileUploader({
                // url: vm.options.url,
                // withCredentials: true,
                autoUpload: true,
                queueLimit: 1 || 1.7976931348623157e+308
            });

        /**
         * Propriedades
         */
        vm.uploaderErrors = [];

        /**
         * Métodos
         */
        vm.removeItem = removeItem;
        vm.removeErrorItem = removeErrorItem;

        // Verifica se o arquivo é maior que 2MB
        uploader.filters.push({
            'name': 'enforceMaxFileSize',
            'fn': function (item) {
                if(item.size > 2097152){
                    var itemWithError = {
                        file: {
                            name: item.name,
                            size: item.size,
                            error: "Ops... o arquivo é maior que 2MB."
                        }
                    };
                    vm.uploaderErrors.push(itemWithError);
                }
                return item.size <= 2097152;
            }
        });

        // Verifica se é um arquivo de imagem válido
        uploader.filters.push({
            name:'fileExtensionImage',
            fn:function(item) {
                return !uploader.hasHTML5 ? true : /\/(png|jpeg|jpg|gif)$/.test(item.file.type);
            }
        });

        // Verifica se é um arquivo de áudio válido
        uploader.filters.push({
            name:'fileExtensionAudio',
            fn:function(item) {
                return !uploader.hasHTML5 ? true : /\/(mp3)$/.test(item.file.type);
            }
        });

        uploader.onBeforeUploadItem = function(item) {
            /**
             * Armazena o nome do arquivo no header. O loop serve para percorrer
             * o queue e adicionar o nome de cada arquivo enviado no header, caso
             * seja enviado vários arquivos.
             */

            var i = 0,
                quantity = uploader.queue.length;

            for(i=0; i<quantity; i++){
                if(uploader.queue[i]._file.name === item._file.name){
                    uploader.queue[i].headers.realName = item._file.name.toString();
                }
            }
        };

        uploader.onSuccessItem = function(fileItem) {
            files.push(fileItem);
        };

        uploader.onAfterAddingFile = function(fileItem) {
            queue.push(fileItem);
            vm.queueChange({
                queueList: queue
            });
        };

        uploader.onCompleteAll = function() {
            vm.doneCallback({
                files: files
            });
        };

        function removeItem(file) {
            queue = queue.filter(function (item) {
                return (file.file.name !== item.file.name);
            });
            vm.queueChange({
                queueList: queue
            });
            vm.onRemoveItem({
                file: file
            });
        }

        function removeErrorItem(index) {
            vm.uploaderErrors.splice(index, 1);
        }
    }

    return MultipleUploads;
});
