myApp.controller("myCtrl", ['$scope', '$location',function($scope, $location) {
	$scope.gotoPage = function(pagePath) {
		$location.path(pagePath);
	};
}]);