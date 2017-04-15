define(function() {
    'use strict';
    var partialPath = "src/modules/editor/activity/pictures/views/";
    return [
        {
            state: 'editor.activity.pictures',
            config: {
                url: "/pictures",
                controller: "PicturesCtrl",
                controllerAs: "vm",
                templateUrl: partialPath + "index.html"
            }
        }
    ];
});