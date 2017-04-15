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

        var game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'gameCanvas_' + vm.customClass, {
            preload: preload,
            create: create,
            update: update,
            render: render
        }, transparent);

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