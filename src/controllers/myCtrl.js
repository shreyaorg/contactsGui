myApp.controller("myCtrl", ['$scope', "$http", "$location", "RestService", function($scope, $http, $location, RestService) {
	$scope.allContactsFn = function() {
		RestService.getContacts().then(function(data) {
			$scope.contacts = data.contacts;	
		}, function(error) {
			
		});
	};
	$scope.gotoPage = function(pagePath) {
		$location.path(pagePath);
	};

	$scope.groupShow = false;
	$scope.groupShowFn = function() {
		$scope.groupShow = !$scope.groupShow;
	};

	$scope.circlesShow=false;
	$scope.circlesShowFn =function(){
        $scope.circlesShow = !$scope.circlesShow;
	};
}]);