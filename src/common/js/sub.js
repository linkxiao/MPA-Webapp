
define(function(){
  return {
    subStr:function(title,curSize){
        var subTitle;
        if(title.length>curSize){
            subTitle=title.substring(0,curSize)+"..."
        }else{
            subTitle=title;
        }
        return subTitle;
    }
  }
})
