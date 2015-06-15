(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('AddToCartController', AddToCartController);

    AddToCartController.$inject = ['$rootScope','addToCart'];

    function AddToCartController($rootScope, addToCart) {
        var vm = this;
        vm.cartList;
         vm.init = function() {
            vm.cartList = addToCart.getCart();
         };


         vm.getTotal = function(){
            $rootScope.total = 0;
            vm.init();
            for(var i = vm.cartList.length - 1; i >= 0; i--){
                $rootScope.total = $rootScope.total + (vm.cartList[i].cost * vm.cartList[i].quantity);
            }
         }

         $rootScope.deleteFromCart = function(productId){
            addToCart.deleteFromCart(productId);
            vm.getTotal();
         }
     }

 })();