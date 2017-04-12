"use strict";

app.controller('AuthCtrl', [
		'$scope',
		'$http',
		'$location',
		'RootFactory',
		
function($scope, $http, $location, RootFactory){


	$scope.user = {
		username: "",
		password: "",
		email: '',
		first_name: '',
		last_name: '',
		street_address:"",
		city: '',
		zipcode: '',
		state:''
			};


	$scope.register = function(){
		$http({
			url: "http://localhost:8000/register/",
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-form-unlencoded"
			},
			data: {
				'username': $scope.user.username,
				'password': $scope.user.password,
				'email': $scope.user.email,
				'first_name': $scope.user.first_name,
				'last_name': $scope.user.last_name,
				'street_address': $scope.user.street_address,
				"city": $scope.user.city,
				"zipcode": $scope.user.zipcode,
				"state": $scope.user.state
			}
		})
		.then(res => {
			
				$location.path('/login');
			});
		};
	

	$scope.login = function(){
		$http({
			url: "http://localhost:8000/api-token-auth/",
			method: "POST",
			data: {
				'username': $scope.user.username,
				'password': $scope.user.password
			}
		})
		.then(
			res => {
				console.log("res from login", res);
				RootFactory.setToken(res.data.token);
				console.log(RootFactory.getToken());
				if(res.data.token !== ""){
					$location.path('/room');
				}
		});
	};
}
]);