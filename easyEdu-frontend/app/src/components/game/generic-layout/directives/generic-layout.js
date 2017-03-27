define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/game/generic-layout/view/_generic-layout.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                activity: "="
            }
        };
    }

    Controller.$inject = ["$scope"];
    /*@ngInject*/
    function Controller($scope) {
        var vm = this;
        var transparent = true;

        vm.getSplitAnswer = undefined;

        var game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'gameCanvas', {
            preload: preload,
            create: create,
            update: update,
            resize: onResize()
        }, transparent);

        function preload() {

            game.load.image('centerImage', 'assets/img/phaser/exemple/Bandeira_Santa_Catarina.jpg');
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
            game.load.image('sky', 'assets/img/phaser/sky.png');
            game.load.image('ground', 'assets/img/phaser/platform.png');
            game.load.image('star', 'assets/img/phaser/star.png');
            game.load.spritesheet('dude', 'assets/img/phaser/dude.png', 32, 48);

        }

        var player;
        var platforms;
        var underscore;
        var alphabet;
        var letter_a;
        var letter_b;
        var letter_c;
        var letter_d;        
        var letter_e;
        var letter_f;
        var letter_g;
        var letter_h;
        var letter_i;
        var letter_j;
        var letter_k;
        var letter_l;

        var dropZone;
        var dragPosition;
        var cursors;
        var centerImage;

        var stars;
        var score = 0;
        var scoreText;

        function create() {

            //  We're going to be using physics, so enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);

            //  A simple background for our game
            // game.add.sprite(0, 0, 'sky');

            centerImage = game.add.sprite(270, 100, 'centerImage');

            // centerImage.anchor.setTo(0.5, 0.5);


            alphabet = game.add.group();

            // letter_a = game.add.sprite(100, 100, 'letter_a');
            letter_a = alphabet.create(50, 50, 'letter_a');
            letter_b = alphabet.create(50, 160, 'letter_b');
            letter_c = alphabet.create(50, 270, 'letter_c');
            letter_d = alphabet.create(50, 380, 'letter_d');
            letter_e = alphabet.create(50, 490, 'letter_e');
            letter_f = alphabet.create(50, 600, 'letter_f');

            letter_g = alphabet.create(1000, 50, 'letter_g');
            letter_h = alphabet.create(1000, 160, 'letter_h');
            letter_i = alphabet.create(1000, 270, 'letter_i');
            letter_j = alphabet.create(1000, 380, 'letter_j');
            letter_k = alphabet.create(1000, 490, 'letter_k');
            letter_l = alphabet.create(1000, 600, 'letter_l');

            initLetter(letter_a);
            initLetter(letter_b);
            initLetter(letter_c);
            initLetter(letter_d);
            initLetter(letter_e);
            initLetter(letter_f);

            initLetter(letter_g);
            initLetter(letter_h);
            initLetter(letter_i);
            initLetter(letter_j);
            initLetter(letter_k);
            initLetter(letter_l);



            var xGround = 300;
            var yGround = 140;
            for (var i = 0; i <= 4; i++) {
                initGround(xGround, yGround);
                xGround += 120;
            }

            xGround = 150;
            yGround = 20;
            for (var i = 0; i <= 7; i++) {
                initGround(xGround, yGround);
                xGround += 120;
            }



            goFullScreen();

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

                function initLetter(letter){
            letter.inputEnabled = true;
            letter.input.enableDrag();

            letter.events.onInputOver.add(onOver, this);
            letter.events.onInputOut.add(onOut, this);
            letter.events.onDragStart.add(onDragStart, this);
            letter.events.onDragStop.add(onDragStop, this);

            dragPosition = new Phaser.Point(letter.x, letter.y);
        }

        function initGround(x, y) {
            dropZone = game.add.sprite(x, game.world.height - y, 'ground');
            dropZone.width = 100;
            dropZone.height = 10;
        }

        function onResize() {

        }

        // function to scale up the game to full screen
        function goFullScreen(){
            // setting a background color
            // game.stage.backgroundColor = "#555555";
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
            // using RESIZE scale mode
            game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            // deprecated
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

        }

        function onDragStop(sprite, pointer) {

            if (!sprite.overlap(dropZone)) {
                game.add.tween(sprite).to({x: dragPosition.x, y: dragPosition.y}, 500, "Back.easeOut", true);
            }

        }


        function collectStar(player, star) {

            // Removes the star from the screen
            star.kill();

            //  Add and update the score
            score += 10;
            scoreText.text = 'Score: ' + score;

        }

        $scope.$on("$destroy", function() {
            game.destroy(); // Clean up the game when we leave this scope
        });

    }

    return Component;
});