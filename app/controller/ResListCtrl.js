"use strict";
app.controller("ResListCtrl", 
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
					console.log("items from ResListCtrl", items );
					$scope.reservations = items.data.results;
					$http({
						url: `${rootes.room}`,
						method: 'GET',
						headers: {
							'Authorization': `Token ${RootFactory.getToken()}`
						}
					})
					.then((roomItem) => {
					console.log("roomItem fromResListCtrl", roomItem);

					$scope.rooms = roomItem.data.results;
					
					});
				});
		});
});
