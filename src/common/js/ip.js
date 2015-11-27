define(function(require, exports, module){
    exports.GetLocalIPAddr=function(){
      /** 
       * 获取本地IP地址
       */
          var obj = null;
          var rslt = "127.0.0.1";
          try{
              obj = new ActiveXObject("rcbdyctl.Setting");
              if (!isNull(obj.GetIPAddress)){
                  rslt = obj.GetIPAddress;
              }
              obj = null;
          }
          catch(e){
              //异常发生
          }
          return rslt;

    }
        //alert(GetLocalIPAddr())
        return exports;
})
