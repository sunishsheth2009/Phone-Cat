(function() {
    'use strict';
    angular
        .module('myApp')
        .factory('getData', getData);

    getData.$inject = ['$http','$q'];

    function getData($http, $q) {
        var service = {
            get : get
        };
        return service;




        function get(url){

                var myDataDeferred;

                  if(myDataDeferred) {
                    return myDataDeferred.promise;
                  }

                  myDataDeferred = $q.defer();

                  $http.get(url)
                    .success(function(result) {
                      myDataDeferred.resolve(result);
                    }).error(function(error) {
                      myDataDeferred.reject(error);
                    });
                  return myDataDeferred.promise;
        }
     }
 })();