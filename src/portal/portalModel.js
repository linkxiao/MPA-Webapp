/**
 * Created by ppf on 9/8/15.
 */

 define(function(require, exports, module){//
    var testJq=require("common/js/testJq");
    exports.portaltData=function(){
        var pathData=testJq.pathData();
        return pathData;
    };
    return exports;
 });
