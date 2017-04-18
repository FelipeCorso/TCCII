define([], function () {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/game/pictures-layout/view/_pictures_layout.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                category: "=",
                gameMode: "=",
                customClass: "@"
            }
        }
    }

    Controller.$inject = ["$scope", "$timeout", "moment"];
    /*@ngInject*/
    function Controller($scope, $timeout, moment) {
        var _ = require('lodash');
        var vm = this;
        var transparent = true;
        var centerImage;
        var answerOptions;
        var difficultyLevels = ["EASY", "MEDIUM", "HARD", "IMPOSSIBLE"];
        var currentLevel = "EASY";
        var currentLevelIndex = 0;
        var btnPlayAgain;
        var btnNextPhase;
        var textGameResult;
        var scoreText;
        var timer;
        var timerText;


        vm.lists = [
            {
                label: "Men",
                allowedTypes: ['man'],
                max: 4,
                people: [
                    {name: "Bob", type: "man"},
                    {name: "Charlie", type: "man"},
                    {name: "Dave", type: "man"}
                ]
            },
            {
                label: "Women",
                allowedTypes: ['woman'],
                max: 4,
                people: [
                    {name: "Alice", type: "woman"},
                    {name: "Eve", type: "woman"},
                    {name: "Peggy", type: "woman"}
                ]
            },
            {
                label: "People",
                allowedTypes: ['man', 'woman'],
                max: 6,
                people: [
                    {name: "Frank", type: "man"},
                    {name: "Mallory", type: "woman"},
                    {name: "Alex", type: "unknown"},
                    {name: "Oscar", type: "man"},
                    {name: "Wendy", type: "woman"}
                ]
            }
        ];

        vm.containers = [
            [
                {
                    "items": [
                        {
                            "label": "all 10",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 11",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 13",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 14",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 15",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 12",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 16",
                            "effectAllowed": "all"
                        }
                    ],
                    "effectAllowed": "all"
                },
                {
                    "items": [
                        {
                            "label": "copy 24",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 25",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 26",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 27",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 28",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 29",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 30",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 26",
                            "effectAllowed": "copy"
                        }
                    ],
                    "effectAllowed": "copy"
                },
                {
                    "items": [
                        {
                            "label": "copyLink 38",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 39",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 40",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 41",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 42",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 43",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 44",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 40",
                            "effectAllowed": "copyLink"
                        }
                    ],
                    "effectAllowed": "copyLink"
                }
            ],
            [
                {
                    "items": [
                        {
                            "label": "move 17",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 18",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 23",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 19",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 20",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 21",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 22",
                            "effectAllowed": "move"
                        }
                    ],
                    "effectAllowed": "move"
                },
                {
                    "items": [
                        {
                            "label": "link 31",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 32",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 33",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 34",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 35",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 36",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 37",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 33",
                            "effectAllowed": "link"
                        }
                    ],
                    "effectAllowed": "link"
                },
                {
                    "items": [
                        {
                            "label": "copyMove 45",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 46",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 51",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 47",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 48",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 49",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 50",
                            "effectAllowed": "copyMove"
                        }
                    ],
                    "effectAllowed": "copyMove"
                }
            ]
        ];


        $scope.$watch('dragstart', function (e,a,b,c) {
            if(e){
                e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
                e.dataTransfer.setData('Text', this.id); // required otherwise doesn't work
            }
        });

        $scope.$watch('drop', function (e,a,b,c) {
            if(e){
                e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
                e.dataTransfer.setData('Text', this.id); // required otherwise doesn't work
            }
        });

        vm.dragoverCallback = function(index, external, type, callback) {
            vm.logListEvent('dragged over', index, external, type);
            // Invoke callback to origin for container types.
            if (type == 'container' && !external) {
                console.log('Container being dragged contains ' + callback() + ' items');
            }
            return index < 10; // Disallow dropping in the third row.
        };

        vm.dropCallback = function(index, item, external, type) {
            vm.logListEvent('dropped at', index, external, type);
            // Return false here to cancel drop. Return true if you insert the item yourself.
            return item;
        };

        vm.logEvent = function(message) {
            console.log(message);
        };

        vm.logListEvent = function(action, index, external, type) {
            var message = external ? 'External ' : '';
            message += type + ' element was ' + action + ' position ' + index;
            console.log(message);
        };

        // Initialize model
        var id = 10;
        angular.forEach(['all', 'move', 'copy', 'link', 'copyLink', 'copyMove'], function(effect, i) {
            var container = {items: [], effectAllowed: effect};
            for (var k = 0; k < 7; ++k) {
                container.items.push({label: effect + ' ' + id++, effectAllowed: effect});
            }
            vm.containers[i % vm.containers.length].push(container);
        });
        

        //  The Google WebFont Loader will look for this object, so create it before loading the script.
        window.WebFontConfig = {

            //  'active' means all requested fonts have finished loading
            //  We set a 1 second delay before calling 'createText'.
            //  For some reason if we don't the browser cannot render the text the first time it's created.
            active: function () {
                //game.time.events.add(Phaser.Timer.SECOND, showTextWinMatch, this);
            },

            //  The Google Fonts we want to load (specify as many as you like in the array)
            google: {
                families: ['Finger Paint']
            }

        };

       /* var game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'gameCanvas_' + vm.customClass, {
            preload: preload,
            create: create,
            update: update,
            render: render
        }, transparent);*/

        function preload() {

            game.load.crossOrigin = "anonymous";
            game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
            game.load.image('centerImage', vm.activity.files.image.link);
            game.load.image('btnPlayAgain', 'assets/img/playAgain.png');
            game.load.image('btnNextPhase', 'assets/img/nextPhase.png');
        }

        function create() {
            //  We're going to be using physics, so enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);

            centerImage = game.add.sprite(game.world.centerX, game.world.centerY, 'centerImage');
            centerImage.anchor.setTo(0.5, 0.5);

            answerOptions = game.add.group(undefined,"answerOptions");
            answerOptions.enableBody=true;
            initAnswerOptions();
        }

        function update() {
            if (isGameOver()) {
                gameOver();
            }
        }

        function render() {
        }

        function initAnswerOptions(){

        }


        function isGameOver() {
            return !timer.get("minute") && !timer.get("second");
        }

        function gameOver() {
            showGameResultText("Que pena!\nVocê perdeu o jogo.");
            disablePictures();
            showButtonPlayAgain();
        }

        function showGameResultText(text) {
            textGameResult = game.add.text(game.world.centerX, game.world.centerY - 100, text);
            textGameResult.anchor.setTo(0.5);

            textGameResult.font = 'Finger Paint';
            textGameResult.fontSize = 60;

            //  If we don't set the padding the font gets cut off
            //  Comment out the line below to see the effect
            textGameResult.padding.set(10, 16);

            var grd = textGameResult.context.createLinearGradient(0, 0, 0, textGameResult.canvas.height);
            grd.addColorStop(0, '#8ED6FF');
            grd.addColorStop(1, '#004CB3');
            textGameResult.fill = grd;

            textGameResult.align = 'center';
            textGameResult.stroke = '#000000';
            textGameResult.strokeThickness = 2;
            textGameResult.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
        }

        function showTextScore() {
            // O seu tempo foi de 00:30.
            scoreText = game.add.text(game.world.centerX, game.world.centerY);
            scoreText.top = textGameResult.bottom + 50;
            scoreText.anchor.setTo(0.5);
            scoreText.text = "O seu tempo foi de ";
            scoreText.text += moment.utc(moment(vm.activity.time, "mm:ss").diff(timer, "mm:ss")).format("mm:ss");

            scoreText.font = 'Finger Paint';
            scoreText.fontSize = 36;
        }

        function disablePictures() {
            //    alphabet.setAll('inputEnabled', false);
        }

        $scope.$on("$destroy", function () {
            game.destroy(); // Clean up the game when we leave this scope
        });

        function showButtonPlayAgain() {
            btnPlayAgain = game.add.button(game.world.centerX - 350, 400, 'btnPlayAgain', actionPlayAgain);
            btnPlayAgain.right = game.world.centerX - 25;
            btnPlayAgain.top = tip.centerY + 50;
        }

        function actionPlayAgain() {
            game.state.restart();
        }

        function showButtonNextPhase() {
            btnNextPhase = game.add.button(game.world.centerX + 10, 400, 'btnNextPhase', actionNextPhase);
            btnNextPhase.left = game.world.centerX + 25;
            btnNextPhase.top = tip.centerY + 50;
        }

        function actionNextPhase() {
            currentLevelIndex += 1;
            currentLevel = difficultyLevels[currentLevelIndex];
            if (currentLevel) {
                selectActivity();
                if (vm.activity) {
                    game.state.restart();
                } else {
                    actionNextPhase();
                }
            }
        }

        function raffleActivity(category) {
            var rafflesActivities = category.activities.filter(function (item) {
                return item.level === currentLevel;
            });
            if (rafflesActivities) {
                return _.shuffle(rafflesActivities)[0];
            }

            return undefined;
        }

        function createTimer() {
            timer = new moment();
            timer.startOf('year');

            if (vm.activity.time) {
                var splitTime = vm.activity.time.split(":");
                timer.set("minute", splitTime[0]);
                timer.set("second", splitTime[1]);
            } else {
                var DEFAULT_TIMER = 59;
                timer.set("minute", DEFAULT_TIMER);
                timer.set("second", DEFAULT_TIMER);
            }

            startTimer();
        }

        function startTimer() {
            $timeout(function () {
                if (!isWinMatch() && !isGameOver()) {
                    timerText.text = timer.format("mm:ss");
                    timer.subtract(1, 'second');
                    timerText.text = timer.format("mm:ss");
                    startTimer();
                }
            }, 1000);
        }

        function selectActivity() {
            vm.activity = raffleActivity(vm.category);
        }
    }

    return Component;
});