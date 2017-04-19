define([], function () {
    'use strict';
    Controller.$inject = ["$state"];
    /*@ngInject*/
    function Controller($state) {
        var vm = this;

        vm.setCategory = setCategory;
        vm.setGameMode = setGameMode;

        function setCategory(category) {
            vm.category = category;
            //$state.go("game.game-mode");
        }

        function setGameMode(gameMode) {
            vm.gameMode = gameMode;
        }

        vm.categories = [
            {
                "name": "Figuras geométricas",
                "alphabet": "",
                "type": "PICTURES",
                "image": {"link": "http://escolakids.uol.com.br/public/images/legenda/10c1181b437fed906146f859a4b9f898.jpg"},
                "activities": [
                    {
                        "tip": "Arraste apenas as figuras que representam quadrados",
                        level: "EASY",
                        answers: [],
                        correctAnswers: 4,
                        answerOptions: [
                            {
                                "image": {
                                    "link": "http://pcbnu009563.interno.senior.com.br:7070/uploads/bandeira Santa Catarina.jpg",
                                    "name": "bandeira Santa Catarina.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://pcbnu009563.interno.senior.com.br:7070/uploads/bandeira-rio-grande-do-sul.jpg",
                                    "name": "bandeira-rio-grande-do-sul.jpg"
                                },
                                type: 'incorrect'
                            },
                            {
                                "image": {
                                    "link": "http://pcbnu009563.interno.senior.com.br:7070/uploads/bandeira_parana.jpg",
                                    "name": "bandeira parana.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://pcbnu009563.interno.senior.com.br:7070/uploads/bandeira Santa Catarina.jpg",
                                    "name": "bandeira Santa Catarina.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://pcbnu009563.interno.senior.com.br:7070/uploads/bandeira-rio-grande-do-sul.jpg",
                                    "name": "bandeira-rio-grande-do-sul.jpg"
                                },
                                type: 'incorrect'
                            },
                            {
                                "image": {
                                    "link": "http://pcbnu009563.interno.senior.com.br:7070/uploads/bandeira_parana.jpg",
                                    "name": "bandeira parana.jpg"
                                },
                                type: 'correct'
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Bandeiras estados do Sul",
                "alphabet": "",
                "type": "LETTERS",
                "image": {"link": "https://upload.wikimedia.org/wikipedia/commons/0/09/Mapa_Regiao_Sul_do_Brasil_(somente).PNG"},
                "activities": [
                    {
                        //"answer": "Parana",// "Paraná"
                        "answer": "P",// "Paraná"
                        "level": "EASY",
                        "tip": "Estado sul brasileiro",
                        "time": "05:00",
                        "files": {
                            "image": {
                                "link": "http://localhost:7070/uploads/bandeira_parana.jpg",
                                "name": "bandeira parana.jpg"
                            }
                        }
                    },
                    {
                        "export": true,
                        "$$hashKey": "object:35",
                        "answer": "Santa Catarina",
                        "tip": "Estado sul brasileiro",
                        "time": "15:00",
                        "level": "MEDIUM",
                        "files": {
                            "image": {
                                "link": "http://localhost:7070/uploads/bandeira Santa Catarina.jpg",
                                "name": "bandeira Santa Catarina.jpg"
                            }
                        }
                    },
                    {
                        "export": true,
                        "$$hashKey": "object:70",
                        "answer": "Rio Grande do Sul",
                        "tip": "Estado sul brasileiro",
                        "time": "20:00",
                        "level": "HARD",
                        "files": {
                            "image": {
                                "link": "http://localhost:7070/uploads/bandeira-rio-grande-do-sul.jpg",
                                "name": "bandeira-rio-grande-do-sul.jpg"
                            }
                        }
                    }]
            }];


    }

    return Controller;
});