"use strict";
app.controller("ReserveCtrl", 

	function($http, RootFactory, $location, $scope, $routeParams, $filter,$timeout){
		$scope.getDates = {
			check_in_date: "",
			check_out_date: "",
			completed: 0,
			room: "",
			payment:"",
			guest: 1
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
						console.log("$scope.getDates.payment_type", $scope.getDates.payment_type );
						$http({
							url:`${rootes.reservation}`,
							method: 'POST',
							data: $scope.getDates,
							headers: {
									'Authorization': `Token ${RootFactory.getToken()}`
								}
						})
						.then((data)=> {
							console.log("data from addNewReservation", data );
							$location.url("/reservation_detail");
						});
					});
			});
		};
});


// app.directive('reserve',['$timeout', function ($timeout) {
// return {
//     restrict: 'E',
//     templateUrl: 'reserve.html',
//     replace: true,
//     scope: {
//       checkIn:'=',
//       checkOut:'='
//     },
//     link: function (scope, element, attrs, ngModelCtrl) {
        
//        $("#check_in_date").datepicker({
//             dateFormat: 'dd/mm/yy',
//             minDate:  0,
//             onSelect: function (formattedDate) {
//                 var date1 = $('#checkin_date').datepicker('getDate'); 
//                 var date = new Date( Date.parse( date1 ) ); 
//                 date.setDate( date.getDate() + 1 );        
//                 var newDate = date.toDateString(); 
//                 newDate = new Date( Date.parse( newDate ) );   
//                 $('#checkout_date').datepicker("option","minDate",newDate);
//                 $timeout(function(){
//                   scope.checkIn = formattedDate;
//                 });
//             }
//         });
      
//       $("#check_out_date").datepicker({
//             dateFormat: 'dd/mm/yy',
//             minDate:  0,
//             onSelect: function (formattedDate) {
//                 var date2 = $('#checkout_date').datepicker('getDate'); 
//                 $timeout(function(){
//                   scope.checkOut = formattedDate;
//                 });
//             }
//         });
      
//         function ge(){
//           //...
//         }
      
//         scope.submit = function(){
//           if (scope.form.$valid && ge()) {
            
//           }  
//         };
      
//     }
// };
// }]);









