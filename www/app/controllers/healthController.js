HealthApp.controller('HealthCtrl', function ($scope,  healthService, jsonService, calculateService) {
    $scope.helloWorld = "Controller speaking: Hello world";
    $scope.challengeQuestions = jsonService.challaege;
    $scope.foodQuestions = jsonService.food;
    $scope.restedQuestions = jsonService.rested;
    $scope.happynessQuestions = jsonService.happyness;
    $scope.progressbarValue = 40;
    $scope.progressbarType = calculateService.calculateType($scope.progressbarValue);
});

