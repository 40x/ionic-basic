(function(angular) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    // @ngInject
    function DashboardController() {
        var dVm = this;
    }
}(angular));
