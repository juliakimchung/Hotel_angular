"use strict";
app.controller("PaymentCtrl", 

	function($http, RootFactory, $location, $scope, $routeParams, $timeout){
		$scope.payment = {
			name: "",
			account_number: "",
			ccv_numver: "",
			expiration_day: ""
		};

		RootFactory.getApiRoot()
		.then((rootes)=>{
				$http({
					url: `${rootes.payment_type}`,
					method: 'POST',
					headers: {
						'Authorization': `Token ${RootFactory.getToken()}`
					}
				})
				.then((items) => {
					console.log("items from PaymentCtrl", items);
					$location.url("/ReservationDetail");
					$timeout();

				});
			});

	})