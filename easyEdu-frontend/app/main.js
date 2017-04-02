requirejs.config({
    baseUrl: './',
    paths: {
        angular: 'vendor/angular/angular.min',
        'angular-mocks': 'vendor/angular-mocks/angular-mocks',
        'angular-route': 'vendor/angular-route/angular-route',
        'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
        'angular-file-upload': 'vendor/angular-file-upload/dist/angular-file-upload',
        bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
        lodash: 'vendor/lodash/lodash'

    },
    packages: [],
    shim: {
        angular: {
            exports: "angular"
        },
        'angular-ui-router': {
            deps: [
                'angular',
                'angular-route'
            ]
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        }
    }
});

require([
    'angular',
    'angular-ui-router',
    'angular-route',
    'lodash'
], function() {
    require(['app'], function(app) {
        angular.bootstrap(document, [app.name]);
    });

});
