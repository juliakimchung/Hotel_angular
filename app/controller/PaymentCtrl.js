"use strict";
app.controller("PaymentCtrl", 

	function($http, RootFactory, $location, $scope, $sce, $routeParams, $timeout){
		$scope.payment = {
			name: "",
			account_number: "",
			ccv_numver: "",
			expiration_day: ""
		};

		$scope.addNewPaymentType=()=>{
			RootFactory.getApiRoot()
			.then((rootes)=>{
					$http({
						url:(`${rootes.payment_type}`, $scope.payment),
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
		};
	});