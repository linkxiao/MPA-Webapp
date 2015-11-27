/*
 * @file   The gulpfile for current project
 * @author linkxiao(xiaofengyan@baidu.com)
 * @date   2015/11/10
 */

// define(["common/js/path"],function(pth){
//   //define(["jquery"],function($){
//     var path=$(".dom-tpldata").data("path");
//         alert(path+"--testJq-testJq-9090!")
//         alert(pth.srcRoot()+"--path")
//   //});
// })

define(function(require, exports, module){
  var $=require("zepto");
  //alert($+"--testJq");
  var path=$(".dom-tpldata").data("path");
  //alert(path+"--testJq-testJq-9090!");
  exports.pathData=function(){
   var pathValue=path;
   return pathValue;
 };
 return exports;
});
