platformAguraApp.directive('indeterminateCheckbox', [function () {
    return {
        scope: true,
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            //initial update
            var childList = attrs.childList;
            var property = attrs.property;

            // Bind the onChange event to update children
            element.bind('change', function () {
                scope.$apply(function () {
                    var isChecked = element.prop('checked');

                    // Set each child's selected property to the checkbox's checked property
                    angular.forEach(scope.$eval(childList), function (child) {
                        child[property] = isChecked;
                        if (child.fruits) {
                            angular.forEach(child.fruits, function (fruit) {
                                fruit[property] = isChecked;
                            });
                        }
                    });
                });
            });

            // Watch the children for changes
            scope.$watch(childList, function (newValue) {
                var hasChecked = false;
                var hasUnchecked = false;
                // Loop through the children
                angular.forEach(newValue, function (child) {
                    if (child.fruits) {
                        angular.forEach(child.fruits, function (item) {
                            if (item[property]) {
                                hasChecked = true;
                            } else {
                                hasUnchecked = true;
                            }

                            // Determine which state to put the checkbox in
                            if (hasChecked && hasUnchecked) {
                                element.prop('checked', false);
                                element.prop('indeterminate', true);

                                if (modelCtrl) {
                                    modelCtrl.$setViewValue(false);

                                }

                            } else {
                                element.prop('checked', hasChecked);
                                element.prop('indeterminate', false);

                                if (modelCtrl) {
                                    modelCtrl.$setViewValue(hasChecked);
                                }
                            }
                        });
                    } else {
                        if (child[property]) {
                            hasChecked = true;
                        } else {
                            hasUnchecked = true;
                        }


                        // Determine which state to put the checkbox in
                        if (hasChecked && hasUnchecked) {
                            element.prop('checked', false);
                            element.prop('indeterminate', true);

                            if (modelCtrl) {
                                modelCtrl.$setViewValue(false);

                            }

                        } else {
                            element.prop('checked', hasChecked);
                            element.prop('indeterminate', false);

                            if (modelCtrl) {
                                modelCtrl.$setViewValue(hasChecked);
                            }
                        }
                    }

                });

            }, true);
        }
    };
}]);