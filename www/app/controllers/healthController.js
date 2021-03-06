﻿HealthApp.controller('HealthCtrl', function ($scope,  healthService, jsonService, calculateService) {
    $scope.helloWorld = "Controller speaking: Hello world";
    $scope.challengeQuestions = jsonService.challenge;
    $scope.foodQuestions = jsonService.food;
    $scope.restedQuestions = jsonService.rested;
    $scope.happinessQuestions = jsonService.happiness;
    $scope.progressbarValue = 0;
    $scope.progressbarType = calculateService.calculateType($scope.progressbarValue);
    $scope.isChallengeExpanded = false;
    $scope.isFoodExpanded = false;
    $scope.isRestedExpanded = false;
    $scope.isHappinessExpanded = false;
    $scope.oneAtATime = true;
    $scope.counter = 0;

    $scope.changeType = function (input) {
        if (input) {
            $scope.counter += 1;
        } else {
            $scope.counter -= 1;
        }
        $scope.progressbarValue = Math.ceil($scope.counter / 12 * 100);
        $scope.progressbarType = calculateService.calculateType($scope.progressbarValue);
    };

    $('#ex1').slider({
        formater: function(value) {
            return 'Current value: ' + value;
        }
    });

    $scope.expandChallenge = function() {
        if ($scope.isChallengeExpanded) {
            $scope.isChallengeExpanded = false;
        } else {
            $scope.isChallengeExpanded = true;
        }
    };

    $scope.expandFood = function() {
        if ($scope.isFoodExpanded) {
            $scope.isFoodExpanded = false;
        } else {
            $scope.isFoodExpanded = true;
        }
    };

    $scope.expandRested = function() {
        if ($scope.isRestedExpanded) {
            $scope.isRestedExpanded = false;
        } else {
            $scope.isRestedExpanded = true;
        }
    };

    $scope.expandHappiness = function() {
        if ($scope.isHappinessExpanded) {
            $scope.isHappinessExpanded = false;
        } else {
            $scope.isHappinessExpanded = true;
        }
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});

