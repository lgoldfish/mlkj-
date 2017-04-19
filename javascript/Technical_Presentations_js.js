$(function(){
	//小导航下拉框
	$('header .header span').click(function(){
	$('header nav').slideToggle();
	
	})

	//时尚智能分析 部分下拉按钮---------------------------------
	$('.jianjie-fenxi span').click(function(){
		$('.jianjie p').slideToggle()
		$('.jianjie-fenxi span i').toggleClass('beautiful')
	})
	//切换轮播图
	$('.picture ul li').click(function(){
		$(this).css({'border':'2px solid #2DB399'}).siblings().css('border','2px solid #fff')
		$('.contain-2 ul').eq($(this).index()).css('right',-100)
		$('.contain-1 img').eq($(this).index()).fadeIn(500).siblings().hide();
		$('.contain-2 ul').eq($(this).index()).show().stop().animate({'right':0},400).siblings().hide();
	})	
	$(function(){
    	$('.picture ul li').eq(0).trigger('click');
    })
	
})

	
