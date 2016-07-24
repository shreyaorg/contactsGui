myApp.controller("contactsCtrl", ['$scope',"ContactData", function($scope ,ContactData) {
	$scope.contact= ContactData;
}]);