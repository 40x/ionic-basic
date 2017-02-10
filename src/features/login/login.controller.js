    (function(angular) {
        'use strict';
        angular
            .module('app.login')
            .controller('LoginController', LoginController);

        // @ngInject
        function LoginController($ionicPush, $state) {
            var loginVm = this;

            loginVm.resgisterForPush = resgisterForPush;

            function resgisterForPush() {
                $ionicPush.register().then(function(t) {
                    return $ionicPush.saveToken(t);
                }).then(function(t) {
                    console.log('Token saved:', t.token);
                    $state.go('app.home.dashboard');
                });
            }
        }
    }(angular));
