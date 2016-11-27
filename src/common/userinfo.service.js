(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

function UserInfoService() {
  var service = this;
  service.fn = "";
  service.ln = "";
  service.email = "";
  service.phone = "";
  service.favmenu = "";
  service.favmenuname = "";
  service.favmenudescr = "";

  service.saveUser = function (fn,ln,email,phone,favmenu,favmenuname,favmenudescr) {
    service.fn = fn;
    service.ln = ln;
    service.email = email;
    service.phone = phone;
    service.favmenu = favmenu;
    service.favmenuname = favmenuname;
    service.favmenudescr = favmenudescr;
  }

}

})();
