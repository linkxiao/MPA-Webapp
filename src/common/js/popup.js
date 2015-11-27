define(function(require, exports, module){
  var $=require("zepto");
  var hospiData=$("footer").data("name");
  return {
    popup:function(){
      return hospiData;
    }
  };
});
