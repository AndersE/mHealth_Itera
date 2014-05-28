angular.module('HealthApp.json', []).
    factory('jsonService', function() {
        return {
            challenge: [
                {"Sporsmal": "Tekst for spørsmål1",
                 "checkbox": false},
                {"Sporsmal": "Tekst for spørsmål2",
                 "checkbox": false},
                {"Sporsmal": "Tekst for spørsmål3",
                 "checkbox": false}
            ],
            food: [
                {"Sporsmal": "Tekst for spørsmål1",
                    "checkbox": false},
                {"Sporsmal": "Tekst for spørsmål2",
                    "checkbox": false},
                {"Sporsmal": "Tekst for spørsmål3",
                    "checkbox": false}
            ],
            rested: [
                {"Sporsmal": "Tekst for spørsmål1",
                    "checkbox": false},
                {"Sporsmal": "Tekst for spørsmål2",
                    "checkbox": false},
                {"Sporsmal": "Tekst for spørsmål3",
                    "checkbox": false}
            ],
            happiness: [
                {"Sporsmal": "Tekst for spørsmål1",
                    "checkbox": false},
                {"Sporsmal": "Tekst for spørsmål2",
                    "checkbox": false},
                {"Sporsmal": "Tekst for spørsmål3",
                    "checkbox": false}
            ]
        }
    });