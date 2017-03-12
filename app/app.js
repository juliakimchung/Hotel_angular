"use strict";

let app = angular.module("My_HotelApp", ['ngRoute', 'ngTouch', 'ngAnimate'])
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
				.when('/room', {
					controller: "RoomCtrl",
					templateUrl: "partials/room.html"
				})
				.when('/reserve', {
					controller: "ReserveCtrl",
					templateUrl: 'partials/reserve.html'
				})
				.when('/payment_type', {
					controller: "PaymentCtrl",
					templateUrl: 'partials/payment.html'
				})
				.when('reservation_detail', {
					controller: "ReserveDetailCtrl",
					templateUrl: 'partials/reservationDetail.html'
				})
				.when('home', {
					controller: "HomeCtrl",
					templateUrl: 'partials/home.html'
				});

		}





	]);















