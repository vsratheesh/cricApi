var angularApp = angular.module('cricApi', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',{
    templateUrl: 'templates/cricket.html',
    controller: 'MatchController'
  })
});


angularApp.controller("MatchController",function($resource){
  var vm=this;
  vm.getMatchDetails = function(){
    console.log(vm.MatchDetails);
    var cricResult = $resource(});
    vm.cricResult = cricResult.get();
    console.log(vm.cricResult);
   }
});