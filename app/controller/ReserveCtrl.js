"use strict";
app.controller("ReserveCtrl", 

	function($http, RootFactory, $location, $scope, $routeParams, $timeout){
		$scope.reservation = {
			check_in_date: "",
			check_out_date: "",
			room: "",
			payment_type: ""
		};

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

		$scope.reserve = () => {
			RootFactory.getApiRoot()
			.then((rootes)=>{
					$http({
						url: (`${rootes.reservation}`, $scope.reservation),
						method: 'POST',
						headers: {
							'Authorization': `Token ${RootFactory.getToken()}`
						}
					})
					.then((item) => {

						console.log("item from ReserveCtrl", item);
						
						$location.url("/payment");
						$timeout();

		
            // $(function () {
            //     $('#datetimepicker1').datetimepicker();
            // });
   			});     

		});
	};
});











