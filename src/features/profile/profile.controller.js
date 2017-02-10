(function(angular) {
    'use strict';
    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    // @ngInject
    function ProfileController() {
        var pVm = this;
    }
}(angular));
