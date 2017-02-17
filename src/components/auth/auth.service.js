    (function (angular) {
        'use strict';

        angular.module('app.auth')
            .service('AuthService', AuthService);

        function AuthService($ionicPush, $state, $ionicUser) {
            var self = this;

            self.isAuthenticated = isAuthenticated;
            self.registerForPushNotifications = registerForPushNotifications;

            function isAuthenticated () {
                return true;
            }

            function registerForPushNotifications() {
                $ionicPush.register()
                    .then(function(t) {
                        return $ionicPush.saveToken(t);
                    }).then(function(t) {
                        // save this on your user object
                        console.log($ionicUser.id);
                    });
            }
        }
    }(angular));
