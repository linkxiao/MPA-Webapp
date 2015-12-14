/**
 * @file introduce
 * @author xiaojie03
 * @date 2015-12-8 18:19:03
 */
/**
 * resize container height 
 * @return {[type]} [description]
 */
(function () {
    var windowHeight = window.innerHeight - 393;
    console.log(windowHeight);
    if (windowHeight > document.querySelector('.hospital-detail').clientHeight)
        document.querySelector('.hospital-detail').style.minHeight = windowHeight + 'px';
})()