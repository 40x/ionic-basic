(function(angular) {
    'use strict';
    angular
        .module('app.profile', [])
        .config(profileConfig);

    // @ngInject
    function profileConfig($stateProvider) {
        $stateProvider
            .state('app.home.profile', {
                url: '/profile',
                views: {
                    'profileView': {
                        templateUrl: 'features/profile/profile.html',
                        controller: 'ProfileController as pVm'
                    }
                },
                data: {
                    authenticate: false
                }
            });
    }
}(angular));
