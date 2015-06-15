(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('ModalDemoCtrl', ModalDemoCtrl);

        ModalDemoCtrl.$inject = ['$scope','$modal', '$log'];

        function ModalDemoCtrl($scope, $modal, $log) {
            $scope.imgUrl = "bhj";
            $scope.animationsEnabled = true;
            $scope.open = function (size,imgUrl,name) {
                var modalInstance = $modal.open({
                  animation: $scope.animationsEnabled,
                  templateUrl: 'myModalContent.html',
                  controller: 'ModalInstanceCtrl',
                  size: size,
                  resolve: {
                    getImgUrl: function(){
                        return imgUrl;
                    },
                    getName: function(){
                        return name;
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
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);
        ModalInstanceCtrl.$inject = ['$scope','$modalInstance', 'getImgUrl', 'getName'];

        function ModalInstanceCtrl($scope, $modalInstance, getImgUrl, getName) {
              $scope.getImgUrl = getImgUrl;
              $scope.getName = getName;

              $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
              };
        };
})();