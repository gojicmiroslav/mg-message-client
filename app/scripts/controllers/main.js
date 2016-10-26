'use strict';

/**
 * @ngdoc function
 * @name mgMessageClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mgMessageClientApp
 */
angular.module('mgMessageClientApp')
  	.controller('MainCtrl', ['$http', function ($http) {
    
  		this.postMessage = function(){
  			console.log('Post');
  		};

  		this.getMessages = function(){
  			
    	};

  	}]);
