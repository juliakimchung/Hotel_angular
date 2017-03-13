"use strict";
app.controller("ReserveDetailCtrl", 

	function($http, RootFactory, $location, $scope, $routeParams){
		$scope.room = {};
		$scope.checkRoom = ()=> {
		RootFactory.getApiRoot()
		.then((rootes)=>{
				$http({
					url: (`${rootes.room}`, $routeParams.roomId),
					method: 'GET',
					headers: {
						'Authorization': `Token ${RootFactory.getToken()}`
					}
				})
				.then((item) => {
					console.log("$routeParams.room.pk from ReserveDetailCtrl", $routeParams.room.pk);
					console.log("room from ReserveDetailCtrl", item);
					$scope.room = item.data.results;
					$location.url('/reserve');
				});
			});
		};
	});

