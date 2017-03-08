define(function() {
    'use strict';
    var partialPath = "src/modules/editor/gallery/view/";
    return [
        {
            state: 'editor',
            config: {
                url: "/editor",
                // controller: 'contactsCtrl as vm',
                abstract: true,
                // templateUrl: partialPath + "contacts/index.html"
                template: '<div ui-view></div>'
            }
        }
    ];
});