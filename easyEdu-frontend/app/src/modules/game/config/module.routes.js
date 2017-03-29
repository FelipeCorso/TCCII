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
                redirectTo: "game.start"
            }
        },
        {
            state: 'game.start',
            config: {
                url: "/",
                templateUrl: partialPath + "start.html"
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
            state: 'game.mode',
            config: {
                url: "/mode",
                params: {
                    category: undefined
                },
                templateUrl: partialPath + "game-mode.html",
                onEnter: ["$state", "$stateParams", function ($state, $stateParams) {
                    if (!$stateParams.category) {
                        // TODO: remover o comentário quando finalizar
                        // isSmartPhone only single player
                        // $state.go("error.404");
                    }
                }]
            }
        },
        {
            state: 'game.play',
            config: {
                url: "/play",
                params: {
                    category: undefined,
                    gameMode: undefined
                },
                templateUrl: partialPath + "play.html",
                onEnter: ["$state", "$stateParams", function ($state, $stateParams) {
                    if (!$stateParams.category || !$stateParams.gameMode) {
                        // TODO: remover o comentário quando finalizar
                        // $state.go("error.404");
                    }
                }]
            }
        }
    ];
});