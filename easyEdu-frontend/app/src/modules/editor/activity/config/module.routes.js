define(function() {
    'use strict';
    var partialPath = "src/modules/editor/activity/views/";
    return [
        {
            state: 'editor.activity',
            config: {
                url: "/activity",
                abstract: true,
                template: '<div ui-view></div>'
            }
        },
        {
            state: 'editor.activity.new',
            config: {
                url: "/new",
                templateUrl: partialPath + "index.html"
            }
        }
    ];
});