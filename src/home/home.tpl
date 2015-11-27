<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="format-detection" content="telephone=no, email=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <title>home</title>
  {%include file="../common/tpl/conf.tpl"%}
  <link rel="stylesheet" href="{%$path%}/home/home.css">
</head>
<body>

{%include file="../common/tpl/header.tpl"%}

  <div class="wrap">
      <div class="banner home">
        <div id="photo">
           <ul id="pic-view" class="pic-view">

               {%foreach $bannerImg item=img%}
                  <li>
                    {%if $img.link != ""%}
                      <a href={%$img.link%}>
                      {%else%}
                      <a>
                    {%/if%}
                       <img src="{%$img.img%}"  style="height:225px"/>
                      </a>
                  </li>
               {%/foreach%}

           </ul>
         </div>
        <div class="banner-title">
          <h5>{%$tplData.welcome%}</h5>
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


          <!-- <li data-link="#/doctor/" departId="ddj">
            <a href="../../mock/introduce.php">
              <dd>
                 <img src="{%$path%}/common/img/icon/icon-hospital.png"/>
              </dd>
              <h5>医院简介</h5>
            </a>
          </li>

          <li data-link="#/doctor/" departId="ddj">
            <a href="../../mock/category.php">
              <dd><img src="{%$path%}/common/img/icon/icon-depart.png"/></dd>
              <h5>科室简介</h5>
            </a>
          </li>

          <li data-link="#/doctor/" departId="ddj">
           <a href="../../mock/category.php">
              <dd><img src="{%$path%}/common/img/icon/icon-expert.png"/></dd>
              <h5>专家简介</h5>
           </a>
          </li>

          <li data-link="#/doctor/" departId="ddj">
            <a href="#">
              <dd><img src="{%$path%}/common/img/icon/icon-admin.png"/></dd>
              <h5>就诊人管理</h5>
            </a>
          </li>

          <li data-link="#/doctor/" departId="ddj">
            <a href="#">
            <dd> <img src="{%$path%}/common/img/icon/icon-guide.png"/></dd>
            <h5>就医指南</h5>
            </a>
          </li>

          <li data-link="#/doctor/" departId="ddj">
            <a href="#">
            <dd><img src="{%$path%}/common/img/icon/icon-map.png"/></dd>
            <h5>来院导航</h5>
            </a>
          </li>

          <li data-link="#/doctor/" departId="ddj">
           <a href="#">
            <dd><img src="{%$path%}/common/img/icon/icon-pay.png"/></dd>
            <h5>在线支付</h5>
           </a>
          </li>

          <li class="" data-link="#/doctor/" departId="ddj">
            <a href="#">
            <dd><img src="{%$path%}/common/img/icon/icon-waitin.png"/></dd>
            <h5>排队候诊</h5>
            </a>
          </li> -->

        </ul>
       </div>

     </div>


     <div class="clear"></div>

     
  </div>

{%include file="../common/tpl/footer.tpl"%}
<script src="{%$path%}/home/home.js"></script>
</body>
</html>
