define([], function () {
    'use strict';
    Controller.$inject = ["$state"];
    /*@ngInject*/
    function Controller($state) {
        var vm = this;

        vm.setCategory = setCategory;

        function setCategory(category) {
            vm.category = category;
            //$state.go("game.game-mode");
        }

        vm.categories = [
            {
                "name": "Figuras geométricas",
                "alphabet": "",
                "tip": "Figuras geométricas",
                "type": "word",
                "image": {"link": "http://escolakids.uol.com.br/public/images/legenda/10c1181b437fed906146f859a4b9f898.jpg"},
                "activities": []
            },
            {
                "name": "Bandeiras estados do Sul",
                "alphabet": "",
                "type": "word",
                "image": {"link": "https://upload.wikimedia.org/wikipedia/commons/0/09/Mapa_Regiao_Sul_do_Brasil_(somente).PNG"},
                "activities": [
                    {
                        //"answer": "Parana",// "Paraná"
                        "answer": "P",// "Paraná"
                        "level": "EASY",
                        "tip": "Estado sul brasileiro",
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
                        "level": "EASY",
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
                        "level": "EASY",
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