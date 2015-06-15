(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('InformationController', InformationController);

    InformationController.$inject = ['$scope','getData'];

    function InformationController($scope, getData) {
        var vm = this;
        vm.id = $scope.name;
        vm.data = [];

        vm.init = function() {
            getData.get("js/json/"+vm.id+".json").then(function(result) {
            vm.data = result;
        });
        };
        vm.init();
     }

 })();