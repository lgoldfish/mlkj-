$(function(){
	//小导航下拉框
	$('header .header span').click(function(){
		$('header nav').slideToggle();
	})
	 //滚动鼠标导航栏出现背景色
    $(window).scroll(function(){
     	if($(window).scrollTop()>20){
    	$('header').css('background','#2a2b2b')  	
    }else {
    	$('header').css('background','transparent')
    }
    })
    //返回顶部的动画特效
    $("#topcontrol").click(function() {
   $('html body').animate({scrollTop: 0 }, 700)
  })

    //玛隆团队 加载时动画效果
    $('.mlteam img').animate({'opacity':1},2000)
    $('.mlteam p').animate({'opacity':1},3000)
})

//码隆TV 当屏幕小于1200px时执行
var video=$('.mltv .tv li video')
$('.mltv .button li').click(function(){
	$('.mltv .tv li').eq($(this).index()).show(500).siblings().hide(500);
	$(this).css('background','#c63885').siblings().css('background','#ccc');
	for (var i=0;i<video.length;i++){
		video[i].pause();
	}
	
})

$('.mltv .tv li div button').click(function(){
	video[$(this).parent().parent().index()].play()
	$(this).parent().siblings('video').attr({'controls':'controls'})
	$(this).hide();
	$(this).parent().parent().siblings().children('div').children('button').show()
})
//码隆TV 当屏幕大于1200px时执行
var videos=$('.mltv-2 .tv li video')
$('.mltv-2 .tv li').mouseenter(function(){
	$(this).animate({'width':706,'height':397},300).prev().animate({'width':180,'height':328},300).prev().animate({'width':180,'height':280},300)
	$(this).animate({'width':706,'height':397},300).next().animate({'width':180,'height':328},300).next().animate({'width':180,'height':280},300)
	$(this).children('video').css('opacity',0.6)
	$(this).siblings().find('video').css('opacity',0)
	$(this).find('video').removeAttr('controls')
	$(this).find('div').find('button').click(function(){
		videos[$(this).parent().parent().index()].play()
		videos[$(this).parent().parent().siblings().index()].pause()
		$(this).hide()
		$(this).parent().parent().siblings().children('div').children('button').show()
		$(this).parent().siblings('video').attr({'controls':'controls'}).css('opacity',1)
	})
}).mouseleave(function(){
		$(this).find('div').find('button').show()
		videos[$(this).index()].pause()
	})
//马隆照片墙
$('.pictures figure').hover(function(){
	$(this).children('img').eq(0).hide().siblings('img').fadeIn(200);
	$(this).children('p').css('opacity','1')
},function(){
	$(this).children('img').eq(1).hide().siblings('img').show();
	$(this).children('p').css('opacity','0.48')
})
