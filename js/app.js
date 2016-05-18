var angularApp = angular.module('cricApi', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',{
    templateUrl: 'templates/cricket.html',
    controller: 'MatchController',
    controllerAs: 'vm'
  })

    .when ('/ScoreCards/:uniqId',
  {
    templateUrl: 'templates/ScoreCards.html',
    controller: 'ScoreCardsController',
    controllerAs:'dc'
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


angularApp.controller("ScoreCardsController",['$resource','$filter','$routeParams',
function($resource,$filter,$routeParams){
   var vm=this;
   var id = $routeParams.uniqId;
   var ScoreCards = $resource('http://cricapi.com/api/cricketScore',{unique_id:id});
   vm.cricResponse = ScoreCards.get();
   console.log(vm.cricResponse);

}]);