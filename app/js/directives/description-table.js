(function() {
    'use strict';
    angular
        .module('myApp')
        .directive('descriptionTable', descriptionTable);

    function descriptionTable() {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'views/table.html'
            };
     }

 })();