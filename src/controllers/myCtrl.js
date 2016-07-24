myApp.controller("myCtrl", ['$scope',"$http", "$location","$uibModal", function($scope, $http, 
	$location,$uibModal) {

	$scope.allContactsFn = function() {
		$http({
			method: "get",
			url: "resources/json/contactsData.json",
		}).success(function(data) {
			$scope.contacts = data.contacts;
		});
	};
	$scope.gotoPage = function(pagePath) {
		$location.path(pagePath);
	};

	$scope.openContactModal = function(contact) {
		$uibModal.open({
			animation: true,
			templateUrl: 'templates/contacts.html',
			controller: 'contactsCtrl',
			resolve:{
				ContactData:function(){
					return contact;
				}
			}
		});
	};

}]);