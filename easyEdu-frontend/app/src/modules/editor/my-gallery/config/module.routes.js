define(function() {
    'use strict';
    var partialPath = "src/modules/editor/my-gallery/view/";
    return [
        {
            state: 'editor.my-gallery',
            config: {
                url: "/my-gallery",
                controller: 'MyGalleryCtrl as vm',
                templateUrl: partialPath + "index.html",
                resolve: {
                    MyGalleryData: MyGalleryData
                }
            }
        }
    ];

    MyGalleryData.$inject = ["AuthorizationSvc"];
    function MyGalleryData(AuthorizationSvc) {
        if (AuthorizationSvc.isSignedInGoogle()) {
            return AuthorizationSvc.isExistRootFolder()
                .then(function(response) {
                    if (response) {
                        return AuthorizationSvc.getFile(response.id, 'metadata.json')
                    }
                    return [];
                })
                .then(function(response) {
                    return response || [];
                });
        }
        return [];
    }
});