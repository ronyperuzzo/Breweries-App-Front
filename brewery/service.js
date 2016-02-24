(function() {
    'use strict';
    
    angular
        .module('brewery')
        .service('BreweryService', BreweryService);
    
    BreweryService.$inject = ['API','$http'];
    
    function BreweryService(API,$http) {
        this.findAll = function() {
            console.log(API.url + 'breweries');
            return $http.get(API.url + 'breweries');
        }
        this.create = function(brewery) {
            console.log(brewery);
            return $http.post(API.url + 'breweries', brewery);
        }
        this.update = function(brewery) {
            return $http.put(API.url + 'breweries/' + brewery._id, brewery);
        }
        this.remove = function(id) {
            return $http.delete(API.url + 'breweries/' + id);
        }
    }
})();