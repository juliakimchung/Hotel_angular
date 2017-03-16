'use strict';
app.controller("RoomDetailCtrl",


	function($http, RootFactory, $routeParams, $location, $scope){
		$scope.room = {};
		RootFactory.getApiRoot()
		.then((rootes)=>{
				$http({
					url: `${rootes.room}${$routeParams.roomId}/`,
					method: 'GET',
					headers: {
						'Authorization': `Token ${RootFactory.getToken()}`
					}
				})
				.then((items) => {
					console.log("items from RoomDetailCtrl", items);
					$scope.room = items.data;
				});
			});

	}

);