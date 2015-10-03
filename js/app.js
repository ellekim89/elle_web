console.log('app is loaded')

var webApp = angular.module('WebApp',['ui.bootstrap', 'ngAnimate', 'ngRoute']);

webApp.run(function(){
  console.log('angular app starting!!')
})

webApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
    templateUrl:'views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about', {
    templateUrl:'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/portfolio', {
    templateUrl:'views/portfolio.html',
    controller: 'PortfolioCtrl'
  })
  .when('/resume', {
    templateUrl: 'views/resume.html',
    controller: 'ResumeCtrl'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });
}]);