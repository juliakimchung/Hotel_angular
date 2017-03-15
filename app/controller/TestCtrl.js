"use strict";
app.controller("TestCtrl", 

	function($http, RootFactory, $location, $scope, $timeout, $routeParams){
		$scope.reservations = [];
		$scope.rooms = [];
		$scope.payment = [];
		
		RootFactory.getApiRoot()
		.then((rootes)=>{
				$http({
					url: `${rootes.reservation}`,
					method: 'GET',
					headers: {
						'Authorization': `Token ${RootFactory.getToken()}`
					}
				})
				.then((items)=> {
					console.log("items from TestCtrl", items );
					$scope.reservations = items.data.results;
					$http({
						url: `${rootes.room}`,
						method: 'GET',
						headers: {
							'Authorization': `Token ${RootFactory.getToken()}`
						}
					})
					.then((roomItem) => {
					console.log("roomItem from TestCtrl", roomItem);

					$scope.rooms = roomItem.data.results;
					
					});
				});
		});
	});
