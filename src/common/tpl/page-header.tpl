{%if $skin.header eq "#FFFFFF"%}
<header style="background:white; color:black;">
{%else%}
<header style="background:{%$skin.header%}">
{%/if%}
    <div class="header-l" onclick="history.back()"><i class='btn-back'></i></div>
    <div class="header-m">{%$title%}</div>
    <div class="header-r"></div>
</header>
