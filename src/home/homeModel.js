/*
 * @file   The gulpfile for current project
 * @author linkxiao(linkxiao@icloud.com)
 * @date   2015/11/12
 */

 define(["common/js/popup"],function(pop){//require, exports, module
  // var $=require("zepto");
   //var hospiData=require("common/js/popup");
   // alert("linkxiaoEileen");
   return {
     homeTest:function(){
       //alert($+"--index.js");
       alert(pop.popup()+"--homeTest");
       $(".home-index").html(JSON.stringify(pop.popup()));
     },
     homePro:function(){
          alert("homePro");
     }
   };

 });
