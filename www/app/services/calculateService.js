angular.module('HealthApp.calculate', []).
    factory('calculateService', function() {
        return {
            calculateType: function(value) {
                var type;
                if (value < 25) {
                    type = 'success';
                } else if (value < 50) {
                    type = 'info';
                } else if (value < 75) {
                    type = 'warning';
                } else {
                    type = 'danger';
                }
                return type;
         }
        }
    });