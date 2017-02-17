(function(angular) {
    'use strict';
    angular
        .module('app.dashboard', [])
        .config(dashConfig);

    // @ngInject
    function dashConfig($stateProvider) {
        $stateProvider
            .state('app.home.dashboard', {
                url: '/dashboard',
                views: {
                    'dashView': {
                        templateUrl: 'features/dashboard/dashboard.html',
                        controller: 'DashboardController as dVm'
                    }
                },
                data: {
                    authenticate: true
                }
            });
    }
}(angular));
