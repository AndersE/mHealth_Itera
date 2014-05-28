angular.module('HealthApp.json', []).
    factory('jsonService', function() {
        return {
            challenge: [
                {"Sporsmal": "Tekst for spørsmål1"},
                {"Sporsmal": "Tekst for spørsmål2"},
                {"Sporsmal": "Tekst for spørsmål3"}
            ],
            food: [
                {"Sporsmal": "Tekst for spørsmål1"},
                {"Sporsmal": "Tekst for spørsmål2"},
                {"Sporsmal": "Tekst for spørsmål3"}
            ],
            rested: [
                {"Sporsmal": "Tekst for spørsmål1"},
                {"Sporsmal": "Tekst for spørsmål2"},
                {"Sporsmal": "Tekst for spørsmål3"}
            ],
            happiness: [
                {"Sporsmal": "Tekst for spørsmål1"},
                {"Sporsmal": "Tekst for spørsmål2"},
                {"Sporsmal": "Tekst for spørsmål3"}
            ]
        }
    });