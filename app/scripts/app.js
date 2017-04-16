angular.module('app', ['ngRoute'])
.constant('Whatever', '')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './scripts/base/home.html',
    controller: 'appCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
