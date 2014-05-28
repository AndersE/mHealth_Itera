angular.module('HealthApp.json', []).
    factory('jsonService', function() {
        return {
            challenge: [
                {
                    "Sporsmal1": "Tekst for spørsmål1",
                    "Sporsmal2": "Tekst for spørsmål2",
                    "Sporsmal3": "Tekst for spørsmål3"
                }
            ],

            food: [
                {
                    "Sporsmal1": "Tekst for spørsmål1",
                    "Sporsmal2": "Tekst for spørsmål2",
                    "Sporsmal3": "Tekst for spørsmål3"
                }
            ],
            rested: [
                {
                    "Sporsmal1": "Tekst for spørsmål1",
                    "Sporsmal2": "Tekst for spørsmål2",
                    "Sporsmal3": "Tekst for spørsmål3"
                }
            ],
            happyness: [
                {
                    "Sporsmal1": "Tekst for spørsmål1",
                    "Sporsmal2": "Tekst for spørsmål2",
                    "Sporsmal3": "Tekst for spørsmål3"
                }
            ]
        }
    });