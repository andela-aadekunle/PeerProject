var jobseekerApp = angular.module('jobseekerApp', ['ngRoute']);

jobseekerApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
// jobseekerApp.config(['$routeProvider', function($routeProvider){  
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html',
    controller : 'homeCtrl'
  }).
  when('/contact', {
    templateUrl: 'partials/contact.html',
    controller : 'contactCtrl'
  }).
  when('/services', {
    templateUrl: 'partials/services.html',
    controller : 'serviceCtrl'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller : 'aboutCtrl'
  }).
  otherwise({
    redirectTo : '/home'
  });

$locationProvider.html5Mode({enable: true});
$locationProvider.hashPrefix('!');
   
}]);