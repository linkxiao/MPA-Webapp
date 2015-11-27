/*
 * @file   The gulpfile for current project
 * @author linkxiao(xiaofengyan@baidu.com)
 * @date   2015/11/12
 */

 define(function(require, exports, module){//require, exports, module
   var $=require("zepto");
   var summaryData=require("category/categoryModel").categoryData();
   var sub=require("common/js/sub");
       //$(".catesummary").html(sub.subStr(summaryData,60));
       console.log(sub.subStr(summaryData,30))
 });
