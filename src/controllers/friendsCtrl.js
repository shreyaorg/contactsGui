myApp.controller("friendsCtrl", ['$scope', '$uibModal', function($scope, $uibModal) {
	$scope.contacts = [{
		id: 1,
		imgUrl: "images/saiphoto.jpg",
		fullName: "Sai Narasimha Reddy Dubbaka",
		address: "roanoke street",
		city: "woodbridge",
		zipcode: 07095
	}, {
		id: 2,
		imgUrl: "images/swathiphoto.jpg",
		fullName: "Swathi Dubbaka",
		address: "roanoke street",
		city: "Newyork",
		zipcode: 07095
	}, {
		id: 3,
		imgUrl: "images/praveenphoto.jpg",
		fullName: "Praveen Dubbaka",
		address: "roanoke street",
		city: "woodbridge",
		zipcode: 07095
	}, {
		id: 4,
		imgUrl: "images/swethaphoto.jpg",
		fullName: "Swetha Sangepu",
		address: "roanoke street",
		city: "Newyork",
		zipcode: 07095
	}];
	$scope.openContactModal = function(contact) {
		$uibModal.open({
			animation: true,
			templateUrl: 'templates/friendsInstance.html',
			controller: 'friendsInstanceCtrl',
			resolve:{
				ContactData:function(){
					return contact;

				}
			}
		});

	};

}]);