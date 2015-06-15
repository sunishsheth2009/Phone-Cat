(function() {
    'use strict';
    angular
        .module('myApp')
        .factory('addToCart', addToCart);

    addToCart.$inject = ['$http','$q','getData'];

    function addToCart($http, $q, getData) {
        var vm = this;
        vm.counter = 0;
        vm.cart = [];
        var service = {
            init: init,
            add : add,
            getCart : getCart,
            deleteFromCart : deleteFromCart
        };
        return service;

        vm.phoneData = [];


        function init(){
            getData.get("js/json/phones.json").then(function(data) {
                vm.phoneData = data;
            });
        }

        function add(productId){
            alert("Your product has been added successfully");
            vm.flag = 1;
            for(var i = vm.cart.length - 1; i >= 0; i--){
                if(vm.cart[i].productName == productId){
                    vm.cart[i].quantity = vm.cart[i].quantity + 1;
                    vm.flag = 0;
                }
            }

            if(vm.flag == 1){
                for(var i = vm.phoneData.length - 1; i >= 0; i--){
                    if(vm.phoneData[i].id == productId){
                        vm.counter++;
                        vm.dataPush ={
                            "id": vm.counter,
                            "quantity": 1,
                            "productName": productId,
                            "cost": vm.phoneData[i].cost,
                            "name": vm.phoneData[i].name
                        }
                    }
                }
                vm.cart.push(vm.dataPush);
            }
        }

        function getCart(){
            return vm.cart;
        }

        function deleteFromCart(productId){
            var deleteUser = confirm("Are you sure you want to delete it?");
            if (deleteUser) {
                for(var i = vm.cart.length - 1; i >= 0; i--){
                    if(vm.cart[i].productName == productId){
                        vm.cart.splice((i),1);
                    }
                }
            }
        }
     }
 })();