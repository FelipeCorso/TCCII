angular.module('resources.views', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/components/contactList/emailBook/view/_emailBook.html',
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">PhoneBook</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" ng-model=\"pb.searchText\" placeholder=\"Search...\"/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul class=\"list-group contactList scrollable\">\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in pb.items | filter:pb.searchText\">\n" +
    "            <strong>{{item.name}}</strong> <span class=\"label label-default pull-right\" title=\"{{item.group}}\">{{item.group}}</span>\n" +
    "            <ul class=\"list-unstyled list-inline\">\n" +
    "                <li ng-if=\"item.email\"><i class=\"glyphicon glyphicon-envelope\"></i> {{item.email}}</li>\n" +
    "                <li ng-if=\"item.telephone\"><i class=\"glyphicon glyphicon-phone-alt\"></i> {{item.telephone}}</li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('src/components/contactList/phoneBook/view/_phoneBook.html',
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">PhoneBook</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" ng-model=\"pb.searchText\" placeholder=\"Search...\"/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul class=\"list-group contactList scrollable\">\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in pb.items | filter:pb.searchText\">\n" +
    "            <strong>{{item.name}}</strong> <span class=\"label label-default pull-right\" title=\"{{item.group}}\">{{item.group}}</span>\n" +
    "            <ul class=\"list-unstyled list-inline\">\n" +
    "                <li ng-if=\"item.email\"><i class=\"glyphicon glyphicon-envelope\"></i> {{item.email}}</li>\n" +
    "                <li ng-if=\"item.telephone\"><i class=\"glyphicon glyphicon-phone-alt\"></i> {{item.telephone}}</li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('src/components/editor/layouts/answer-options/view/_answer-options.html',
    "<h1>Respostassss</h1>"
  );


  $templateCache.put('src/components/editor/layouts/generic-layout/view/_generic-layout.html',
    "<h1>Imagem/Som/Texto</h1>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<editor-multiple-uploads></editor-multiple-uploads>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<editor-answer-options></editor-answer-options>"
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
    "            <input type=\"file\" nv-file-select=\"\" uploader=\"vm.uploader\" multiple  />\r" +
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
    "            <input type=\"file\" nv-file-select=\"\" uploader=\"vm.uploader\" multiple  />\r" +
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


  $templateCache.put('src/components/todo/pending/view/_pending.html',
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Pending tasks</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" placeholder=\"What you have to do?\"\n" +
    "                   ng-keyup=\"vm.add(vm.item,$event)\"\n" +
    "                   ng-model=\"vm.item.description\"/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul class=\"list-group todoList scrollable\">\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in vm.getItems()\">\n" +
    "            <input type=\"checkbox\" ng-click=\"vm.done(item)\"/>\n" +
    "            <span>{{item.description}}</span>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('src/modules/contactList/view/contacts/index.html',
    "<div class=\"page-header\">\n" +
    "    <h1>Contact List</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group\">\n" +
    "    <a href=\"javascript:;\" class=\"btn btn-block btn-primary\" ng-show=\"!vm.showForm\" ng-click=\"vm.showForm=true\">New Contact</a>\n" +
    "</div>\n" +
    "<div class=\"panel panel-default\" ng-show=\"vm.showForm\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Add new contact</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <form ng-submit=\"vm.add(vm.newItem)\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.name\" placeholder=\"Name\" required/>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.telephone\" placeholder=\"Phone number\"/>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.email\" placeholder=\"E-mail address\"/>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <select class=\"form-control\" ng-model=\"vm.newItem.group\" ng-options=\"group for group in groups\">\n" +
    "                <option value=\"\">Group</option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "        <hr/>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\"><button type=\"submit\" class=\"btn btn-success btn-block\">Save</button></div>\n" +
    "            <div class=\"col-md-6\"><a href=\"javascript:;\" ng-click=\"vm.showForm=false\" class=\"btn btn-default btn-block\">Cancel</a></div>\n" +
    "        </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" ng-model=\"vm.searchText\" placeholder=\"Search\"/>\n" +
    "        </div>\n" +
    "        <ul class=\"list-group contactList\">\n" +
    "            <li class=\"list-group-item\" ng-repeat=\"item in vm.items | filter:vm.searchText\"\n" +
    "                ng-click=\"vm.toggleSelected(item)\" ng-class=\"{'selected':item.selected}\">\n" +
    "                <strong>{{item.name}}</strong> <span class=\"label label-default pull-right\" title=\"{{item.group}}\">{{item.group}}</span>\n" +
    "                <ul class=\"list-unstyled list-inline\">\n" +
    "                    <li ng-if=\"item.email\"><i class=\"glyphicon glyphicon-envelope\"></i> {{item.email}}</li>\n" +
    "                    <li ng-if=\"item.telephone\"><i class=\"glyphicon glyphicon-phone-alt\"></i> {{item.telephone}}</li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <div>\n" +
    "            <a href=\"javascript:;\" ng-click=\"vm.deleteSelected(vm.items)\" ng-show=\"vm.getSelected().length > 0\"\n" +
    "               class=\"btn btn-block btn-danger\">Delete</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('src/modules/dashboard/view/dashboard/index.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div class=\"alert alert-info\">\n" +
    "            <strong>Hey!</strong> I blogged about this project <a href=\"http://dsalvagni.com.br/angularjs-para-aplicacoes-de-larga-escala/\" target=\"_blank\" style=\"color:#fff; text-decoration:underline; \">here [pt-BR]</a>.\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <todo-pending-tasks></todo-pending-tasks>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <contact-list-phone-book></contact-list-phone-book>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('src/modules/editor/activity/views/new.html',
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
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <a ui-sref=\"editor.activity.word\"><h4>Opção 1</h4></a>\r" +
    "\n" +
    "        <h4>Opção 2</h4>\r" +
    "\n" +
    "        <h4>Opção 3</h4>\r" +
    "\n" +
    "        <h4>Opção 4</h4>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/activity/views/word.html',
    "<h1>generic</h1>\r" +
    "\n" +
    "<editor-generic-layout></editor-generic-layout>"
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


  $templateCache.put('src/modules/todo/view/todo/index.html',
    "<div class=\"page-header\">\n" +
    "    <h1>Todo List</h1>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "    <input type=\"text\" class=\"form-control input-lg\" placeholder=\"What you have to do?\" ng-keyup=\"vm.add(vm.item,$event)\"\n" +
    "           ng-model=\"vm.item.description\"/>\n" +
    "</div>\n" +
    "<div class=\"todoList\">\n" +
    "    <ul class=\"list-group\">\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in vm.items\">\n" +
    "            <input type=\"checkbox\" ng-model=\"item.done\"/>\n" +
    "            <span ng-class=\"{complete: item.done}\">{{item.description}}</span>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<div>\n" +
    "    <a href=\"javascript:;\" ng-click=\"vm.deleteSelected(vm.items)\" ng-show=\"vm.getSelectedTasks().length > 0\"\n" +
    "       class=\"btn btn-block btn-danger\">Delete</a>\n" +
    "</div>\n"
  );

}]);
