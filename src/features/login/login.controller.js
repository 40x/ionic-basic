(function(angular) {
    'use strict';
    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    // @ngInject
    function LoginController($ionicAuth, $state, $ionicPush) {
        var loginVm = this;

        loginVm.login = login;

        init();

        function init() {
            // login loaded -> either app is newly installed or user logged out,
            // either way try to unregister the previous user (if any) from push notifications
            $ionicPush.unregister();
        }

        function login() {
            var details = {'email': loginVm.email, 'password': loginVm.email};
            $ionicAuth.signup(details)
                .then(_loginUser, _loginUser);
        }

        function _loginUser() {
            var details = {'email': loginVm.email, 'password': loginVm.email};
            $ionicAuth.login('basic', details).then(
                function() {
                    $state.go('app.home.dashboard', {registerForPush : true});
                }
            );
        }
    }
}(angular));
