(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('CartModalController', CartModalController);

        CartModalController.$inject = ['$scope','$modal', '$log' ];

        function CartModalController($scope, $modal, $log) {

            $scope.imgUrl;
            $scope.animationsEnabled = true;
            $scope.openTab = function (size,cartList) {
                var modalInstance = $modal.open({
                  animation: $scope.animationsEnabled,
                  templateUrl: 'CartDisplay.html',
                  controller: 'CartInstanceController',
                  size: size,
                  resolve: {
                    getCartList: function(){
                        return cartList;
                    }
                  }
                });

                modalInstance.result.then(function (selectedItem) {
                  $scope.selected = selectedItem;
                }, function () {
                  $log.info('Modal dismissed at: ' + new Date());
                });
            };
            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };
        };

    // Please note that $modalInstance represents a modal window (instance) dependency.
    // It is not the same as the $modal service used above.

    angular
        .module('myApp')
        .controller('CartInstanceController', CartInstanceController);
        CartInstanceController.$inject = ['$scope','$modalInstance', 'getCartList'];

        function CartInstanceController($scope, $modalInstance, getCartList) {
              $scope.getCartList = getCartList;
              $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
              };
        };
})();