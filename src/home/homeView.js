/*
 * @file   The gulpfile for current project
 * @author linkxiao(xiaofengyan@baidu.com)
 * @date   2015/11/12
 */

 define(["zepto","common/js/popup"],function($,pop){//require, exports, module
  // var $=require("zepto");
   //var hospiData=require("common/js/popup");
   // alert("linkxiaoEileen");
   return {
     homeTest:function(){
       console.log(pop.popup()+"--homeTest");
       //$(".clear").after(JSON.stringify(pop.popup()));
     },
     homePro:function(){
        console.log("homePro");
     }
   };

 });
