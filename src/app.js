myApp = angular.module("myApp", ["ngRoute",'ui.bootstrap']);
myApp.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	$routeProvider.when("/friends", {
		templateUrl: "templates/friends.html"
	});
	$routeProvider.when("/relatives", {
		templateUrl: "templates/relatives.html"
	});
	$routeProvider.when("/work", {
		templateUrl: "templates/work.html"
	});
	$locationProvider.html5Mode(false).hashPrefix("!");
}]).run(['$log',function($log) {
	$log.log("App started now2!");
}]);