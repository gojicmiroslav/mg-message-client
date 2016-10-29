"use strict";angular.module("mgMessageClientApp",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("mgMessageClientApp").controller("MainCtrl",["$http",function(a){this.postMessage=function(){a.post("http://localhost:5000/api/message",{msg:this.message}),a.post("https://mgmessage-server.herokuapp.com/api/message",{msg:this.message})},this.getMessages=function(){var b=this;a.get("http://localhost:5000/api/messages").then(function(a){b.messages=a.data})}}]),angular.module("mgMessageClientApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("mgMessageClientApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="panel panel-primary"> <div class="panel-heading">Post a Message</div> <div class="panel-body"> <div class="input-group"> <textarea name="message" class="form-control custom-control" rows="3" style="resize:none" ng-model="main.message">\n            </textarea> <span class="input-group-addon btn btn-primary" ng-click="main.postMessage()">Post</span> </div> </div> </div> <div class="panel panel-primary"> <div class="panel-heading">Messages</div> <div class="panel-body"> <div class="input-group"> <ul class="list-group"> <li class="list-group-item" ng-repeat="message in main.messages"> {{ message.msg }} </li> </ul> </div> </div> </div>')}]);