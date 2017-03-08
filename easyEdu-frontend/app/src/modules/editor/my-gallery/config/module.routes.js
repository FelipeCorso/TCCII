define(function () {
    'use strict';
    var partialPath = "src/modules/editor/my-gallery/view/";
    return [
        {
            state: 'editor.my-gallery',
            config: {
                url: "/my-gallery",
                controller: 'MyGalleryCtrl as vm',
                templateUrl: partialPath + "index.html"
            }
        }
    ];
});