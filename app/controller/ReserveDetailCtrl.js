"use strict";
app.controller("ReserveDetailCtrl", 

	function($http, RootFactory, $location, $scope, $routeParams, $timeout){
		$scope.reservation = {
			check_in_date: "",
			check_out_date: "",
			room: "",
			payment_type: ""
		};

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
						
						$location.url("/room");
						$timeout();

		
            
   			});     

		});
	};
});
