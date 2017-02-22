/*
 * @file   The gulpfile for current project
 * @author linkxiao(linkxiao@icloud.com)
 * @date   2015/11/12
 */

 require(['home/homeView','slider'],function(view,slider){
     slider({
         wrap: document.getElementById('photo'),
         loop: true,
         autoPlay:true,
         autoTime:6000,
         pagination:true
      });
      // (function(){
      //         var auto = window.innerWidth/750;
      //         var h = auto*320;
      //         h = h>320?320:h
      //         $('#photo').height(h+'px');
      // })();
     view.homeTest();
     view.homePro();
 });
