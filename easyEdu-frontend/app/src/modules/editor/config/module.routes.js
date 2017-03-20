define(function() {
    'use strict';
    var partialPath = "src/modules/editor/views/";
    return [
        {
            state: 'editor',
            config: {
                url: "/editor",
                // controller: 'contactsCtrl as vm',
                // abstract: true,
                templateUrl: partialPath + "index.html"
                // template: '<div ui-view></div>'
            }
        }
    ];
});