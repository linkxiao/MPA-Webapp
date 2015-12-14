<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="format-detection" content="telephone=no, email=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  {%include file="./common/conf.tpl"%}
  {%assign var="title" value="{%$tplData.cateData.title%}" scope="global"%}
  <title>{%$title%}</title>
  <link rel="stylesheet" href="{%$path%}/category/category.css">
</head>
<body>

{%include file="./common/pageHeader.tpl"%}

<div class="wrap">
<div class="container">
	<section class='category-list'>
    {%foreach $category item=cate%}
  		<div class="category-item">
  			<a href="{%$cate.link%}" target="_self">
          <div class="item-top">{%$cate.name%}<i class='btn-enter'></i></div>
        </a>
  			<div class="item-down">
          <a class="catesummary">
           {%$cate.summary%}
          </a>
          <span class="ellipsis">...</span>
  			</div>
  		</div>
    {%/foreach%}
	</section>
</div>
</div>
{%include file="./common/footer.tpl"%}
<script src="{%$path%}/category/category.js"></script>
</body>
</html>
