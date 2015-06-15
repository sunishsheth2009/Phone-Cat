(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('ReviewModalController', ReviewModalController);

        ReviewModalController.$inject = ['$scope','$modal', '$log' , '$rootScope' ];

        function ReviewModalController($scope, $modal, $log, $rootScope) {

            $scope.imgUrl;
            $scope.animationsEnabled = true;
            $scope.openReview = function (size,reviewList) {
                var modalInstance = $modal.open({
                  animation: $scope.animationsEnabled,
                  templateUrl: 'ReviewDisplay.html',
                  controller: 'ReviewInstanceController',
                  size: size,
                  resolve: {
                    getReviews: function(){
                        return reviewList;
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
        .controller('ReviewInstanceController', ReviewInstanceController);
        ReviewInstanceController.$inject = ['$scope','$modalInstance', 'getReviews'];

        function ReviewInstanceController($scope, $modalInstance, getReviews) {
              $scope.getReviews = getReviews;
              $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
              };
        };
})();