define(function(require, exports, module){
  var ip=require("common/js/ip");
  var ipAddress=ip.GetLocalIPAddr();
  exports.address=function(){
    return ipAddress;
  }
  return exports;
});
