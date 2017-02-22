/*
 * @file   The gulpfile for current project
 * @author linkxiao(linkxiao@icloud.com)
 * @date   2015/11/12
 */

 define(function(require, exports, module){//
    var testJq=require("common/js/testJq");
    exports.departData=function(){
        var pathData=testJq.pathData();
        return pathData;
    };

    exports.categoryData=function(){
      // var categoryData=$(".catesummary:nth-child(1)").html();//require("global/categorysummary")
          // return categoryData;
    };

    /**
     * 控制显示为三行，超出显示为'...'
     */
    exports.summaryLineAdjust = function (nodeClass) {
        var nodeList = $(nodeClass);
        $.each(nodeList, function () {
            if($(this).height() > 57) {
                $(this).next().show();
            }
            else {
                $(this).next().hide();
            }
        });
    };

    return exports;
 });
