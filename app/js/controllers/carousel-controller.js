(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    CarouselDemoCtrl.$inject = ['$scope', 'getData', 'addToCart'];

    function CarouselDemoCtrl($scope, getData, addToCart) {

          $scope.myInterval = 5000;

          var vm = this;
          vm.id = $scope.name;
          vm.slides = [];

          vm.init = function() {
                getData.get("js/json/"+vm.id+".json").then(function(data) {
                    vm.slides = data;
                });
                addToCart.init();
          };
          vm.init();

          vm.cart = [];
          vm.add = function(productId) {
                addToCart.add(productId);
          };
     }
 })();