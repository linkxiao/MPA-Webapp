<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="format-detection" content="telephone=no, email=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  {%include file="./common/conf.tpl"%}
  {%assign var="title" value="{%$emptyTitle%}" scope="global"%}
  <title>{%$tite%}</title>
  <link rel="stylesheet" href="{%$path%}/empty/index.css">
</head>
<body>


{%include file="./common/pageHeader.tpl"%}

<div class="wrap">
    <div class="container">
        <div class="empty-content"></div>
        <p>暂无相关内容</p>
    </div>
</div>

</body>
</html>
