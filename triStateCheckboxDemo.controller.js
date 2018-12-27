platformAguraApp.controller('triStateCheckboxDemo', function ($http, $timeout, $scope, $rootScope, PublicAPI, UserAPI) {
    $scope.model = {
        selectAll:null,
        people: [
            {
                name: "Bob",
                allState:null,
                fruits: [
                    {type: 'Apple', state: false},
                    {type: 'Banana', state: false},
                    {type: 'Pear', state: true},
                    {type: 'Tomato', state: false},
                    {type: 'Grapefruit', state: false},
                ]
            },
            {
                name: "Joe",
                allState:null,
                fruits: [
                    {type: 'Apple', state: false},
                    {type: 'Banana', state: false},
                    {type: 'Pear', state: false},
                    {type: 'Tomato', state: false},
                    {type: 'Grapefruit', state: false},
                ]
            }
        ]
    };
});
