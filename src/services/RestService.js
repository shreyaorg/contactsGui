myApp.factory("RestService", ["$q", "$timeout", "$http", function($q, $timeout, $http) {
	var service = {};
	service.getContacts = function() {
		var deferedObj = $q.defer();
		/*
		$timeout(function() {
			var contacts = JSON.parse(localStorage.getItem("contacts"));
			deferedObj.resolve(contacts);
		}, 5000);
		*/
		$http.get('resources/json/contactsData.json').then(function(response) {
			deferedObj.resolve(response.data);
		}, function() {

		});

		return deferedObj.promise;
	};
	return service;
}]);