
$(function(){
  var curX=null;
  var lastX=null;
	//小导航下拉框
	$('header .header span').click(function(){
		$('header nav').slideToggle();
	})
  //二级导航
  $('header nav ul li ').eq(2).click(function(){
    $(this).find('div').toggle()
  })
	//banner图动画
	$('.banner .img1').animate({'top':'50%','opacity':1},1000)
	$('.banner div img').animate({'top':'29%','opacity':1},1000)	
  //码隆科技涮新淡入
  $('.mlkjzs .row li').hide()
  $('.mlkjzs .row li').eq(0).show(100)
  $('.mlkjzs .row li').eq(1).show(300)
  $('.mlkjzs .row li').eq(2).show(500)

    //应用领域部分，当屏幕宽度小于1200时的轮播图,既可以点击圆点进行轮播，又可以拖拉图片进行轮播。
  
   $('.yyly ul li').click(function(){
    $('.yyly .yyly-lbt-01 img').eq($(this).index()).css('display','block').siblings().css('display','none');
    $('.yyly p').eq($(this).index()).css('display','block').siblings('p').css('display','none');
    $('.yyly .box1200 ul li').eq($(this).index()).css({'background':'#6f76ea','opacity':1}).siblings('li').css({'background':'#000','opacity':0.2})
   })
   $('.yyly .yyly-lbt-01 img').each(function(){
           
      $(this).mousedown(function(event){
         lastX=event.clientX;
     }).mouseup(function(event){
         curX=event.clientX;
       if (curX>lastX){
        $(this).next().fadeIn(500).siblings().css('display','none')
        $('.yyly p').eq($(this).index()).next().css('display','block').siblings('p').css('display','none');
        $('.yyly .box1200 ul li').eq($(this).index()).next().css({'background':'#6f76ea','opacity':1}).siblings('li').css({'background':'#000','opacity':0.2})
      }else if (curX<lastX){
        $(this).prev().fadeIn(500).siblings().css('display','none')
        $('.yyly p').eq($(this).index()).prev().css('display','block').siblings('p').css('display','none');
        $('.yyly .box1200 ul li').eq($(this).index()).prev().css({'background':'#6f76ea','opacity':1}).siblings('li').css({'background':'#000','opacity':0.2})
      }else {
        $(this).css('display','block').siblings().css('display','none')
        $('.yyly p').eq($(this).index()).css('display','block').siblings('p').css('display','none');
        $('.yyly .box1200 ul li').eq($(this).index()).next().css({'background':'#6f76ea','opacity':1}).siblings('li').css({'background':'#000','opacity':0.2})  
      }

     });
   
   })
})

   //滚动鼠标导航栏出现背景色
   $(window).load(function(){
    
   })
   $(window).resize(function(){
       if($(window).width()>=992){
         $(window).scroll(function(){
          if($(window).scrollTop()>20){
         $('header').css('background','#2a2b2b')    
      }else {
       $('header').css('background','transparent')
    }
    })
    }
   })
     $(window).resize();
   //应用领域部分，当屏幕大于1200时的手风琴轮播图
   $(function(){
    	$('.box div').eq(4).trigger('click')
    })
    $('.box div').click(function(){
    	$(this).find('span').css('display','none')
    	$(this).find('img').css('display','block')
    	$(this).animate({'width':688,'height':455},500)
    	$('.box p').eq($(this).index()).css('display','block').siblings('p').css('display','none')
    	var arr=$(this).nextAll('div');
    	arr.each(function(i,ele){
    		i=i+1;
    		$(this).find('span').css('display','block')
    		$(this).find('img').css('display','none')
    		$(this).css({'width':60,'height':455-(i*20)})
    	})
    	var arr2=$(this).prevAll('div');
    	arr2.each(function(i,ele){
    		i=i+1;
    		$(this).find('span').css('display','block')
    		$(this).find('img').css('display','none')
    		$(this).css({'width':60,'height':455-(i*20)})
    	})
    })
    //我们的荣誉板块，当屏幕小于1200时
    // add('#wery01 div .ul2 li').
	  $('#wery01 div .row li div').add('.ul2 li img').click(function(event){
      var e=event||window.event
			if (e.stopPropagation){
				e.stopPropagation()
			}else {
				e.cancelBubble()
			}
	   $('#wery01 div .ul2 li').eq($(this).parent().index()).show().siblings().hide();
	   $(document).click(function(){
	   $('.ul2 li').hide()
		})	
    })

    //我们的荣誉板块，当屏幕大于1200时
  
	$('.ul1 li').each(function(){
		$(this).css('width',$(this).find('img').width())
	})
	$('.content-main .ul1 li, .content-main .ul2 li').click(function(event){
		var e=event||window.event
		if (e.stopPropagation){
			e.stopPropagation()
		}else {
			e.cancelBubble()
		}
		$('.content-main .ul2 li').eq($(this).index()).css('display','block').siblings().css('display','none')
	});
	$(document).click(function(){
		$('.content-main .ul2 li').hide()
	})

	$('.ul1 li').prepend('<div></div>');
	$('.ul1 li').find('img').hover(function(){
		$(this).prev().css({'display':'block','width':$(this).width()})
		$(this).parent().siblings().find('div').css('display','none')
	},function(){
		$('img').prev().css('display','none')})
	setInterval(function(){
		$('.ul1 li:eq(0)').animate({'top':0},1500)
		$('.ul1 li:eq(0)').animate({'top':10},1500)
		$('.ul1 li:eq(1)').animate({'top':10},1500)
		$('.ul1 li:eq(1)').animate({'top':0},1500)
		$('.ul1 li:eq(2)').animate({'top':0},1500)
		$('.ul1 li:eq(2)').animate({'top':10},1500)
		$('.ul1 li:eq(3)').animate({'top':-20},1500)
		$('.ul1 li:eq(3)').animate({'top':-30},1500)
		$('.ul1 li:eq(4)').animate({'top':-50},1500)
		$('.ul1 li:eq(4)').animate({'top':-40},1500)
		$('.ul1 li:eq(5)').animate({'top':-70},1500)
		$('.ul1 li:eq(5)').animate({'top':-60},1500)
		$('.ul1 li:eq(6)').animate({'top':-100},1500)
		$('.ul1 li:eq(6)').animate({'top':-90},1500)
		$('.ul1 li:eq(7)').animate({'top':-80},1500)
		$('.ul1 li:eq(7)').animate({'top':-90},1500)
		$('.ul1 li:eq(8)').animate({'top':-120},1500)
		$('.ul1 li:eq(8)').animate({'top':-130},1500)
		$('.ul1 li:eq(9)').animate({'top':-110},1500)
		$('.ul1 li:eq(9)').animate({'top':-120},1500)
		$('.ul1 li:eq(10)').animate({'top':-140},1500)
		$('.ul1 li:eq(10)').animate({'top':-130},1500)
		$('.ul1 li:eq(11)').animate({'top':-150},1500)
		$('.ul1 li:eq(11)').animate({'top':-140},1500)
	})

//战略支持轮播图效果
$(function(){
	$('.zlzc ul li').mouseenter(function(){
	$(this).append('<div></div>').siblings().find('div').remove();
	$('.zlzc .zlzc-show').eq($(this).index()).css('display','block').siblings('.zlzc-show').css('display','none')
	console.log($(this).append('<div></div>').siblings())
})
})



//返回顶部的动画特效
    

  $("#topcontrol").click(function() {
   $('html body').animate({scrollTop: 0 }, 700)
  })