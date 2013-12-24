'use strict';

var services = angular.module('365psd.services', []);

services.factory('365psdapi', function($http){
    function load(path, params) {
        params = params || {};
        params.callback = "JSON_CALLBACK"
        return $http.jsonp('http://localhost' + path , {params: params})
    }

    return {
        projects: function( params) {
            return load("/projects/" , params);
        }
    }
});