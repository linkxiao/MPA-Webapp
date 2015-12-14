<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="format-detection" content="telephone=no, email=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    {%include file="./common/conf.tpl"%}
    {%assign var="title" value="{%$name%}" scope="global"%}
    <title>{%$title%}</title>
    <link rel="stylesheet" href="{%$path%}/home/home.css">
</head>
<body>

{%include file="./common/pageHeader.tpl"%}
    <div class="wrap">
        <div class="banner home">
            <div id="photo">
                <ul id="pic-view" class="pic-view">
                {%foreach $bannerImg item=img%}
                    <li>
                        <img src="{%$img.img%}"  style="height:225px"/>
                    </li>
                {%/foreach%}
                </ul>
            </div>
            <div class="modal">
                <p>{%$tplData.welcome%}</p>
            </div>
        </div>
        <div class="container">
            <div class="box">
                <ul class='box-con'>
                {%foreach $navItem item=nav%}
                    {%if $navItem|@count gt 6%}
                    <li data-link="{%$nav.link%}" departId="ddj">
                    {%else%}
                    <li data-link="{%$nav.link%}" departId="ddj" style="width:50%">
                    {%/if%}
                        <a href="{%$nav.link%}">
                            <dd><img src="{%$nav.avatar%}"/></dd>
                            <h5>{%$nav.name%}</h5>
                        </a>
                    </li>
                {%/foreach%}
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>
{%include file="./common/footer.tpl"%}
<script src="{%$path%}/home/home.js"></script>
</body>
</html>
