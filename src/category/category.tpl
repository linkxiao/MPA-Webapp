<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="format-detection" content="telephone=no, email=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  {%include file="../common/tpl/conf.tpl"%}
  {%assign var="title" value="{%$tplData.cateData.title%}" scope="global"%}
  <title>{%$title%}</title>
  <link rel="stylesheet" href="{%$path%}/category/category.css">
</head>
<body>

{%include file="../common/tpl/page-header.tpl"%}

<div class="wrap">
<div class="container">
	<section class='category-list'>
    {%foreach $category item=cate%}
  		<div class="category-item">
  			<a href="{%$cate.link%}" target="_self">
          <div class="item-top">{%$cate.name%}<i class='btn-enter'></i></div>
        </a>
  			<div class="item-down">
          <a href="{%$cate.link%}" target="_self" class="catesummary">
           {%$cate.summary|truncate:50:'...'%}
          </a>
  			</div>
  		</div>
    {%/foreach%}

		<!-- <div class="category-item">
			<a href="../../mock/categoryDetail.php" target="_blank"><div class="item-top">骨关节外科<i class='btn-enter'></i></div><a>
			<div class="item-down catesummary">在骨关节疾患的诊断和治疗具有丰富经验。在骨关节的床上诊断和治疗、人工关节置换、运动系统肿瘤的诊断，恶性肿瘤的保肢治疗以及骨骼疾患超声诊断...</div>
		</div>
		<div class="category-item">
			<a href="../../mock/categoryDetail.php" target="_blank"><div class="item-top">骨关节外科<i class='btn-enter'></i></div><a>
			<div class="item-down catesummary">在骨关节疾患的诊断和治疗具有丰富经验。在骨关节的床上诊断和治疗、人工关节置换、运动系统肿瘤的诊断，恶性肿瘤的保肢治疗以及骨骼疾患超声诊断...</div>
		</div>

		<div class="category-item">
			<a href="../../mock/categoryDetail.php" target="_blank"><div class="item-top">骨关节外科<i class='btn-enter'></i></div><a>
			<div class="item-down catesummary">在骨关节疾患的诊断和治疗具有丰富经验。在骨关节的床上诊断和治疗、人工关节置换、运动系统肿瘤的诊断，恶性肿瘤的保肢治疗以及骨骼疾患超声诊断...</div>
		</div>
		<div class="category-item">
			<a href="../../mock/categoryDetail.php" target="_blank"><div class="item-top">骨关节外科<i class='btn-enter'></i></div><a>
			<div class="item-down catesummary">在骨关节疾患的诊断和治疗具有丰富经验。在骨关节的床上诊断和治疗、人工关节置换、运动系统肿瘤的诊断，恶性肿瘤的保肢治疗以及骨骼疾患超声诊断...</div>
		</div> -->
	</section>
</div>
</div>
{%include file="../common/tpl/footer.tpl"%}
<script src="{%$path%}/category/category.js"></script>
</body>
</html>
