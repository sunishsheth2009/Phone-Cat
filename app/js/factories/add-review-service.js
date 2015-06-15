(function() {
    'use strict';
    angular
        .module('myApp')
        .factory('review', review);

    review.$inject = ['$http','$q','getData'];

    function review($http, $q, getData) {
        var vm = this;
        vm.counter = 0;
        var service = {
            init : init,
            addReview : addReview,
            getReviews : getReviews,
            deleteReview : deleteReview
        };
        return service;

        vm.reviews = [];

        function init(){
            getData.get("js/json/review.json").then(function(data) {
                vm.reviews = data;
            });
        }

        function addReview(id, name, reviews){
            alert("Your review has been added successfully");
            for(var i = vm.reviews.length - 1; i >= 0; i--){
                if(vm.reviews[i].id == id){
                    vm.dataPush ={
                        "name": name,
                        "reviews": reviews
                    }
                    vm.reviews[i].reviews.push(vm.dataPush);
                }
            }
        }

        function getReviews(){
            return vm.reviews;
        }

        function deleteReview(productId){
//            var deleteUser = confirm("Are you sure you want to delete it?");
//            if (deleteUser) {
//                for(var i = vm.cart.length - 1; i >= 0; i--){
//                    if(vm.cart[i].productName == productId){
//                        vm.cart.splice((i),1);
//                    }
//                }
//            }
        }
     }
 })();