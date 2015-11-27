<?php
date_default_timezone_set("PRC");
ini_set('error_reporting', E_ALL & ~E_NOTICE);
ini_set('display_errors', 'On');

//define('viewsDir', '../release/1448025214277/assets');//生产环境
//define('viewsDir', '../release/md5/assets');//生产环境(md5)
define('viewsDir', '../src');//开发环境(dev)

require('./libs/Smarty.class.php');
$smarty = new Smarty();

//$smarty->debugging = true;
//$smarty->caching = false;
#$smarty->cache_lifetime = 120;

$smarty->left_delimiter = "{%";
$smarty->right_delimiter = "%}";
$smarty->template_dir = viewsDir;


// $hospiData = json_decode(
//     file_get_contents('./data/hospital.json'),
//     true
// );

//科室模块
$categoryData = json_decode(
    file_get_contents('./data/category.json'),
    true
);
//文章列表模块:备用
$articleData = json_decode(
    file_get_contents('./data/article.json'),
    true
);

   $smarty->assign('tplData', array(
       //"path"=>"/release/1448025214277/assets",//生产环境(md5)
       //"path"=>"/release/md5/assets",
       "path"=>"/src",//开发环境(dev)
       'env'=>array(
       ),
       "name"=>"中日友好医院",
       "level"=>"三甲",
       "insurance"=>"1",
       "type"=>"综合医院",
       "tel"=>"0755-83923333(本部)",
       'hospitalId'=>38751,
       'address'=>'北京市海淀区上地十街',
       "hospitalInfo"=>"<p>欢迎来到中日友好医院！您的健康是我们最大的心愿！ </p><p>中日友好医院是一家中西兼备的大型国家级综合性医院，是中华人民共和国国家卫生和计划生育委员会直属医院。 医院占地面积5.9万平方米，编制病床800张，实际开放病床1200张。2015年新外科大楼投入使用后，医院总建筑面积将达22.3万平方米，病床总数达1600-1800张。医院总资产达11.3亿元，拥有总价值超7.8亿元的现代化医疗设备。</p>",
       "banner"=>"/src/common/img/banner1.jpg",
       "style"=>array(
         "header"=>"#1B9BFF",
         "footer"=>"#EEEEEE",
       ),
       "welcome" => "欢迎来到中日友好医院",
       "parts"=>array(
         0     => array('partName' => '本部', 'partAvatar'=>'/src/common/img/local.png', 'partAddr'=>'青岛市市南区江苏路16号', 'partLink'=>'home.php'),
         1     => array('partName' => '东区', 'partAvatar'=>'/src/common/img/east.png',  'partAddr'=>'青岛市崂山区海尔路59号', 'partLink'=>'home.php'),
         2     => array('partName' => '黄岛院区', 'partAvatar'=>'/src/common/img/hd.png', 'partAddr'=>'青岛市黄岛开发区五台山路1667号','link'=>'home.php'),
       ),
       "sliderImg"=>array(
         0     => array('img' => '/src/common/img/banner1.jpg', 'link'=>'#/item/item~1'),
         1     => array('img' => '/src/common/img/banner2.jpg', 'link'=>'#/item/item~2'),
         2     => array('img' => '/src/common/img/banner3.jpg', 'link'=>'#/other/other~3'),
       ),
       "navItem"=>array(
         0     => array('name' => '预约挂号', 'avatar'=>'/src/common/img/icon/icon-order.png', 'link'=>'http://yi.baidu.com'),
         1     => array('name' => '医院简介', 'avatar'=>'/src/common/img/icon/icon-hospital.png', 'link'=>'introduce.php'),
         2     => array('name' => '科室简介', 'avatar'=>'/src/common/img/icon/icon-depart.png', 'link'=>'category.php'),
         3     => array('name' => '专家简介', 'avatar'=>'/src/common/img/icon/icon-expert.png', 'link'=>'http://yi.baidu.com'),
         4     => array('name' => '就诊人管理', 'avatar'=>'/src/common/img/icon/icon-admin.png', 'link'=>'introduce.php'),
         5     => array('name' => '就医指南', 'avatar'=>'/src/common/img/icon/icon-guide.png', 'link'=>'introduce.php'),
         6     => array('name' => '来院导航', 'avatar'=>'/src/common/img/icon/icon-map.png', 'link'=>'introduce.php'),
         7     => array('name' => '在线支付', 'avatar'=>'/src/common/img/icon/icon-pay.png', 'link'=>'introduce.php'),
         8     => array('name' => '排队候诊', 'avatar'=>'/src/common/img/icon/icon-waitin.png', 'link'=>'introduce.php')
       ),
       "cateData" => $categoryData,
       "articleData" => $articleData,
  ));
  //$smarty->assign('tplData', $tplData);
