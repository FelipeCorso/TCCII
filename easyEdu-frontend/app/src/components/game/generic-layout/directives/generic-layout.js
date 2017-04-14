define([], function () {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/game/generic-layout/view/_generic-layout.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                category: "="
            }
        };
    }

    Controller.$inject = ["$scope", "$timeout", "moment"];
    /*@ngInject*/
    function Controller($scope, $timeout, moment) {
        var _ = require('lodash');
        var vm = this;
        var transparent = true;

        vm.getSplitAnswer = undefined;

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

        var game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'gameCanvas', {
            preload: preload,
            create: create,
            update: update,
            render: render
        }, transparent);


        function preload() {


            selectActivity();
            initAnswerKeys(vm.activity.answer);

            game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

            game.load.crossOrigin = "anonymous";
            game.load.image('centerImage', vm.activity.files.image.link);
            //game.load.image('centerImage', 'assets/img/phaser/exemple/Bandeira_Santa_Catarina.jpg');
            game.load.image('btnPlayAgain', 'assets/img/playAgain.png');
            game.load.image('btnNextPhase', 'assets/img/nextPhase.png');
            game.load.image('underscore', 'assets/img/underscore.png');
            game.load.image('letter_a', 'assets/img/alphabet/A_LARGE.png');
            game.load.image('letter_b', 'assets/img/alphabet/B_LARGE.png');
            game.load.image('letter_c', 'assets/img/alphabet/C_LARGE.png');
            game.load.image('letter_d', 'assets/img/alphabet/D_LARGE.png');
            game.load.image('letter_e', 'assets/img/alphabet/E_LARGE.png');
            game.load.image('letter_f', 'assets/img/alphabet/F_LARGE.png');
            game.load.image('letter_g', 'assets/img/alphabet/G_LARGE.png');
            game.load.image('letter_h', 'assets/img/alphabet/H_LARGE.png');
            game.load.image('letter_i', 'assets/img/alphabet/I_LARGE.png');
            game.load.image('letter_j', 'assets/img/alphabet/J_LARGE.png');
            game.load.image('letter_k', 'assets/img/alphabet/K_LARGE.png');
            game.load.image('letter_l', 'assets/img/alphabet/L_LARGE.png');
            game.load.image('letter_m', 'assets/img/alphabet/M_LARGE.png');
            game.load.image('letter_n', 'assets/img/alphabet/N_LARGE.png');
            game.load.image('letter_o', 'assets/img/alphabet/O_LARGE.png');
            game.load.image('letter_p', 'assets/img/alphabet/P_LARGE.png');
            game.load.image('letter_q', 'assets/img/alphabet/Q_LARGE.png');
            game.load.image('letter_r', 'assets/img/alphabet/R_LARGE.png');
            game.load.image('letter_s', 'assets/img/alphabet/S_LARGE.png');
            game.load.image('letter_t', 'assets/img/alphabet/T_LARGE.png');
            game.load.image('letter_u', 'assets/img/alphabet/U_LARGE.png');
            game.load.image('letter_v', 'assets/img/alphabet/V_LARGE.png');
            game.load.image('letter_w', 'assets/img/alphabet/W_LARGE.png');
            game.load.image('letter_x', 'assets/img/alphabet/X_LARGE.png');
            game.load.image('letter_y', 'assets/img/alphabet/Y_LARGE.png');
            game.load.image('letter_z', 'assets/img/alphabet/Z_LARGE.png');
            game.load.image('sky', 'assets/img/phaser/sky.png');
            game.load.image('ground', 'assets/img/phaser/platform.png');
            game.load.image('space-ground', 'assets/img/phaser/space-platform.png');
            game.load.image('star', 'assets/img/phaser/star.png');
            game.load.spritesheet('dude', 'assets/img/phaser/dude.png', 32, 48);

        }

        var MAX_LETTERS_BREAK_LINE = 10;
        var player;
        var tip;
        var platforms;
        var underscore;
        var currentLevel = "EASY";
        var answerKeys;
        var lettersKeys = ['letter_a', 'letter_b', 'letter_c', 'letter_d', 'letter_e', 'letter_f', 'letter_g', 'letter_h', 'letter_i', 'letter_j', 'letter_k', 'letter_l', 'letter_m', 'letter_n', 'letter_o', 'letter_p', 'letter_q', 'letter_r', 'letter_s', 'letter_t', 'letter_u', 'letter_v', 'letter_w', 'letter_x', 'letter_y', 'letter_z'];
        var raffledLetters;
        var alphabet;

        var dropZones;
        var dragPosition = new Phaser.Point(0, 0);
        var cursors;
        var centerImage;
        var btnPlayAgain;
        var btnNextPhase;

        var textWinMatch;
        var stars;
        var score = 0;
        var scoreText;
        var timer;
        var timerText;

        function create() {


            //  We're going to be using physics, so enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);

            //  A simple background for our game
            // game.add.sprite(0, 0, 'sky');

            centerImage = game.add.sprite(game.world.centerX, game.world.centerY, 'centerImage');
            //centerImage.width = 200;
            //centerImage.height = 150;
            centerImage.anchor.setTo(0.5, 0.5);

            alphabet = game.add.group(undefined, "alphabet");
            alphabet.enableBody = true;
            initAlphabet(raffledLetters);

            dropZones = game.add.group(undefined, "dropZones");
            dropZones.enableBody = true;
            initAnswerSpaces();

            createTipText();

            goFullScreen();

            showTextWinMatch();
            showButtonPlayAgain();
            showButtonNextPhase();

            timerText = game.add.text(game.world.centerX, 16, '', {fontSize: '32px', fill: '#000'});
            timerText.anchor.x = 0.5;
            createTimer();

            /*

             //  The platforms group contains the ground and the 2 ledges we can jump on
             platforms = game.add.group();

             //  We will enable physics for any object that is created in this group
             platforms.enableBody = true;

             // Here we create the ground.
             var ground = platforms.create(0, game.world.height - 64, 'ground');

             //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
             ground.scale.setTo(2, 2);

             //  This stops it from falling away when you jump on it
             ground.body.immovable = true;

             //  Now let's create two ledges
             var ledge = platforms.create(400, 400, 'ground');
             ledge.body.immovable = true;

             ledge = platforms.create(-150, 250, 'ground');
             ledge.body.immovable = true;

             // The player and its settings
             player = game.add.sprite(32, game.world.height - 150, 'dude');

             //  We need to enable physics on the player
             game.physics.arcade.enable(player);

             //  Player physics properties. Give the little guy a slight bounce.
             player.body.bounce.y = 0.2;
             player.body.gravity.y = 300;
             player.body.collideWorldBounds = true;

             //  Our two animations, walking left and right.
             player.animations.add('left', [0, 1, 2, 3], 10, true);
             player.animations.add('right', [5, 6, 7, 8], 10, true);

             //  Finally some stars to collect
             stars = game.add.group();

             //  We will enable physics for any star that is created in this group
             stars.enableBody = true;

             //  Here we'll create 12 of them evenly spaced apart
             for (var i = 0; i < 12; i++) {
             //  Create a star inside of the 'stars' group
             var star = stars.create(i * 70, 0, 'star');

             //  Let gravity do its thing
             star.body.gravity.y = 300;

             //  This just gives each star a slightly random bounce value
             star.body.bounce.y = 0.7 + Math.random() * 0.2;
             }

             //  The score
             scoreText = game.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});

             //  Our controls.
             cursors = game.input.keyboard.createCursorKeys();
             */
        }

        function update() {
            /*
             //  Collide the player and the stars with the platforms
             game.physics.arcade.collide(player, platforms);
             game.physics.arcade.collide(stars, platforms);

             //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
             game.physics.arcade.overlap(player, stars, collectStar, null, this);

             //  Reset the players velocity (movement)
             player.body.velocity.x = 0;

             if (cursors.left.isDown) {
             //  Move to the left
             player.body.velocity.x = -150;

             player.animations.play('left');
             }
             else if (cursors.right.isDown) {
             //  Move to the right
             player.body.velocity.x = 150;

             player.animations.play('right');
             }
             else {
             //  Stand still
             player.animations.stop();

             player.frame = 4;
             }

             //  Allow the player to jump if they are touching the ground.
             if (cursors.up.isDown && player.body.touching.down) {
             player.body.velocity.y = -350;
             }
             */
        }

        function initLetter(letter, width, height) {
            letter.width = width;
            letter.height = height;
            letter.inputEnabled = true;
            letter.input.enableDrag();

            letter.events.onInputOver.add(onOver, this);
            letter.events.onInputOut.add(onOut, this);
            letter.events.onDragStart.add(onDragStart, this);
            letter.events.onDragStop.add(onDragStop, this);
        }

        function initGround(x, y, key, letter, width, height) {
            var dropZone = dropZones.create(x, y, key);
            //dropZone = game.add.sprite(x, game.world.height - y, key);

            dropZone.width = width;
            dropZone.height = height;
            dropZone.letter = "letter_" + letter.toLowerCase();
            dropZone.isEmpty = true;
        }

        function render() {
            dropZones.alignTo(
                {
                    centerX: game.world.centerX,
                    bottom: game.world.height
                },
                Phaser.BOTTOM_CENTER, 0, -100);
            tip.alignTo(centerImage, Phaser.BOTTOM_CENTER);

            btnPlayAgain.right = game.world.centerX - 25;
            btnPlayAgain.top = tip.centerY + 50;
            btnNextPhase.left = game.world.centerX + 25;
            btnNextPhase.top = tip.centerY + 50;
        }

        // function to scale up the game to full screen
        function goFullScreen() {
            // setting a background color
            // game.stage.backgroundColor = "#555555";
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
            // using RESIZE scale mode
            //game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            // deprecated
            //screen size will be set automatically
            // game.scale.setScreenSize(true);
        }

        function onOver(sprite, pointer) {

            sprite.tint = 0xff7777;

        }

        function onOut(sprite, pointer) {

            sprite.tint = 0xffffff;

        }

        function onDragStart(sprite, pointer) {
            dragPosition.set(sprite.x, sprite.y);
            //console.log("sprite.x: " + sprite.x, "sprite.y: " + sprite.y);
        }

        function onDragStop(sprite, pointer) {
            //game.physics.arcade.overlap(player, stars, collectStar, null, this);
            var length = dropZones.children.length;
            var overlap = false;
            for (var i = 0; i < length; i++) {
                var dropZone = dropZones.children[i];
                if (dropZone.isEmpty && (sprite.key === dropZone.letter) && sprite.overlap(dropZone)) {
                    overlap = true;
                    dropZone.isEmpty = false;
                    sprite.input.disableDrag();
                    checkUserWinMatch();
                    return;
                }
            }
            if (!overlap) {
                game.add.tween(sprite).to({x: dragPosition.x, y: dragPosition.y}, 500, "Back.easeOut", true);
            }
        }

        function createTipText() {
            var style = {font: "28px Arial", align: "center", fontStyle: "italic"};
            tip = game.add.text(game.world.centerX, game.world.centerY, "Dica: " + vm.activity.tip, style);
        }


        function collectStar(player, star) {

            // Removes the star from the screen
            star.kill();

            //  Add and update the score
            score += 10;
            scoreText.text = 'Score: ' + score;

        }

        function checkUserWinMatch() {
            if (isWinMatch()) {
                disableAlphabet();
                // Verificar se tem mais fases, para exibir "Parabéns!\nVocê ganhou a partida", "Parabéns!\nVocê ganhou o jogo"
                if (hasMorePhases()) {
                    showTextWinMatch();
                    showButtonPlayAgain();
                    showButtonNextPhase();
                } else {
                    showTextWinGame();
                }
                showTextScore();
            }
        }

        function isWinMatch() {
            var filterDropZones = dropZones.children.filter(function (dropZone) {
                return dropZone.isEmpty;
            });

            return !filterDropZones.length;
        }

        function hasMorePhases() {
            return true;
        }

        function showButtonPlayAgain() {
            btnPlayAgain = game.add.button(game.world.centerX - 350, 400, 'btnPlayAgain', actionPlayAgain);
        }

        function actionPlayAgain() {
            console.log("Play again");
        }

        function showButtonNextPhase() {
            btnNextPhase = game.add.button(game.world.centerX + 10, 400, 'btnNextPhase', actionNextPhase);
        }

        function actionNextPhase() {
            console.log("Next phase");
        }

        function showTextWinMatch() {
            textWinMatch = game.add.text(game.world.centerX, game.world.centerY - 100, "Parabéns!\nVocê ganhou a partida");
            textWinMatch.anchor.setTo(0.5);

            textWinMatch.font = 'Finger Paint';
            textWinMatch.fontSize = 60;

            //  If we don't set the padding the font gets cut off
            //  Comment out the line below to see the effect
            textWinMatch.padding.set(10, 16);

            var grd = textWinMatch.context.createLinearGradient(0, 0, 0, textWinMatch.canvas.height);
            grd.addColorStop(0, '#8ED6FF');
            grd.addColorStop(1, '#004CB3');
            textWinMatch.fill = grd;

            textWinMatch.align = 'center';
            textWinMatch.stroke = '#000000';
            textWinMatch.strokeThickness = 2;
            textWinMatch.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
        }

        function showTextWinGame() {

        }


        /*

         Fase Impossível pode ter um cronômetro regressivo...
         Para que o desafio seja resolvido no máximo naquele tempo.

         */


        function showTextScore() {
            // O seu tempo foi de 00:30.
        }

        function disableAlphabet() {
            alphabet.setAll('inputEnabled', false);//  (key, value, checkAlive, checkVisible, operation, force)
        }

        $scope.$on("$destroy", function () {
            game.destroy(); // Clean up the game when we leave this scope
        });

        function raffleActivity(category) {
            if (category.activities) {
                var rafflesActivities = category.activities.filter(function (item) {
                    return item.level === currentLevel;
                });
                if (rafflesActivities) {
                    return _.shuffle(rafflesActivities)[0];
                }
            }
            return {};
        }

        function getSplitAnswer() {
            return vm.activity && vm.activity.answer ? vm.activity.answer.replace(new RegExp(' ', 'g'), '-').split('') : [];
        }

        function initAnswerKeys(answer) {
            var answerWithoutSpaces = removeAnswerSpaces(answer);
            answerWithoutSpaces = removeAccentuation(answerWithoutSpaces);
            answerKeys = answerWithoutSpaces.split('');
            answerKeys = setKeyToAnswerLetters(answerKeys);
            raffledLetters = raffleLetters(answerKeys, 40 - answerKeys.length);
            raffledLetters = shuffleLetters(raffledLetters);
        }

        function removeAnswerSpaces(answer) {
            return answer.replace(new RegExp(' ', 'g'), '');
        }

        function removeAccentuation(answer) {
            return answer;
        }

        function setKeyToAnswerLetters(answerKeys) {
            angular.forEach(answerKeys, function (value, index) {
                answerKeys[index] = "letter_" + value.toLowerCase();
            });
            return answerKeys;
        }

        /**
         *
         * @param answerKeys
         * @param amountLetters Quantidade de letras que serão exibidas no jogo.
         */
        function raffleLetters(answerKeys, amountLetters) {
            var raffledLetters = [].concat(answerKeys);
            for (var i = 0; i < amountLetters; i++) {
                raffledLetters.push(getRandomLetterKey());
            }
            return raffledLetters;
        }

        function getRandomLetterKey() {
            return lettersKeys[Math.floor(Math.random() * lettersKeys.length)];
        }

        function shuffleLetters(raffledLetters) {
            return _.shuffle(raffledLetters);
        }

        function getRandomValue() {
            var randomValue = 0.5 - Math.random();
            console.log("randomValue: ", randomValue);
            return randomValue;
        }

        function createSpriteAlphabet(answerKeys, x, initialY, width, height) {
            var y = initialY;
            angular.forEach(answerKeys, function (letterKey) {
                var letter = createSpriteLetter(x, y, letterKey);
                initLetter(letter, width, height);
                y += initialY;
            });
        }

        function createSpriteLetter(x, y, key) {
            return alphabet.create(x, y, key);
        }

        function initAlphabet(raffledLetters) {
            var width = 46;
            var height = 46;
            var initialY = 75;
            var margin = 50;
            var distanceBetweenImages = 3;
            var leftX = margin;
            var rightX = game.world.width - ((width * 2) + distanceBetweenImages + margin);

            var raffledLettersLength = raffledLetters.length;
            // TODO: implementar inteligência para se caso o array tiver número impar adicionar letras até ser par.
            if (raffledLettersLength <= 20) {
                var raffledLettersLeft = raffledLetters.slice(0, raffledLettersLength / 2);
                var raffledLettersRight = raffledLetters.slice(raffledLettersLength / 2, raffledLettersLength);
                createSpriteAlphabet(raffledLettersLeft, leftX, initialY, width, height);
                createSpriteAlphabet(raffledLettersRight, rightX, initialY);
            } else {
                // FIXME: está fixo para 40
                createSpriteAlphabet(raffledLetters.slice(0, 10), leftX, initialY, width, height);
                leftX = 125;
                createSpriteAlphabet(raffledLetters.slice(10, 20), leftX, initialY, width, height);
                createSpriteAlphabet(raffledLetters.slice(20, 30), rightX, initialY, width, height);
                rightX += width + distanceBetweenImages;
                createSpriteAlphabet(raffledLetters.slice(30, 40), rightX, initialY, width, height);
            }
        }

        // TODO: letras com acento

        function initAnswerSpaces() {
            // Considerar espaços e quebra de linha

            var length = vm.activity.answer.length;
            var topAnswer = [];
            var bottomAnswer = [];

            if (length > MAX_LETTERS_BREAK_LINE) { // maior que o limite, se possível será divido em duas linhas
                var answerSplit = vm.activity.answer.split(" ");
                if (answerSplit.length > 1) {// tem mais do que uma palavra
                    var halfOfLength = Math.ceil(answerSplit.length / 2);
                    topAnswer = answerSplit.slice(0, halfOfLength);
                    bottomAnswer = answerSplit.slice(halfOfLength, answerSplit.length);
                } else {
                    bottomAnswer = angular.copy(answerSplit);
                }
            } else {
                bottomAnswer = angular.copy(vm.activity.answer.split(" "));
            }

            var width = 50;
            var height = 10;
            var distanceBetweenSpaces = 10;
            var xGround = 100;
            var yGround = 100;
            createAnswerSpaces(topAnswer, xGround, yGround, width, height, distanceBetweenSpaces);

            xGround = 150;
            yGround = 175;
            createAnswerSpaces(bottomAnswer, xGround, yGround, width, height, distanceBetweenSpaces);
        }

        function createAnswerSpaces(words, xGround, yGround, width, height, distanceBetweenSpaces) {
            angular.forEach(words, function (item) {
                var itemLength = item.length;
                for (var i = 0; i < itemLength; i++) {
                    initGround(xGround, yGround, "ground", item.charAt(i), width, height);
                    xGround += width + distanceBetweenSpaces;
                }
                // initGround(xGround, yGround, "space-ground", "", width, height);
                xGround += width + distanceBetweenSpaces; // Insere um espaço no final de cada palavra
            });
        }

        function isSpace(char) {
            return char === " ";
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
                timerText.text = timer.format("mm:ss");
                timer.subtract(1, 'second');
                timerText.text = timer.format("mm:ss");
                startTimer();
            }, 1000);
        }

        function selectActivity() {
            vm.activity = raffleActivity(vm.category);
            vm.activity = vm.category.activities[0];
        }

    }

    return Component;
});