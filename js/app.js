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
    var cricResult = $resource('http://cricapi.com/api/cricket');
    vm.cricResult = cricResult.get();
    vm.cricResult.$promise.then(function(result){
      vm.cricketData = result.data;
      console.log(vm.cricketData);
    }, function(error){
      console.log(error);
    });
  };
vm.getMatchDetails();
});