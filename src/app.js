myApp = angular.module("myApp", ["ngRoute", 'ui.bootstrap']);
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when("/contacts/:id", {
		//this is another comment
		templateUrl: "templates/contacts.html"
	});
	$locationProvider.html5Mode(false).hashPrefix("!");
}]).run(['$log',function($log) {
	$log.log("App started now2!");
}]);