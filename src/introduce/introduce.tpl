<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="format-detection" content="telephone=no, email=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  {%include file="../common/tpl/conf.tpl"%}
  {%assign var="title" value="医院介绍" scope="global"%}
  <title>{%$title%}</title>
  <link rel="stylesheet" href="{%$path%}/introduce/introduce.css">
</head>
<body>

{%include file="../common/tpl/page-header.tpl"%}

<div class="wrap">
  <div class="banner">
    <img src="{%$tplData.banner%}" alt="">
    <p class="tright">
      {%if $tplData.level neq "" %}
      <span class="grade">{%$tplData.level%}</span>
      {%/if%}
      {%if $tplData.insurance neq "" %}
      <span class="cropt">医保</span>
      {%/if%}
    </p>
    <div class="modal">
      <p>{%$name%}</p>
    </div>
  </div>

  <div class="container">
  	<section class="hospital-info">
  		<div class="info-item">
  			<label>医院类型：</label>
  			<span class='types'>{%$tplData.type%}</span>
  		</div>
  		<div class="info-item">
  			<label>联系电话：</label>
  			<span class='phone'>{%$tplData.tel%}</span>
  		</div>
  		<div class="info-item">
  			<label>总部地址：</label>
  			<span class='address'>{%$tplData.address%}</span>
  		</div>
  	</section>
  	<article class='hospital-detail'>
  		<label>医院简介:</label>
  		{%$tplData.hospitalInfo%}
  	</article>
 </div>

</div>

{%include file="../common/tpl/footer.tpl"%}
</body>
</html>
