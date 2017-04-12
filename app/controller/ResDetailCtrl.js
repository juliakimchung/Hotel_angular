"use strict";
app.controller("ResDetailCtrl", 
function($http, RootFactory, $location, $scope, $timeout, $routeParams){
		$scope.reservations = [];
		$scope.rooms = [];
		$scope.payment = [];
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
						$http({
							url: `${rootes.payment_type}${$scope.reservations.payment}/`,
							method:"GET",
							headers: {
								'Authorization': `Token ${RootFactory.getToken()}`
							}
						})
						.then((payment)=>{
							$scope.payment = payment.data;

							console.log("payment from ResDetailCtrl", payment );
						});
					});
				});
		});
});
	


		
	

