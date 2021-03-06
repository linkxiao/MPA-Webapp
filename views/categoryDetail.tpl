<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="format-detection" content="telephone=no, email=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  {%include file="./common/conf.tpl"%}
  {%assign var="title" value="{%$categoryName%}" scope="global"%}
  <title>{%$title%}</title>
  <link rel="stylesheet" href="{%$path%}/category/category.css">
</head>
<body>


{%include file="./common/pageHeader.tpl"%}

<div class="wrap">
  <div class="container">
  	<article>
        {%$categoryDetail|unescape:"html"%}
  	</article>
  </div>
</div>

{%include file="./common/footer.tpl"%}
<script src="{%$path%}/category/categoryDetail.js"></script>
</body>
</html>
