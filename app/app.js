"use strict";

let app = angular.module("My_HotelApp", ['ngRoute',  'ngAnimate', 'ngMaterial','ngMessages'])
					.constant('apiUrl', 'http://localhost:8000/');



angular.module('My_HotelApp').config(
	[
		"$interpolateProvider",
		"$routeProvider",
		function($interpolateProvider, $routeProvider){
			$interpolateProvider.startSymbol('((');
			$interpolateProvider.endSymbol('))');

			$routeProvider

				.when('/login', {
					controller: "AuthCtrl",
					templateUrl: 'partials/login.html'
				})
				.when('/register', {
					controller: "AuthCtrl",
					templateUrl: 'partials/register.html'
				})
				.when('/room', {
					controller: "RoomCtrl",
					templateUrl: "partials/room.html"
				})
				.when('/reserve', {
					controller: "ReserveCtrl",
					templateUrl: 'partials/reserve.html'
				})
				
				.when('/reservation_detail/:reservationId', {
					controller: "ResDetailCtrl",
					templateUrl: 'partials/confirm.html'
				})
				.when('/my_reservation', {
					controller: "ResListCtrl",
					templateUrl: 'partials/resList.html'
				})
				.when('landing', {
					controller: "LandingCtrl",
					templateUrl: 'partials/landing.html'
				});


		}
]);















