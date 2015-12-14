{%if $skin.header eq "#FFFFFF"%}
<header style="background:white; color:#0a7fec;">
<div class="header-l" onclick="history.back()"><i class='btn-back-standard'></i></div>
{%else%}
<header style="background:{%$skin.header%}">
<div class="header-l" onclick="history.back()"><i class='btn-back'></i></div>
{%/if%}
    <div class="header-m">{%$title%}</div>
    <div class="header-r"></div>
</header>
