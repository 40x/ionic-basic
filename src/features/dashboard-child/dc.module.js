(function(angular) {
    'use strict';
    angular
        .module('app.dashboardChild', [])
        .config(dashConfig);

    // @ngInject
    function dashConfig($stateProvider) {
        $stateProvider
            .state('app.home.dashboard.child', {
                url: '/child',
                views: {
                    'dashView@app.home': {
                        templateUrl: 'features/dashboard-child/dc.html',
                        controller: 'DCController as dVm'
                    }
                },
                data: {
                    authenticate: true
                }
            });
    }
}(angular));
