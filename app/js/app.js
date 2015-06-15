(function() {

  'use strict';
 angular
   .module('myApp', ['ui.router', 'ui.bootstrap'])
   .directive('descriptionTable', descriptionTable)
   .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('index', {
          url: "",
          templateUrl: "views/index.html"
        })
        .state('description', {
          url: "/description/:id",
          templateUrl: "views/description.html",
          controller: function($scope, $stateParams){
            $scope.name = $stateParams.id;
          }
        })
    });



        function descriptionTable() {
            return {
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'views/table.html'
            };
         }

})();