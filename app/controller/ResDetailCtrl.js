"use strict";
app.controller("ResDetailCtrl", 

	function($http, RootFactory, $location, $scope, $timeout, $routeParams){
		$scope.reservations = [];
		$scope.guests = [];
		$scope.rooms = [];
		$scope.current_room = [];
		$scope.current_guest = [];

		RootFactory.getApiRoot()
		.then((rootes)=>{
				$http({
					url: `${rootes.reservation}${$routeParams.reservationId}/`,
					method: 'GET',
					headers: {
						'Authorization': `Token ${RootFactory.getToken()}`
					}
				})
				.then((items) => {
					console.log("items from ResDetailCtrl", items);
					$scope.reservations = items.data;
					$http({
						url: `${rootes.room}${$scope.reservations.room}/`,
						method: "GET",
						headers: {
							'Authorization': `Token ${RootFactory.getToken()}`
						}
					})
					.then((rooms)=> {
						$scope.rooms = rooms.data;

						console.log("rooms from ResDetailCtrl", rooms );
						
					});
				});

		});

					
});
	


		
	

