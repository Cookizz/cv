//首页title效果
$('.title').stop().fadeIn("normal").animate({
	"top" : ($(window).height() - $('.title').outerHeight())/2
},500); 