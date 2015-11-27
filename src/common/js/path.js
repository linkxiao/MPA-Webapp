
define(function(require, exports, module){
    exports.srcRoot=function(){
      var path=$(".dom-tpldata").data("path");
      return path;
    }
    return exports;
});
