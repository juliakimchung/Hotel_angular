"use strict";

let app = angular.module("My_HotelApp", ['ngRoute'])
					.constant('apiUrl', 'http://localhost:8000/');

angular.module('My_HotelApp').config(
	[
		"$interpolateProvider",
		"$routeProvider",
		function($interpolateProvider, $routeProvider){
			$interpolateProvider.startSymbol('((');
			$interpolateProvider.endSymbol('))');

			$routeProvider
				.when('/', {
					controller: "AuthCtrl",
					templateUrl: 'partials/login.html'
				})
				.when('/room', {
					controller: "RoomCtrl",
					templateUrl: "partials/room.html"
				});
		}





	]);