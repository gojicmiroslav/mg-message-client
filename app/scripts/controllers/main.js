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
  			$http.post('http://localhost:5000/api/message', { msg: this.message });
        //$http.post('https://mgmessage-server.herokuapp.com/api/message', { msg: this.message });
  		};

  		this.getMessages = function(){
  			//vm -view-model
    		var vm = this;
    		$http.get('http://localhost:5000/api/messages').then(function(result){
    			vm.messages = result.data;
    		});
    	};

      this.getMessages();

  	}]);
