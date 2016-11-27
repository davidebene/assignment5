(function () {
"use strict";

angular.module('public')
.factory('DataInterceptor', DataInterceptor)
.controller('SignupController', SignupController);

DataInterceptor.$inject = ['$http', '$q', 'ApiPath'];
function DataInterceptor($http, $q, ApiPath) {

var BASE_URL = ApiPath + '/menu_items/';

function register(itemShortName) {

   var defer = $q.defer();

   $http({method: "GET", url: (BASE_URL + itemShortName + '.json')})
     .then(function (response) {
        defer.resolve(response.data);
     })
     .catch(function (reason) {
        defer.resolve(reason.data.status);
     });

 return defer.promise;
}


return {
 register: register
}

}

SignupController.$inject = ['DataInterceptor'];
function SignupController(DataInterceptor) {
  var $ctrl = this;
   $ctrl.message = "";

   $ctrl.submit = function () {
     DataInterceptor.register($ctrl.user.menufav)
     .then(function (response) {
       console.log(response);
       if (response == 500) {
         $ctrl.message = "No such menu number exists";
         $ctrl.completed = true;
       }
       else {
         $ctrl.message = "Your information has been saved";
         $ctrl.completed = true;

         
       }
    });
  };
};

})();
