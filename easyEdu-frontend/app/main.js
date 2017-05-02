requirejs.config({
    baseUrl: './',
    paths: {
        jquery: 'vendor/jquery/dist/jquery.min',
        angular: 'vendor/angular/angular.min',
        'angular-mocks': 'vendor/angular-mocks/angular-mocks',
        'angular-route': 'vendor/angular-route/angular-route',
        'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
        'angular-file-upload': 'vendor/angular-file-upload/dist/angular-file-upload',
        bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
        moment: 'vendor/moment/min/moment.min',
        'angular-moment': 'vendor/angular-moment/angular-moment.min',
        lodash: 'vendor/lodash/lodash',
        dndLists: 'vendor/angular-drag-and-drop-lists/angular-drag-and-drop-lists',
        "DragDropTouch": 'src/components/game/pictures-layout/vendor/DragDropTouch',
        "qrcode": "../node_modules/qrcode-generator/qrcode",
        "qrcode-utf8": "../node_modules/qrcode-generator/qrcode_UTF8",
        "monospaced.qrcode": "vendor/angular-qrcode/angular-qrcode"
    },
    packages: [],
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        angular: {
            exports: "angular",
            deps: ["jquery"]
        },
        app: {
            deps: ['angular', 'jquery']
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
        },
        moment: {
            exports: 'moment'
        },
        'angular-moment': {
            deps: ['moment', 'angular']
        },
        qrcode: {
            exports: "qrcode"
        },
        "qrcode-utf8": {
            deps: ["qrcode"]
        }
    }
});

/*require([
 'angular',
 'angular-ui-router',
 'angular-route',
 'lodash',
 'moment',
 'angular-moment'
 ], function () {
 require(['app'], function (app) {
 angular.bootstrap(document, [app.name]);
 });
 });*/
require([
    'jquery',
    'app'
], function($, app) {
    angular.bootstrap(document, [app.name], {
        strictDi: false
    });
});
