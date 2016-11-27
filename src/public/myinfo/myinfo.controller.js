(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['UserInfoService', 'ApiPath'];
function UserInfoController(UserInfoService, ApiPath) {
  var $ctrl = this;
  $ctrl.message = "Not Signed Up Yet.";

  $ctrl.basePath = ApiPath;

  $ctrl.firstname = UserInfoService.fn;
  $ctrl.lastname = UserInfoService.ln;
  $ctrl.email = UserInfoService.email;
  $ctrl.phone = UserInfoService.phone;
  $ctrl.favmenu = UserInfoService.favmenu;
  $ctrl.title = UserInfoService.favmenuname;
  $ctrl.description = UserInfoService.favmenudescr;

  if (!$ctrl.firstname) {
    $ctrl.newuser = true;
  }
  else {
    $ctrl.olduser = true;
  }


}


})();
