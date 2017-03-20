define(function() {
    'use strict';
    var partialPath = "src/modules/game/views/";
    return [
        {
            state: 'game',
            config: {
                url: "/game",
                template: '<div ui-view></div>',
                redirectTo: "game.play"
            }
        },
        {
            state: 'game.play',
            config: {
                url: "/",
                controller: "GameCtrl",
                controllerAs: "vm",
                templateUrl: partialPath + "play.html"
            }
        },
        {
            state: 'game.category',
            config: {
                url: "/category",
                controller: "GameCtrl",
                controllerAs: "vm",
                templateUrl: partialPath + "category.html"
            }
        },
        {
            state: 'game.game-mode',
            config: {
                url: "/game-mode",
                controller: "GameCtrl",
                controllerAs: "vm",
                templateUrl: partialPath + "game-mode.html"
            }
        },
        {
            state: 'game.start',
            config: {
                url: "/start",
                controller: "GameCtrl",
                controllerAs: "vm",
                templateUrl: partialPath + "start.html"
            }
        }
    ];
});