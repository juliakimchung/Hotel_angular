"use strict";


app.controller('NavCtrl', function($scope, $location) {
    $scope.currentNavItem = 'page1';
    // $scope.isActive = function(views) {
    //     return views === $location.path('/login');
    // };


    // $scope.navItems = [{
    //     name: "login",
    //     url: '/#!/login/'
    // }, 
    // {
    //     name: "register",
    //     url: '/#!/register/'

    // }, 
    // { 
    //     name: "reserve", 
    //     url: '/#!/reserve/'
    // }, 
    // {
    //     name: "logout",
    //     url: '/#!/logout/'
    // }];

});