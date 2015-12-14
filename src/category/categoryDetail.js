/**
 * @file categoryDetail
 * @author xiaojie03
 * @date 2015-11-30 14:52:20
 */
/**
 * resize container height 
 * @return {[type]} [description]
 */
(function () {
	var windowHeight = window.innerHeight - 100;
	console.log(windowHeight);
	if (windowHeight > document.querySelector('.container').clientHeight)
		document.querySelector('.container').style.minHeight = windowHeight + 'px';
})()