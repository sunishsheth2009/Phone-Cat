(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('DescriptionController', DescriptionController);

    DescriptionController.$inject = ['$scope','getData'];

    function DescriptionController($scope, getData) {
        var vm = this;
        vm.id = $scope.name;
     }

 })();