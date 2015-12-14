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
  <link rel="stylesheet" href="{%$path%}/portal/portal.css">
</head>
<body>


{%if $parts|@count neq 0 %}
  {%include file="./common/header.tpl"%}
  <div class="wrap">

    <div class="banner">
      <img src="{%$tplData.banner%}" />
    </div>

    <div class="container">
        <div class="content">
          <h5>
          <span class="vertical"></span>
        	<span class="tips">
        		请选择院区预约挂号
        	</span>
        </h5>


          {%foreach $parts item=part%}
        	<a href="{%$part.partLink%}">
    	    	<div class="item">
    	    		<div class="avatar">
                <!-- <a href={%$img.link%}> -->
    	    			<img src="{%$part.partAvatar%}" alt="sd">
    	    		</div>
    	    		<div class="detail">
    	    			<p class="region">{%$part.partName%}</p>
    	    			<p class="address">{%$part.partAddr%}</p>
    	    		</div>
              <span class="readMore"></span>
    	    	</div>
        	</a>
          {%/foreach%}

      </div>
    </div>
  </div>
  {%include file="./common/footer.tpl"%}

{%else%}
<script>
  window.location="home.php"
</script>
{%/if%}
</body>
</html>
