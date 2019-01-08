 $scope.disableTwo = function (parent, child, target) {
        if (child !== 'null' && parent !== 'null') { //child case
            if (target === 'deny')
                $rootScope.functionsList.functions[parent].rolesList[child].allow = false;
            else $rootScope.functionsList.functions[parent].rolesList[child].deny = false;
        } else if (parent !== 'null') { //parent case
            // var isChecked = element.prop('checked');
            // Set each child's selected property to the checkbox's checked property
            angular.forEach($rootScope.functionsList.functions[parent].rolesList, function (child, index) {
                if (target === 'allow') {
                    $rootScope.functionsList.functions[parent].rolesList[index].deny = false;
                    $rootScope.functionsList.functions[parent].rolesList[index].allow = true;
                }
                if (target === 'deny') {
                    $rootScope.functionsList.functions[parent].rolesList[index].allow = false;
                    $rootScope.functionsList.functions[parent].rolesList[index].deny = true;
                }
            });
            console.log($rootScope.functionsList.functions[parent].rolesList);
        } else { //ALL CASE
            for (let i = 0; i < $rootScope.functionsList.functions.length; i++) {
                $scope.disableTwo(i, 'null', target); //recursion call to deisable the opposite of the checkboxes
            }
        }
    };
    ----------------------------------------------------------------------
    ALL:disableTwo('null','null','allow')
    PARENT:disableTwo($index,'null','allow')
    CHILDREN:disableTwo($parent.$index,$index,'allow')