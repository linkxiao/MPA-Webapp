/*
 * @file   The gulpfile for current project
 * @author linkxiao(xiaofengyan@baidu.com)
 * @date   2015/11/12
 */

 define(function(require, exports, module){//
    var testJq=require("common/js/testJq");
    exports.departData=function(){
        var pathData=testJq.pathData();
        return pathData;
    };

    exports.categoryData=function(){
      var categoryData=$(".catesummary:nth-child(1)").html();//require("global/categorysummary")
          return categoryData;
    };

    return exports;
 });
