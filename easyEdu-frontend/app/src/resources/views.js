angular.module('resources.views', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/components/contactList/emailBook/view/_emailBook.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "    <div class=\"panel-heading\">\r" +
    "\n" +
    "        <h3 class=\"panel-title\">PhoneBook</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" ng-model=\"pb.searchText\" placeholder=\"Search...\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <ul class=\"list-group contactList scrollable\">\r" +
    "\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in pb.items | filter:pb.searchText\">\r" +
    "\n" +
    "            <strong>{{item.name}}</strong> <span class=\"label label-default pull-right\" title=\"{{item.group}}\">{{item.group}}</span>\r" +
    "\n" +
    "            <ul class=\"list-unstyled list-inline\">\r" +
    "\n" +
    "                <li ng-if=\"item.email\"><i class=\"glyphicon glyphicon-envelope\"></i> {{item.email}}</li>\r" +
    "\n" +
    "                <li ng-if=\"item.telephone\"><i class=\"glyphicon glyphicon-phone-alt\"></i> {{item.telephone}}</li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/components/contactList/phoneBook/view/_phoneBook.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "    <div class=\"panel-heading\">\r" +
    "\n" +
    "        <h3 class=\"panel-title\">PhoneBook</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" ng-model=\"pb.searchText\" placeholder=\"Search...\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <ul class=\"list-group contactList scrollable\">\r" +
    "\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in pb.items | filter:pb.searchText\">\r" +
    "\n" +
    "            <strong>{{item.name}}</strong> <span class=\"label label-default pull-right\" title=\"{{item.group}}\">{{item.group}}</span>\r" +
    "\n" +
    "            <ul class=\"list-unstyled list-inline\">\r" +
    "\n" +
    "                <li ng-if=\"item.email\"><i class=\"glyphicon glyphicon-envelope\"></i> {{item.email}}</li>\r" +
    "\n" +
    "                <li ng-if=\"item.telephone\"><i class=\"glyphicon glyphicon-phone-alt\"></i> {{item.telephone}}</li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/components/editor/layouts/answer-options/view/_answer-options.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <button class=\"btn btn-success\"\r" +
    "\n" +
    "                type=\"button\"\r" +
    "\n" +
    "                ng-disabled=\"vm.category.activities.length && vm.isActivityAnswerEmpty()\"\r" +
    "\n" +
    "                ng-click=\"vm.addActivity()\">\r" +
    "\n" +
    "            Adicionar\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <button class=\"btn btn-primary\"\r" +
    "\n" +
    "                type=\"button\"\r" +
    "\n" +
    "                ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\r" +
    "\n" +
    "                ng-click=\"vm.exportActivities()\">\r" +
    "\n" +
    "            Exportar para JSON\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <button class=\"btn btn-primary\"\r" +
    "\n" +
    "                type=\"button\"\r" +
    "\n" +
    "                ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\r" +
    "\n" +
    "                ng-click=\"\"\r" +
    "\n" +
    "                onclick=\"alert('Exportou a pasta compactada');\">\r" +
    "\n" +
    "            Exportar modo offline\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <button class=\"btn btn-primary\"\r" +
    "\n" +
    "                type=\"button\"\r" +
    "\n" +
    "                ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\r" +
    "\n" +
    "                ng-click=\"\"\r" +
    "\n" +
    "                onclick=\"alert('Gerou o QR Code');\">\r" +
    "\n" +
    "            Gerar QR Code\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <a id=\"downloadAnchorElem\" style=\"display:none\"></a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\" ng-if=\"vm.category.activities.length\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"checkbox\">\r" +
    "\n" +
    "            <label>\r" +
    "\n" +
    "                <input type=\"checkbox\" ng-model=\"vm.isAllSelected\" ng-click=\"vm.toggleAll()\" bn-uniform\r" +
    "\n" +
    "                       ng-model=\"activity.export\">\r" +
    "\n" +
    "                Marcar todas\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-repeat=\"activity in vm.category.activities | orderBy:$index:true\">\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <div class=\"row\" ng-click=\"vm.selectedActivity = activity\">\r" +
    "\n" +
    "        <div class=\"col-md-1\">\r" +
    "\n" +
    "            <!--<div class=\"checkbox\">-->\r" +
    "\n" +
    "            <input type=\"checkbox\" bn-uniform ng-model=\"activity.export\" ng-change=\"vm.optionToggled()\">\r" +
    "\n" +
    "            <!--</div>-->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-7\">\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label>Adicione uma imagem para a atividade</label>\r" +
    "\n" +
    "                <editor-multiple-uploads done-callback=\"vm.doneFile(files, activity)\"\r" +
    "\n" +
    "                                         on-remove-item=\"vm.removeFile(file, activity)\"\r" +
    "\n" +
    "                                         options=\"{queueLimit: 1}\"></editor-multiple-uploads>\r" +
    "\n" +
    "                <img ng-src=\"{{activity.files.image.link}}\" alt=\"Imagem da resposta\" ng-if=\"activity.files.image.link\"\r" +
    "\n" +
    "                     style=\"width: 100px; height: 100px;\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label>Adicionar um áudio para a atividade</label>\r" +
    "\n" +
    "                <i>Permitir adicionar áudio</i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <div class=\"form-group\" ng-required=\"vm.activityType === 'PICTURES'\">\r" +
    "\n" +
    "                <label>Adicionar as respostas corretas</label>\r" +
    "\n" +
    "                <editor-multiple-uploads done-callback=\"vm.doneAnswerOptions(files, activity, 'CORRECT')\"\r" +
    "\n" +
    "                                         on-remove-item=\"vm.removeFile(file, activity)\"\r" +
    "\n" +
    "                                         options=\"{queueLimit: 20}\"></editor-multiple-uploads>\r" +
    "\n" +
    "                <img ng-repeat=\"answerOption in activity.answerOptions\"\r" +
    "\n" +
    "                     ng-if=\"answerOption.type === 'CORRECT'\"\r" +
    "\n" +
    "                     ng-src=\"{{answerOption.link}}\"\r" +
    "\n" +
    "                     alt=\"Opção de resposta correta\"\r" +
    "\n" +
    "                     style=\"width: 100px; height: 100px;\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <div class=\"form-group\" ng-required=\"vm.activityType === 'PICTURES'\">\r" +
    "\n" +
    "                <label>Adicionar as respostas incorretas</label>\r" +
    "\n" +
    "                <editor-multiple-uploads done-callback=\"vm.doneAnswerOptions(files, activity, 'INCORRECT')\"\r" +
    "\n" +
    "                                         on-remove-item=\"vm.removeFile(file, activity)\"\r" +
    "\n" +
    "                                         options=\"{queueLimit: 20}\"></editor-multiple-uploads>\r" +
    "\n" +
    "                <img ng-repeat=\"answerOption in activity.answerOptions\"\r" +
    "\n" +
    "                     ng-if=\"answerOption.type === 'INCORRECT'\"\r" +
    "\n" +
    "                     ng-src=\"{{answerOption.link}}\"\r" +
    "\n" +
    "                     alt=\"Opção de resposta incorreta\"\r" +
    "\n" +
    "                     style=\"width: 100px; height: 100px;\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-4\">\r" +
    "\n" +
    "            <div class=\"form-group required\">\r" +
    "\n" +
    "                <label class=\"control-label\" for=\"activity.answer\">Resposta</label>\r" +
    "\n" +
    "                <input class=\"form-control\"\r" +
    "\n" +
    "                       type=\"text\"\r" +
    "\n" +
    "                       id=\"activity.answer\"\r" +
    "\n" +
    "                       placeholder=\"Informe a resposta da atividade\"\r" +
    "\n" +
    "                       required\r" +
    "\n" +
    "                       ng-model=\"activity.answer\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label for=\"activity.level\">Nível de dificuldade</label>\r" +
    "\n" +
    "                <select class=\"form-control\"\r" +
    "\n" +
    "                        required\r" +
    "\n" +
    "                        id=\"activity.level\"\r" +
    "\n" +
    "                        placeholder=\"Informe um nível de dificuldade\"\r" +
    "\n" +
    "                        ng-model=\"activity.level\"\r" +
    "\n" +
    "                        ng-options=\"option.value as option.label for option in vm.difficultyLevels\">\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label for=\"activity.tip\">Dica</label>\r" +
    "\n" +
    "                <input class=\"form-control\"\r" +
    "\n" +
    "                       type=\"text\"\r" +
    "\n" +
    "                       id=\"activity.tip\"\r" +
    "\n" +
    "                       placeholder=\"Informe uma dica para a atividade\"\r" +
    "\n" +
    "                       ng-model=\"activity.tip\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label for=\"activity.time\">Tempo para resolução (mm:ss)</label>\r" +
    "\n" +
    "                <input class=\"form-control\"\r" +
    "\n" +
    "                       type=\"datetime\"\r" +
    "\n" +
    "                       id=\"activity.time\"\r" +
    "\n" +
    "                       placeholder=\"59:59\"\r" +
    "\n" +
    "                       ng-model=\"activity.time\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/components/editor/layouts/letters-layout/view/_letters-layout.html',
    "<h2><i>Abrir modal para customizar o dicionário</i></h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-2\">\r" +
    "\n" +
    "        <h1 class=\"text-center\" ng-repeat=\"letter in vm.leftLetters track by $index\">{{letter}}</h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-8 text-center\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <img ng-src=\"{{vm.activity.files.image.link}}\" ng-if=\"vm.activity.files.image.link\" alt=\"Imagem da resposta\"\r" +
    "\n" +
    "                     style=\"width: 500px; height: 500px;\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <i ng-if=\"vm.activity.tip\">Dica: {{vm.activity.tip}}</i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <i class=\"fa fa-play-circle-o fa-5x\" onclick=\"document.getElementById('audio_esq').play()\"></i>\r" +
    "\n" +
    "                <audio id=\"audio_esq\" src=\"src/components/editor/layouts/generic-layout/GALINHA.mp3\"></audio>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-2\">\r" +
    "\n" +
    "        <h1 class=\"text-center\" ng-repeat=\"letter in vm.rightLetters track by $index\">{{letter}}</h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "        <h1 ng-repeat=\"letter in vm.getSplitAnswer() track by $index\" style=\"display: inline;\">\r" +
    "\n" +
    "            <u>{{letter}}</u>\r" +
    "\n" +
    "        </h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <h2>Modal, botão testar</h2>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/components/editor/layouts/memory-game/view/_memory-game.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<editor-answer-options></editor-answer-options>"
  );


  $templateCache.put('src/components/editor/layouts/multiple-uploads/views/_multiple-uploads.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <span ng-if=\"vm.uploader.queueLimit != 1\" class=\"btn btn-success fileinput-button\" ng-class=\"{disabled: vm.disabled}\">\r" +
    "\n" +
    "            <i class=\"fa fa-fw fa-plus\"></i>\r" +
    "\n" +
    "            <span>Adicionar arquivos</span>\r" +
    "\n" +
    "            <input type=\"file\" nv-file-select=\"\" uploader=\"vm.uploader\" multiple/>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "         <span ng-if=\"vm.uploader.queueLimit === 1 && vm.uploader.queue.length === 0\" class=\"btn btn-success fileinput-button\" ng-class=\"{disabled: vm.disabled}\">\r" +
    "\n" +
    "            <i class=\"fa fa-fw fa-plus\"></i>\r" +
    "\n" +
    "            <span>Adicionar arquivo</span>\r" +
    "\n" +
    "            <input type=\"file\" nv-file-select=\"\" uploader=\"vm.uploader\" />\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-md-12\" ng-if=\"vm.uploader.queue.length || vm.uploaderErrors.length\">\r" +
    "\n" +
    "        <div class=\"table\">\r" +
    "\n" +
    "            <div class=\"hidden-xs col-sm-6 bold padding-top-10 padding-left-10 padding-right-10 \">Nome do arquivo</div>\r" +
    "\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Tamanho</div>\r" +
    "\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Progresso</div>\r" +
    "\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Ações</div>\r" +
    "\n" +
    "            <div class=\"no-padding row-sm-height col-md-12\" ng-repeat=\"item in vm.uploader.queue\">\r" +
    "\n" +
    "                <hr class=\"hidden-xs col-xs-12 no-padding margin-bottom-5 margin-top-5\" ng-style=\"{'border-width': $first ? '2px' : '1px'}\">\r" +
    "\n" +
    "                <div class=\"row-sm-height\">\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 text-center bold padding-top-10\">Nome do arquivo</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle bold\">{{item.file.name}}</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.name}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Tamanho</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">{{item.file.size/1024/1024|number:2}} MB</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.size/1024/1024|number:2}} MB</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Progresso</div>\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">\r" +
    "\n" +
    "                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r" +
    "\n" +
    "                            <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ 'width': item.progress + '%' }\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Ações</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">\r" +
    "\n" +
    "                        <button ng-if=\"item.isUploading\" type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"item.cancel(); item.remove()\"\r" +
    "\n" +
    "                                ng-disabled=\"!item.isUploading\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-ban\"></span> Cancelar\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"item.remove(); vm.removeItem(item)\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">\r" +
    "\n" +
    "                        <button ng-if=\"item.isUploading\" type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"item.cancel(); item.remove()\"\r" +
    "\n" +
    "                                ng-disabled=\"!item.isUploading\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-ban\"></span> Cancelar\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"item.remove(); vm.removeItem(item)\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <hr class=\"visible-xs col-xs-12 no-padding no-margin-bottom margin-top-15\" ng-if=\"!$last\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"no-padding row-sm-height col-md-12\" ng-repeat=\"item in vm.uploaderErrors\">\r" +
    "\n" +
    "                <hr class=\"hidden-xs col-xs-12 no-padding margin-bottom-5 margin-top-5\" ng-style=\"{'border-width': $first && !vm.uploader.queue.length ? '2px' : '1px'}\">\r" +
    "\n" +
    "                <div class=\"row-sm-height\">\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 text-center bold padding-top-10\">Nome do arquivo</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle bold\">{{item.file.name}}</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.name}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Tamanho</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">{{item.file.size/1024/1024|number:2}} MB</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.size/1024/1024|number:2}} MB</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Progresso</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-danger\">item.file.error</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-danger text-center\">item.file.error</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Ações</div>\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"vm.removeErrorItem($index)\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <hr class=\"visible-xs col-xs-12 no-padding no-margin-bottom margin-top-15\" ng-if=\"!$last\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <hr/>\r" +
    "\n" +
    "        <div ng-if=\"vm.uploader.getNotUploadedItems().length\">\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <div class=\"progress\">\r" +
    "\n" +
    "                    <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ 'width': vm.uploader.progress + '%' }\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <button ng-if=\"!vm.uploader.autoUpload\" type=\"button\" class=\"btn btn-success btn-s\" ng-click=\"vm.uploader.uploadAll()\"\r" +
    "\n" +
    "                    ng-disabled=\"!vm.uploader.getNotUploadedItems().length\">\r" +
    "\n" +
    "                <span class=\"fa fa-fw fa-upload\"></span> Enviar todos\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button ng-if=\"vm.uploader.isUploading\" type=\"button\" class=\"btn btn-warning btn-s\" ng-click=\"vm.uploader.cancelAll()\"\r" +
    "\n" +
    "                    ng-disabled=\"!vm.uploader.isUploading\">\r" +
    "\n" +
    "                <span class=\"fa fa-fw fa-ban\"></span> Cancelar todos\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button ng-if=\"vm.uploader.isUploading\"  type=\"button\" class=\"btn btn-danger btn-s\" ng-click=\"vm.uploader.clearQueue()\"\r" +
    "\n" +
    "                    ng-disabled=\"!vm.uploader.queue.length\">\r" +
    "\n" +
    "                <span class=\"fa fa-fw fa-trash\"></span> Remover todos\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/components/editor/layouts/puzzle/view/_puzzle.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<editor-answer-options></editor-answer-options>"
  );


  $templateCache.put('src/components/game/letters-layout/view/_letters-layout.html',
    "<!--ng-class=\"vm.customClass\"-->\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "<div class=\"row\" style=\"margin-bottom: 20px; margin-top: 20px;\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"canvas-center\" id=\"gameCanvas_{{vm.customClass}}\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        {{vm.timer | amDateFormat:\"mm:ss\"}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"canvas-center\" id=\"gameCanvas_{{vm.customClass}}\"></div>"
  );


  $templateCache.put('src/components/game/pictures-layout/view/_pictures_layout.html',
    "<div class=\"panel-group\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading text-center\">\n" +
    "            <div ng-if=\"vm.isWinMatch || vm.isWinGame || vm.isGameOver\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12 game-result-text\">\n" +
    "                        <div ng-if=\"vm.isWinMatch || vm.isWinGame\">\n" +
    "                            <h1>Parabéns!</h1>\r" +
    "\n" +
    "                            <h3>Você ganhou {{vm.isWinMatch ? \"a partida\" : \"o jogo\"}}</h3>\n" +
    "                            <h4>O seu tempo foi de {{vm.getTimeResult()}}</h4>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"vm.isGameOver\">\n" +
    "                            <h1>Que pena!</h1>\n" +
    "                            <h3>Você perdeu o jogo</h3>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <button class=\"btn btn-warning\"\n" +
    "                                type=\"button\"\n" +
    "                                ng-click=\"vm.actionPlayAgain()\">{{vm.isGameOver ? \"Tentar novamente\" : \"Jogar novamente\"}}</button>\n" +
    "                        <button class=\"btn btn-success\"\n" +
    "                                type=\"button\"\n" +
    "                                ng-click=\"vm.actionNextPhase()\"\n" +
    "                                ng-if=\"!vm.isWinGame && !vm.isGameOver\">Próxima fase</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "            {{vm.timer | amDateFormat:\"mm:ss\"}}\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <div class=\"row\">\n" +
    "                <!-- The dnd-list directive allows to drop elements into it.\n" +
    "                 The dropped data will be added to the referenced list -->\n" +
    "                <div class=\"pictures-layout-answer-painel text-center\"\n" +
    "                     dnd-list=\"vm.activity.answers\"\n" +
    "                     dnd-horizontal-list=\"true\"\n" +
    "                     dnd-allowed-types=\"['correct']\"\n" +
    "                     dnd-disable-if=\"vm.isWinMatch || vm.isWinGame || vm.isGameOver\">\n" +
    "                    <!-- The dnd-draggable directive makes an element draggable and will\n" +
    "                         transfer the object that was assigned to it. If an element was\n" +
    "                         dragged away, you have to remove it from the original list\n" +
    "                         yourself using the dnd-moved attribute -->\n" +
    "                    <div ng-repeat=\"item in vm.activity.answers\"\n" +
    "                         class=\"col-xs-4 col-sm-2\"\n" +
    "                         dnd-draggable=\"item\"\n" +
    "                         dnd-type=\"item.type\"\n" +
    "                         dnd-moved=\"vm.activity.answers.splice($index, 1)\"\n" +
    "                         dnd-effect-allowed=\"move\">\n" +
    "                        <img class=\"img-thumbnail\" ng-src=\"{{item.image.link}}\" alt=\"{{item.image.name}}\">\n" +
    "                    </div>\n" +
    "                    <h3 ng-if=\"vm.activity.answers && !vm.activity.answers.length\">{{vm.activity.tip}}</h3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-footer\">\n" +
    "            <div class=\"row\">\n" +
    "                <!-- The dnd-list directive allows to drop elements into it.\n" +
    "                 The dropped data will be added to the referenced list -->\n" +
    "                <div dnd-list=\"vm.activity.answerOptions\"\n" +
    "                     dnd-horizontal-list=\"true\"\n" +
    "                     dnd-disable-if=\"vm.isWinMatch || vm.isWinGame || vm.isGameOver\">\n" +
    "                    <!-- The dnd-draggable directive makes an element draggable and will\n" +
    "                         transfer the object that was assigned to it. If an element was\n" +
    "                         dragged away, you have to remove it from the original list\n" +
    "                         yourself using the dnd-moved attribute -->\n" +
    "                    <div ng-repeat=\"item in vm.activity.answerOptions\"\n" +
    "                         class=\"col-xs-4 col-sm-2\"\n" +
    "                         dnd-draggable=\"item\"\n" +
    "                         dnd-type=\"item.type\"\n" +
    "                         dnd-moved=\"vm.activity.answerOptions.splice($index, 1)\"\n" +
    "                         dnd-effect-allowed=\"move\"\n" +
    "                         dnd-selected=\"models.selected = item\"\n" +
    "                         dnd-dragend=\"vm.logEvent('Drag operation ended. Drop effect: ' + dropEffect); vm.dndDragEnd();\">\n" +
    "                        <img class=\"img-thumbnail\" ng-src=\"{{item.image.link}}\" alt=\"{{item.image.name}}\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"typesDemo row hidden\">\n" +
    "    <div ng-repeat=\"list in vm.lists\" class=\"col-md-4\">\n" +
    "        <div class=\"panel panel-info\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title ng-binding\">List of {{list.label}} (max. {{list.max}})</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul dnd-list=\"list.people\"\n" +
    "                    dnd-horizontal-list=\"true\"\n" +
    "                    dnd-allowed-types=\"list.allowedTypes\"\n" +
    "                    dnd-disable-if=\"list.people.length >= list.max\">\n" +
    "\n" +
    "                    <li ng-repeat=\"person in list.people\"\n" +
    "                        dnd-draggable=\"person\"\n" +
    "                        dnd-type=\"person.type\"\n" +
    "                        dnd-disable-if=\"person.type == 'unknown'\"\n" +
    "                        dnd-moved=\"list.people.splice($index, 1)\"\n" +
    "                        class=\"background-{{person.type}}\"\n" +
    "                    >\n" +
    "                        <dnd-nodrag>\n" +
    "                            <div dnd-handle class=\"handle\">:::</div>\n" +
    "                            <div class=\"name\">\n" +
    "                                <input type=\"text\" ng-model=\"person.name\"\n" +
    "                                       class=\"background-{{person.type}} form-control input-sm\">\n" +
    "                            </div>\n" +
    "                        </dnd-nodrag>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"dndPlaceholder\">\n" +
    "                        Drop any <strong>{{list.allowedTypes.join(' or ')}}</strong> here\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"typesDemo row hidden\">\n" +
    "    <div ng-repeat=\"list in vm.lists\" class=\"col-md-4\">\n" +
    "        <div class=\"panel panel-info\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title ng-binding\">List of {{list.label}} (max. {{list.max}})</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul dnd-list=\"list.people\"\n" +
    "                    dnd-horizontal-list=\"true\"\n" +
    "                    dnd-allowed-types=\"list.allowedTypes\"\n" +
    "                    dnd-disable-if=\"list.people.length >= list.max\">\n" +
    "\n" +
    "                    <li ng-repeat=\"person in list.people\"\n" +
    "                        dnd-draggable=\"person\"\n" +
    "                        dnd-type=\"person.type\"\n" +
    "                        dnd-disable-if=\"person.type == 'unknown'\"\n" +
    "                        dnd-moved=\"list.people.splice($index, 1)\"\n" +
    "                        class=\"background-{{person.type}}\"\n" +
    "                    >\n" +
    "                        <dnd-nodrag>\n" +
    "                            <div dnd-handle class=\"handle\">:::</div>\n" +
    "                            <div class=\"name\">\n" +
    "                                <input type=\"text\" ng-model=\"person.name\"\n" +
    "                                       class=\"background-{{person.type}} form-control input-sm\">\n" +
    "                            </div>\n" +
    "                        </dnd-nodrag>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"dndPlaceholder\">\n" +
    "                        Drop any <strong>{{list.allowedTypes.join(' or ')}}</strong> here\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"advancedDemo row hidden\">\n" +
    "    <div ng-repeat=\"containers in vm.containers\" class=\"col-md-6\">\n" +
    "        <div class=\"dropzone box box-yellow\">\n" +
    "            <h3>Dropzone {{$index + 1}}</h3>\n" +
    "            <ul dnd-list=\"containers\"\n" +
    "                dnd-allowed-types=\"['container']\"\n" +
    "                dnd-external-sources=\"true\"\n" +
    "                dnd-dragover=\"vm.dragoverCallback(index, external, type, callback)\"\n" +
    "                dnd-drop=\"vm.dropCallback(index, item, external, type)\">\n" +
    "                <li ng-repeat=\"container in containers\"\n" +
    "                    dnd-draggable=\"container\"\n" +
    "                    dnd-type=\"'container'\"\n" +
    "                    dnd-effect-allowed=\"copyMove\"\n" +
    "                    dnd-moved=\"containers.splice($index, 1)\"\n" +
    "                    dnd-callback=\"container.items.length\">\n" +
    "                    <div class=\"container-element box box-blue\">\n" +
    "                        <h3>Container (effects allowed: {{container.effectAllowed}})</h3>\n" +
    "                        <ul dnd-list=\"container.items\"\n" +
    "                            dnd-allowed-types=\"['item']\"\n" +
    "                            dnd-horizontal-list=\"true\"\n" +
    "                            dnd-external-sources=\"true\"\n" +
    "                            dnd-effect-allowed=\"{{container.effectAllowed}}\"\n" +
    "                            dnd-dragover=\"vm.dragoverCallback(index, external, type)\"\n" +
    "                            dnd-drop=\"vm.dropCallback(index, item, external, type)\"\n" +
    "                            dnd-inserted=\"vm.logListEvent('inserted at', index, external, type)\"\n" +
    "                            class=\"itemlist\">\n" +
    "                            <li ng-repeat=\"item in container.items\"\n" +
    "                                dnd-draggable=\"item\"\n" +
    "                                dnd-type=\"'item'\"\n" +
    "                                dnd-effect-allowed=\"{{item.effectAllowed}}\"\n" +
    "                                dnd-dragstart=\"vm.logEvent('Started to drag an item')\"\n" +
    "                                dnd-moved=\"container.items.splice($index, 1)\"\n" +
    "                                dnd-dragend=\"vm.logEvent('Drag operation ended. Drop effect: ' + dropEffect)\">\n" +
    "                                {{item.label}}\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"clearfix\"></div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('src/components/todo/pending/view/_pending.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "    <div class=\"panel-heading\">\r" +
    "\n" +
    "        <h3 class=\"panel-title\">Pending tasks</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" placeholder=\"What you have to do?\"\r" +
    "\n" +
    "                   ng-keyup=\"vm.add(vm.item,$event)\"\r" +
    "\n" +
    "                   ng-model=\"vm.item.description\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <ul class=\"list-group todoList scrollable\">\r" +
    "\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in vm.getItems()\">\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-click=\"vm.done(item)\"/>\r" +
    "\n" +
    "            <span>{{item.description}}</span>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/contactList/view/contacts/index.html',
    "<div class=\"page-header\">\r" +
    "\n" +
    "    <h1>Contact List</h1>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"form-group\">\r" +
    "\n" +
    "    <a href=\"javascript:;\" class=\"btn btn-block btn-primary\" ng-show=\"!vm.showForm\" ng-click=\"vm.showForm=true\">New Contact</a>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"panel panel-default\" ng-show=\"vm.showForm\">\r" +
    "\n" +
    "    <div class=\"panel-heading\">\r" +
    "\n" +
    "        <h3 class=\"panel-title\">Add new contact</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "        <form ng-submit=\"vm.add(vm.newItem)\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.name\" placeholder=\"Name\" required/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.telephone\" placeholder=\"Phone number\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.email\" placeholder=\"E-mail address\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <select class=\"form-control\" ng-model=\"vm.newItem.group\" ng-options=\"group for group in groups\">\r" +
    "\n" +
    "                <option value=\"\">Group</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <hr/>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\"><button type=\"submit\" class=\"btn btn-success btn-block\">Save</button></div>\r" +
    "\n" +
    "            <div class=\"col-md-6\"><a href=\"javascript:;\" ng-click=\"vm.showForm=false\" class=\"btn btn-default btn-block\">Cancel</a></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" ng-model=\"vm.searchText\" placeholder=\"Search\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <ul class=\"list-group contactList\">\r" +
    "\n" +
    "            <li class=\"list-group-item\" ng-repeat=\"item in vm.items | filter:vm.searchText\"\r" +
    "\n" +
    "                ng-click=\"vm.toggleSelected(item)\" ng-class=\"{'selected':item.selected}\">\r" +
    "\n" +
    "                <strong>{{item.name}}</strong> <span class=\"label label-default pull-right\" title=\"{{item.group}}\">{{item.group}}</span>\r" +
    "\n" +
    "                <ul class=\"list-unstyled list-inline\">\r" +
    "\n" +
    "                    <li ng-if=\"item.email\"><i class=\"glyphicon glyphicon-envelope\"></i> {{item.email}}</li>\r" +
    "\n" +
    "                    <li ng-if=\"item.telephone\"><i class=\"glyphicon glyphicon-phone-alt\"></i> {{item.telephone}}</li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <a href=\"javascript:;\" ng-click=\"vm.deleteSelected(vm.items)\" ng-show=\"vm.getSelected().length > 0\"\r" +
    "\n" +
    "               class=\"btn btn-block btn-danger\">Delete</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/core/views/error/404.html',
    "<div class=\"alert alert-info\">O conteúdo que você está buscando não foi encontrado.</div>\r" +
    "\n" +
    "<h4>Você pode ajudar</h4>\r" +
    "\n" +
    "<ul>\r" +
    "\n" +
    "    <li>\r" +
    "\n" +
    "        <strong>Você digitou o link diretamente na barra de endereço?</strong><br>\r" +
    "\n" +
    "        Por gentileza, verifique se está correto.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>\r" +
    "\n" +
    "        <strong>Você clicou em algum link para essa área?</strong><br>\r" +
    "\n" +
    "        É preciso contatar o administrador.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>"
  );


  $templateCache.put('src/modules/core/views/error/500.html',
    "<div class=\"alert alert-info\">Uma operação não esperada foi executada.</div>"
  );


  $templateCache.put('src/modules/core/views/error/accessdenied.html',
    "\r" +
    "\n" +
    "<div class=\"alert alert-info\">\r" +
    "\n" +
    "\t<h4>Você não tem acesso a essa área.</h4>\r" +
    "\n" +
    "\tVocê deveria estar visualizando essa área? Contate seu administrador.\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/core/views/error/index.html',
    "<!-- BEGIN PAGE HEAD -->\r" +
    "\n" +
    "<div class=\"page-head\">\r" +
    "\n" +
    "\t<!-- BEGIN PAGE TITLE -->\r" +
    "\n" +
    "\t<div class=\"page-title\">\r" +
    "\n" +
    "\t\t<h1>{{$state.current.data.pageTitle}} <small>{{$state.current.data.subTitle}}</small></h1>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<!-- END PAGE TITLE -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- END PAGE HEAD -->\r" +
    "\n" +
    "<!-- BEGIN PAGE CONTENT INNER -->\r" +
    "\n" +
    "<div class=\"row margin-top-10\">\r" +
    "\n" +
    "\t<div class=\"col-md-12\">\r" +
    "\n" +
    "\t\t<div class=\"portlet light\">\r" +
    "\n" +
    "\t\t\t<div class=\"portlet-body\" ui-view=\"error-content\">\t\t\t\t\r" +
    "\n" +
    "\t\t\t</div>\t\t\t\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- END CONTENT -->"
  );


  $templateCache.put('src/modules/dashboard/view/dashboard/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"alert alert-info\">\r" +
    "\n" +
    "            <strong>Hey!</strong> I blogged about this project <a href=\"http://dsalvagni.com.br/angularjs-para-aplicacoes-de-larga-escala/\" target=\"_blank\" style=\"color:#fff; text-decoration:underline; \">here [pt-BR]</a>.\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-6\">\r" +
    "\n" +
    "        <todo-pending-tasks></todo-pending-tasks>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-6\">\r" +
    "\n" +
    "        <contact-list-phone-book></contact-list-phone-book>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/editor/activity/pictures/views/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-6 col-md-4\">\r" +
    "\n" +
    "        <label for=\"category.name\" class=\"control-label\">Nome da categoria</label>\r" +
    "\n" +
    "        <input class=\"form-control\" id=\"category.name\" type=\"text\" ng-model=\"vm.category.name\" placeholder=\"Dê um nome para a categoria\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-6 col-md-8\">\r" +
    "\n" +
    "        <editor-multiple-uploads done-callback=\"vm.doneFile(file, activity)\" on-remove-item=\"vm.removeFile(file, activity)\" options=\"{queueLimit: 1}\"></editor-multiple-uploads>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <i>Permitir carregar uma imagem para ficar como capa do álbum</i>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<editor-answer-options selected-activity=\"vm.selectedActivity\" category=\"vm.category\" activity-type=\"PICTURES\"></editor-answer-options>"
  );


  $templateCache.put('src/modules/editor/activity/views/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <h1>Escolha uma das opções de layout disponíveis</h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div><div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-3 text-center\">\r" +
    "\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ui-sref=\"editor.activity.word\">\r" +
    "\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/bubbleLetters.png\" alt=\"Imagem layout letras\">\r" +
    "\n" +
    "            <h4 class=\"text-center\">Letras</h4>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-3 text-center\">\r" +
    "\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ui-sref=\"editor.activity.pictures\">\r" +
    "\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/pictures.png\" alt=\"Imagem layout imagens\">\r" +
    "\n" +
    "            <h4 class=\"text-center\">Imagens</h4>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-3 text-center\">\r" +
    "\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ui-sref=\"editor.activity.puzzle\" disabled>\r" +
    "\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/puzzle.png\" alt=\"Imagem layout quebra-cabeça\">\r" +
    "\n" +
    "            <h4 class=\"text-center\">Quebra-cabeça</h4>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-3 text-center\">\r" +
    "\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ui-sref=\"editor.activity.memory\" disabled>\r" +
    "\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/memoryGame.png\" alt=\"Imagem layout memória\">\r" +
    "\n" +
    "            <h4 class=\"text-center\">Memória</h4>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--<div class=\"col-md-12\">\r" +
    "\n" +
    "        <a ui-sref=\"editor.activity.word\"><h4>Opção 1</h4></a>\r" +
    "\n" +
    "        <h4>Opção 2</h4>\r" +
    "\n" +
    "        <h4>Opção 3</h4>\r" +
    "\n" +
    "        <h4>Opção 4</h4>\r" +
    "\n" +
    "    </div>-->\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/activity/word/views/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-6 col-md-4\">\r" +
    "\n" +
    "        <label for=\"category.name\" class=\"control-label\">Nome da categoria</label>\r" +
    "\n" +
    "        <input class=\"form-control\" id=\"category.name\" type=\"text\" ng-model=\"vm.category.name\" placeholder=\"Dê um nome para a categoria\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-6 col-md-8\">\r" +
    "\n" +
    "        <editor-multiple-uploads done-callback=\"vm.doneFile(file, activity)\" on-remove-item=\"vm.removeFile(file, activity)\" options=\"{queueLimit: 1}\"></editor-multiple-uploads>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <i>Permitir carregar uma imagem para ficar como capa do álbum</i>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<editor-letters-layout activity=\"vm.selectedActivity\" alphabet=\"vm.category.alphabet\"></editor-letters-layout>\r" +
    "\n" +
    "<editor-answer-options selected-activity=\"vm.selectedActivity\" category=\"vm.category\" activity-type=\"LETTERS\"></editor-answer-options>"
  );


  $templateCache.put('src/modules/editor/gallery/view/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <a class=\"btn btn-success btn-lg\" ui-sref=\"editor.activity.new\">\r" +
    "\n" +
    "            <i class=\"fa fa-plus fa-3x\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h3>Exemplo de álbum 1</h3>\r" +
    "\n" +
    "        <h3>Exemplo de álbum 2</h3>\r" +
    "\n" +
    "        <h3>Exemplo de álbum 3</h3>\r" +
    "\n" +
    "        <h3>Exemplo de álbum 4</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/my-gallery/view/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <h3>Meu álbum 1</h3>\r" +
    "\n" +
    "        <h3>Meu álbum 2</h3>\r" +
    "\n" +
    "        <h3>Meu álbum 3</h3>\r" +
    "\n" +
    "        <h3>Meu álbum 4</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/views/index.html',
    "<nav class=\"navbar navbar-default navbar-static-top\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"navbar-header\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\r" +
    "\n" +
    "                    aria-expanded=\"false\" aria-controls=\"navbar\">\r" +
    "\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <a class=\"navbar-brand\" ui-sref=\"editor\">EasyEdu</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r" +
    "\n" +
    "            <ul class=\"nav navbar-nav\" ng-if=\"app.primaryNavigation.length > 0\">\r" +
    "\n" +
    "                <li ng-repeat=\"item in app.primaryNavigation | orderBy: 'order'\" ui-sref-active=\"active\">\r" +
    "\n" +
    "                    <a ui-sref=\"{{item.stateName}}\" ng-bind=\"item.title\"></a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--/.nav-collapse -->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "    <div ui-view></div>\r" +
    "\n" +
    "    <footer class=\"footer\">\r" +
    "\n" +
    "        <hr/>\r" +
    "\n" +
    "        <p class=\"text-center\">Made by Felipe Corso</p>\r" +
    "\n" +
    "    </footer>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/category.html',
    "<div class=\"panel-group\">\r" +
    "\n" +
    "    <div class=\"panel panel-default\">\r" +
    "\n" +
    "        <div class=\"panel-heading text-center\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <h2>Escolha uma categoria</h2>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body text-center\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-xs-6 col-sm-4 col-md-2\" style=\"max-height: 235px; height: 235px;\" ng-repeat=\"category in vm.categories\">\r" +
    "\n" +
    "                    <a class=\"text-decoration-none\" ng-click=\"vm.setCategory(category)\" ui-sref=\"game.mode({category: category})\">\r" +
    "\n" +
    "                        <div class=\"thumbnail\">\r" +
    "\n" +
    "                            <img class=\"img-thumbnail\" ng-src=\"{{category.image.link}}\" ng-if=\"category.image.link\" alt=\"Imagem da categoria\">\r" +
    "\n" +
    "                            <span>{{category.name}}</span>\r" +
    "\n" +
    "                            <!--<a class=\"btn\" ui-sref=\"game.game-mode\">Português</a><a class=\"btn\" ui-sref=\"game.game-mode\">Matemática</a><a class=\"btn\" ui-sref=\"game.game-mode\">Inglês</a>-->\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/game-mode.html',
    "<div class=\"panel-group\">\r" +
    "\n" +
    "    <div class=\"panel panel-default\">\r" +
    "\n" +
    "        <div class=\"panel-heading text-center\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <h2>Escolha o modo de jogo</h2>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body\">\r" +
    "\n" +
    "            <div class=\"row text-center\">\r" +
    "\n" +
    "                <div class=\"col-xs-6\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-game-mode\" type=\"button\" ng-click=\"vm.setGameMode('SINGLE_PLAYER')\"\r" +
    "\n" +
    "                            ui-sref=\"game.play({category: vm.category, gameMode: 'SINGLE_PLAYER'})\">\r" +
    "\n" +
    "                        <i class=\"fa fa-user fa-5x\"></i>\r" +
    "\n" +
    "                        Single player\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-xs-6\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-game-mode\" type=\"button\" ng-click=\"vm.setGameMode('MULTIPLAYER')\"\r" +
    "\n" +
    "                            ui-sref=\"game.play({category: vm.category, gameMode: 'MULTIPLAYER'})\">\r" +
    "\n" +
    "                        <i class=\"fa fa-users fa-5x\"></i>\r" +
    "\n" +
    "                        Multiplayer\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/play.html',
    "<div class=\"row\" ng-if=\"vm.gameMode !== 'MULTIPLAYER'\">\r" +
    "\n" +
    "    <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "        <game-letters-layout category=\"vm.category\" game-mode=\"vm.gameMode\" ng-if=\"vm.category.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "        <game-pictures-layout category=\"vm.category\" game-mode=\"vm.gameMode\" ng-if=\"vm.category.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row hidden\" ng-if=\"vm.gameMode === 'MULTIPLAYER'\">\r" +
    "\n" +
    "    <div class=\"text-left rotate-left\">\r" +
    "\n" +
    "        <game-letters-layout category=\"vm.category\" game-mode=\"vm.gameMode\" ng-if=\"vm.category.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "        <game-pictures-layout category=\"vm.category\" game-mode=\"vm.gameMode\" ng-if=\"vm.category.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"text-right rotate-right\">\r" +
    "\n" +
    "        <game-letters-layout category=\"vm.category\" game-mode=\"vm.gameMode\" ng-if=\"vm.category.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "        <game-pictures-layout category=\"vm.category\" game-mode=\"vm.gameMode\" ng-if=\"vm.category.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/game/views/start.html',
    "<div class=\"panel-group\">\r" +
    "\n" +
    "    <div class=\"panel panel-default\">\r" +
    "\n" +
    "        <div class=\"panel-heading text-center\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <h1>EasyEdu</h1>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body text-center\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <a class=\"btn btn-success btn-lg\" ui-sref=\"game.category\">Iniciar</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-footer\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <!--<button class=\"btn btn-link pull-right\" type=\"button\">Importar atividade</button>-->\r" +
    "\n" +
    "                    <a class=\"pull-right\" href=\"#\">Importar atividade</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/todo/view/todo/index.html',
    "<div class=\"page-header\">\r" +
    "\n" +
    "    <h1>Todo List</h1>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"form-group\">\r" +
    "\n" +
    "    <input type=\"text\" class=\"form-control input-lg\" placeholder=\"What you have to do?\" ng-keyup=\"vm.add(vm.item,$event)\"\r" +
    "\n" +
    "           ng-model=\"vm.item.description\"/>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"todoList\">\r" +
    "\n" +
    "    <ul class=\"list-group\">\r" +
    "\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in vm.items\">\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-model=\"item.done\"/>\r" +
    "\n" +
    "            <span ng-class=\"{complete: item.done}\">{{item.description}}</span>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <a href=\"javascript:;\" ng-click=\"vm.deleteSelected(vm.items)\" ng-show=\"vm.getSelectedTasks().length > 0\"\r" +
    "\n" +
    "       class=\"btn btn-block btn-danger\">Delete</a>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
