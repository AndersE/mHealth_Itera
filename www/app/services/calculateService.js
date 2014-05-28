angular.module('HealthApp.calculate', []).
    factory('calculateService', function() {
        return {
            calculateType: function(value) {
                var type;
                if (value < 25) {
                    type = 'danger';
                } else if (value < 50) {
                    type = 'warning';
                } else if (value < 75) {
                    type = 'info';
                } else {
                    type = 'success';
                }
                return type;
         }
        }
    });