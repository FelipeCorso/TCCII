define(function () {
    'use strict';
    var partialPath = "src/modules/game/views/";
    return [
        {
            state: 'game',
            config: {
                url: "/game",
                controller: "GameCtrl",
                controllerAs: "vm",
                template: '<div class="container" ui-view></div>',
                redirectTo: "game.play"
            }
        },
        {
            state: 'game.play',
            config: {
                url: "/",
                templateUrl: partialPath + "play.html"
            }
        },
        {
            state: 'game.category',
            config: {
                url: "/category",
                templateUrl: partialPath + "category.html"
            }
        },
        {
            state: 'game.game-mode',
            config: {
                url: "/game-mode",
                params: {
                    category: undefined
                },
                templateUrl: partialPath + "game-mode.html",
                onEnter: ["$state", "$stateParams", function ($state, $stateParams) {
                    if (!$stateParams.category) {
                        $state.go("error.404");
                    }
                }]
            }
        },
        {
            state: 'game.start',
            config: {
                url: "/start",
                params: {
                    category: undefined,
                    gameMode: undefined
                },
                templateUrl: partialPath + "start.html",
                onEnter: ["$state", "$stateParams", function ($state, $stateParams) {
                    if (!$stateParams.category || !$stateParams.gameMode) {
                        $state.go("error.404");
                    }
                }]
            }
        }
    ];
});