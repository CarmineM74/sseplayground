define(['auth/module'], function (module) {

    'use strict';

   return module.factory('User', ["$http", "$q", function ($http, $q) {
        var dfd = $q.defer();

        var UserModel = {
            initialized: dfd.promise,
            username: undefined,
            picture: undefined
        };
         $http.get('api/user.json').then(function(response){
             UserModel.username = response.data.username;
             UserModel.picture= response.data.picture;
             dfd.resolve(UserModel)
         });

        return UserModel;
    }]);

});
