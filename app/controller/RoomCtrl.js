'use strict';
app.controller("RoomCtrl",


	function($http, RootFactory, $location, $scope){
		$scope.rooms = [];
		RootFactory.getApiRoot()
		.then((rootes)=>{
				$http({
					url: `${rootes.room}`,
					method: 'GET',
					headers: {
						'Authorization': `Token ${RootFactory.getToken()}`
					}
				})
				.then((items) => {
					console.log("items from RoomCtrl", items);
					$scope.rooms = items.data.results;

				});
			});

	}

);