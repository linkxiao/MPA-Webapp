/*
 * @file   The location href for common
 * @author linkxiao(xiaofengyan@baidu.com)
 * @date   2015/04/24
 */


//------------------------------------------------------------------------------------------------------------------------------------------
//Module: config locationHash for common                              Date:2015-04-24 19:00
//------------------------------------------------------------------------------------------------------------------------------------------
define([],function(require) {
    return {
        subKey:function(paramsName){
            var foundoffset=paramsName.indexOf("=");
            if(foundoffset==-1){
                return null;
            }
            return paramsName.substring(0,foundoffset);
        },

        subTitle:function(title,curSize){
            var subTitle;
            if(title.length>curSize){
                subTitle=title.substring(0,curSize)+"..."
            }else{
                subTitle=title;
            }
            return subTitle;
        },
        urlHashJson:function(){
            var urlHash = window.location.href;
            //var urlHash="http://yi.baidu.com/pc/search/list?sessionid=1437623911537549&pssid=&pvid=1437623911537549&cityId=1&ajaxid=0&tn=NONE&zt=self&zt_ext=&wd=";
            var theRequest = {};
            var l = urlHash.indexOf("?");
            if (l >= 0) {
                var str = urlHash.substr(l+1);
                if (str.indexOf("&") != -1) {
                    strs = str.split("&");
                    for (var i = 0; i < strs.length; i++) {
                        theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
                    }
                } else {
                    theRequest[str.split("=")[0]] = str.split("=")[1];
                }
            }
            return theRequest;
        },
        locationHash:function(key){//Tostring URL paramers
            var previousPage = window.location.toString();
            var pageParams = previousPage.substring(previousPage.indexOf("?") + 1, previousPage.length);
            pageParams = decodeURI(pageParams);
            pageParams = pageParams.replace(/\s/g, "");
            var paramsName = pageParams.split("&");
            for(var i=0; i<paramsName.length; i++){
                if(this.subKey(paramsName[i])==key){
                    var curParamer=paramsName[i].substring(paramsName[i].indexOf("=")+1,paramsName[i].length);
                    return curParamer;
                }else{
                    return null;
                }
            }
        },

        /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        /*  Module: cookie:set/get/remove         Date:2014-11-05 16:00                                                                                                              */
        /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        //设置cookie
         setCookie:function(curName, curValue, exdays) {
            var date = new Date();
                date.setTime(date.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+date.toUTCString();
            document.cookie = curName + "=" + curValue + "; " + expires;
        },
        //获取cookie
         getCookie:function(curName) {
           var arryCookie = document.cookie.split("; ");
               for (var i = 0; i < arryCookie.length; i++) {
                   var arrayTemp = arryCookie[i].split("=");
                   if (arrayTemp[0] == curName){
                     return unescape(arrayTemp[1]);
                   }
               }
        },
        //删除cookie
         delCookie:function(curName) {
            this.setCookie(curName, "", -1);
        },

        /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        /*  Encapsulation localstorage:set/get/remove         Date:2014-04-24 16:00                                                                                                              */
        /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        /*
         * set/get localstorage:
         * @param {String} name(key):field
         * @param {String} value
         * @return{String}
         */
        lsItem :function(name,value){
            var getVal =null;
            if(window.localStorage){
                if(value){
                    //alert(value);
                    localStorage.setItem(name,value);
                    getVal =value;
                }else{
                    getVal =localStorage.getItem(name);
                }
            }else{
                alert("This browser does not support localStorage!");
            }
            return getVal;
        },

        /*remove localstorage:
         * @param  {String} name(key):field
         * @return {Boolean}
         */
        lsRemoveItem:function(name){
            if(window.localStorage){
                localStorage.removeItem(name);
            }else{
                alert("This browser does not support localStorage!");
                return false;
            }
            return true;
        },
        lsRemoveItems:function() {//delete all localstorages
            var getKeys = arguments;
            for(var i=0; i<getKeys.length; i++){
                this.lsRemoveItem(getKeys[i]);
            }
        },

        unLoad:function(){
            var unloadConfirm = {};
            //unloadConfirm.MSG_UNLOAD = "数据尚未保存，离开后可能会导致数据丢失\n\n您确定要离开吗？";
            unloadConfirm.set = function(a) {
                window.onbeforeunload = function(b) {
                    b = b || window.event;
                    b.returnValue = a;
                    return a
                }
            };
            unloadConfirm.clear = function() {
                fckDraft.delDraftById();
                window.onbeforeunload = function() {}
            };
            //unloadConfirm.set(unloadConfirm.MSG_UNLOAD);
            this.lsRemoveItems("tempProvId","tempCityId","tempRegionId","tempLevel1Id","tempLevel2Id","tempMedTitle");
        },

        barCode:function(){
            var barEle=$(".bar-code");
            window.onscroll=window.onresize=function(){
                //var clientHeight;
                var barHeight=barEle.height();
                var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;//前者为IE,fireFox，后者为chrome
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop; //前者为IE,fireFox，后者为chrome;
                var allHeight=document.documentElement.scrollHeight||document.body.scrollHeight;//前者为IE,fireFox;//后者为chrome;
                var slideHeight=clientHeight+scrollTop;
                var offsetBarHeight=allHeight-slideHeight;

                if(offsetBarHeight<barHeight){
                    barEle.css("bottom",(barHeight-offsetBarHeight)+"px")
                    console.log("offsetBarHeight:"+offsetBarHeight);
                }
                if(slideHeight==allHeight){
                    console.log("slideHeight:"+slideHeight);
                    console.log("allHeight:"+allHeight)
                    barEle.css("bottom","100px")
                }else{
                    console.log("slideHeight2:"+slideHeight);
                    console.log("allHeight2:"+allHeight)
                    barEle.css("bottom","0px")
                }

            }

        },

        keyParamer: function (paramData) {
            var self = this;
            var str = '';
            for (var key in paramData) {
                str += '<input type="hidden" name="' + key + '" value="' + paramData[key] + '" />';
            }
            str+='<input type="hidden" name="searchTag" value="1" />';
            // str+='<input type="hidden" name="provId" value="'+$("#city-list").find(".current-select").attr("data-provId")+'"  />';
            // str+='<input type="hidden" name="cityId"  value="'+$("#city-list").find(".current-select").attr("data-value")+'"/>';
            $('input[name="key"]')[0].value = $("input[name='key']")[0].value.replace(/(^\s*)|(\s*$)/g,"")
            $('input[name="key"]').after(str);
            $("#med_form").attr("action", "" + this.api + "/pc/search/list").submit();//通过js方式提交表单
        },
        src:(function(){//配置src资源路径
            var href=$(".footer-box").data("src");
            return href;
        })(),
        href:(function(){//配置href连接路径
            var href=$(".footer-box").data("href");
            return href;
        })(),
        api:(function(){//配置api路径
            var api=$(".footer-box").data("api");
            return api;
        })(),
        keyWord: function (paramData) {
            var self = this;
            $('#querySearch').on('click', function (e) {
                var key=$("input[name='key']")[0].value.replace(/(^\s*)|(\s*$)/g,"");
                if (( key != "" ) && ( key != "请输入医院/科室/疾病/症状/医生姓名") ) {
                    self.keyParamer(paramData);
                    return false;
                } else {
                    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
                    $("input[name='key']")[0].value = "";
                }
            });
            $("#querySearch").on("keydown", function (e) {
                var curKey = e.which;
               if (curKey == 13) {
                    var key=$("input[name='key']")[0].value.replace(/(^\s*)|(\s*$)/g,"");
                    if (( key ) != "" && (key != "请输入医院/科室/疾病/症状/医生姓名")) {
                        self.keyParamer(paramData);
                        return false;
                    }
                    else {
                        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
                        $("input[name='key']")[0].value = "";
                    }
                }
            });
            $("input[name='key']").on("keydown", function (e) {
                var curKey = e.which;
                if (curKey == 13) {
                    var key=$("input[name='key']")[0].value.replace(/(^\s*)|(\s*$)/g,"");
                    if ((key != "" ) && (key != "请输入医院/科室/疾病/症状/医生姓名")) {
                        self.keyParamer(paramData);
                        self.httpGet(1);
                        return false;
                    }
                    else {
                        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
                        $("input[name='key']")[0].value = "";
                    }
                }

            });

        },
        init:function(){

            var placeholder=$("#search-tips-input").attr("placeholder");
            //搜索框的获取焦点和失去焦点事件
            $("#search-tips-input").on("focus", function() {
                var self = $(this);
                if (this.value == placeholder ||self.val() =="" ) {
                    this.value ="";
                    self.removeClass("gray");
                };
            });

            $("#search-tips-input").on("blur", function() {
                var self = $(this);
                if (this.value === "") {
                    this.value =placeholder;
                    self.addClass("gray");
                };

            });
            if (this.value === "") {
                this.value = placeholder;
            }
            $(window).scroll(function(){
                if ($(window).scrollTop() > 0 && $(window).scrollTop() <= 200) {
                    $("#button-top").show();
                } else if ($(window).scrollTop() == 0) {
                    $("#button-top").hide();
                }
            });
            $("#button-top").find("img").mouseenter(function(){

                $(this).attr("src", $(this).data("srchover"));
            })
            $("#button-top").find("img").mouseleave(function(){
                $(this).attr("src", $(this).data("src"));

            });
        }






    }


});
