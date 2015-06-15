(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('DashBoardController', DashBoardController);

    DashBoardController.$inject = ['$scope','getData','addToCart'];

    function DashBoardController($scope, getData, addToCart) {

        var vm = this;
        vm.counter = 1;
        vm.phoneData = [];

        vm.orderProp = 'age';
        vm.init = function() {
            getData.get("js/json/phones.json").then(function(data) {
                vm.phoneData = data;
            });
            addToCart.init();
        };
        vm.init();

        vm.add = function(productId) {
            addToCart.add(productId);
        };

     }

 })();