/**
 * Created by ppf on 9/8/15.
 */

 define(function(require, exports, module){
   var $=require("zepto");
   var pop=require("common/js/popup");
   var portal=require("portal/portalModel");
   // alert("linkxiaoEileen");
   return {
     homeTest:function(){
       alert($+"--portalView.js");
       alert(pop.popup()+"--portal");
       $(".portal").html(portal.portaltData());
     },
     homePro:function(){
          alert("homePro-portal");
     }
   };

 });
