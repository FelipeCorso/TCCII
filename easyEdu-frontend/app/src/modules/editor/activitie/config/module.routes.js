define(function () {
    'use strict';
    var partialPath = "src/modules/editor/activitie/view/";
    return [
        {
            state: 'activitie',
            config: {
                url: "/activitie",
                abstract: true,
                template: '<div ui-view></div>'
            }
        },
        {
            state: 'activitie.new',
            config: {
                url: "/new",
                controller: 'MyGalleryCtrl as vm',
                templateUrl: partialPath + "new.html"
            }
        }
    ];
});