    (function (angular) {
        'use strict';

        angular.module('app.auth')
            .service('AuthService', AuthService);

        function AuthService() {
            var self = this;
        }
    }(angular));
