"use strict";
app.controller("ReserveCtrl", 

	function($http, RootFactory, $location, $scope, $routeParams, $filter,$timeout){
		$scope.getDates = {
			check_in_date: "",
			check_out_date: "",
			completed: 0,
			room: "",
			payment:"",
			guest: 1,
			total:""
		};
    
	let oneDay = 86400000;

  $scope.getNumberOfDays = ()=> {
    let difference = $scope.getDates.check_out_date - $scope.getDates.check_in_date;
    return (Math.round(difference/oneDay));
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

    
	$scope.payment_type = {
			name: "",
			account_number: "",
			ccv_number: "",
			expiration_date: ""
		};

		$scope.addNewPaymentType=()=>{
			RootFactory.getApiRoot()
			.then((rootes)=>{
					$http({
						url:`${rootes.payment_type}`,
						method: 'POST',
						headers: {
							'Authorization': `Token ${RootFactory.getToken()}`
						}
					})
					.then((items) => {
						console.log("items from PaymentCtrl", items);
						$scope.payment_type = items.data;
						$timeout();

					});
			});
		};

		$scope.addNewReservation =()=>{
			RootFactory.getApiRoot()
			.then((rootes)=>{
					$http({
						url:`${rootes.payment_type}`,
						method: 'POST',
						data: $scope.payment_type,
						headers: {
							'Authorization': `Token ${RootFactory.getToken()}`
						}
					})
					.then((paymentType) =>{
						console.log("paymenttype from addNewReservation", paymentType);
						$scope.getDates.payment= paymentType.data.id;
						console.log("$scope.getDates.payment_type", $scope.getDates.payment );
						$http({
							url:`${rootes.reservation}`,
							method: 'POST',
							data: $scope.getDates,
							headers: {
									'Authorization': `Token ${RootFactory.getToken()}`
								}
						})
						.then((data)=> {
							console.log("data from addNewReservation", data.data.id );
							$location.url(`/reservation_detail/${data.data.id}`);
						});
					});
			});
		};


		
});
  

