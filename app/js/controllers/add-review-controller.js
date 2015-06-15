(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('AddReviewController', AddReviewController);

    AddReviewController.$inject = ['$rootScope','review'];

    function AddReviewController($rootScope, review) {
        var vm = this;
        vm.allReviews = [];

         vm.init = function() {
            review.init();
         };

        vm.init();
        $rootScope.productId;

        vm.getReviews = function(id) {
            $rootScope.productId = id;
            vm.allReviews = review.getReviews();
            vm.returnReview = [];
            for(var i = vm.allReviews.length - 1; i >= 0; i--){
                if(vm.allReviews[i].id == id){
                    vm.returnReview = vm.allReviews[i].reviews
                }
            }
            return vm.returnReview;
        };

        $rootScope.submit = function(newUser,newReview){
//            alert($rootScope.productId + "  " + newUser + "   "+ newReview);
            review.addReview($rootScope.productId, newUser, newReview);
        }
    }
 })();