define(function() {
    'use strict';
    var partialPath = "src/modules/editor/activity/word/views/";
    return [
        {
            state: 'editor.activity.word',
            config: {
                url: "/word",
                controller: "WordCtrl",
                controllerAs: "vm",
                templateUrl: partialPath + "index.html"
            }
        }
    ];
});