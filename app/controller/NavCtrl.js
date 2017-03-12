"use strict";


app.controller('navCtrl', function($scope, $location) {

    $scope.isActive = function(views) {
        return views === $location.path('/login');
    };


    $scope.navItems = [{
        name: "login",
        url: '/#!/login/'
    }, 
    {
        name: "register",
        url: '/#!/register/'

    }, 
    { 
        name: "reserve", 
        url: '/#!/reserve/'
    }, 
    {
        name: "logout",
        url: '/#!/logout/'
    }];

});