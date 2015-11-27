{%* 在这里设置一个变量，方便进行版本的各级路径管理 *%}
{%assign var="path" value=$tplData.path scope="global"%}
{%assign var="name" value=$tplData.hospiData.name scope="global"%}
{* {%assign var="parts" value=$tplData.hospiData["parts"] scope="global"%} *}
{%assign var="parts" value=$tplData.parts scope="global"%}

{%assign var="bannerImg" value=$tplData.hospiData["bannerImg"] scope="global"%}
{%assign var="navItem" value=$tplData.hospiData["navItem"] scope="global"%}
{%assign var="category" value=$tplData.hospiData["category"] scope="global"%}
{%assign var="skin" value=$tplData.hospiData.style scope="global"%}
