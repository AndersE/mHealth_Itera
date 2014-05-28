angular.module('HealthApp.json', []).
    factory('jsonService', function() {
        return {
            challenge: [
                {"Sporsmal": "Sykle til jobb",
                 "checkbox": false},
                {"Sporsmal": "Ta 10 push ups",
                 "checkbox": false},
                {"Sporsmal": "50 tåhev",
                 "checkbox": false}
            ],
            food: [
                {"Sporsmal": "Fem om dagen",
                    "checkbox": false},
                {"Sporsmal": "Ikke spist godteri",
                    "checkbox": false},
                {"Sporsmal": "Brokkoli til middag",
                    "checkbox": false}
            ],
            rested: [
                {"Sporsmal": "Sovet åtte timer i natt",
                    "checkbox": false},
                {"Sporsmal": "Sett på Hotel Cæsar",
                    "checkbox": false},
                {"Sporsmal": "Tatt power nap",
                    "checkbox": false}
            ],
            happiness: [
                {"Sporsmal": "Brukt en time på deg selv",
                    "checkbox": false},
                {"Sporsmal": "Spilt nok XBOX",
                    "checkbox": false},
                {"Sporsmal": "Ligget på sofaen",
                    "checkbox": false}
            ]
        }
    });