$(function(){
	
	var menu_btn = $('.header__nav--menu');
	var menu_list = $('.header__nav--li');
	var img = $('.item_img');
	var img_box = $('.item_imges');
	
	
	
	menu_btn.attr('check', '0');
	
	menu_btn.on('click', function(){
		if(menu_btn.attr('check') == '0'){
			event.stopPropagation();
			menu_list.slideDown(500);
			menu_btn.attr('check', '1');
		}
		else {
			menu_list.slideUp(500);
			menu_btn.attr('check', '0');
		}
		
	});
	$(window).on('scroll', function(){
		if(menu_btn.attr('check') == '1') {
			menu_list.slideUp(500);
			menu_btn.attr('check', '0');
		}
	});
	
	var body = $('body')
	
	body.on('click', function(){
		if(menu_btn.attr('check') == '1') {
			menu_list.slideUp(500);
			menu_btn.attr('check', '0');
		}
	});
	
	var flex = $(".flex_item");
	
	img.attr('check', '0');
	var $width = $(window).width();
	
	
	img.on('click', function() {
		var $width = $(window).width();
		if ((img.attr('check') == 0) && ($width >= '840')){
			img.attr('check', '1');
			this.img = this;
			flex.css({
				"position": "static"
			});
			$(this).css({
				"position": "fixed",
				"width": "800px",
				"zIndex": "1001",
				"top": "50%",
				"left": "50%",
				"margin": "-300px 0 0 -400px"
			});
			$(this).parent(img).append('<div class = "blok"></div>');
		}
		else if((img.attr('check') == 0) && ($width >= '650')){
			img.attr('check', '1');
			this.img = this;
			flex.css({
				"position": "static"
			});
			$(this).css({
				"position": "fixed",
				"width": "600px",
				"zIndex": "1001",
				"top": "50%",
				"left": "50%",
				"margin": "-250px 0 0 -300px"
			});
			$(this).parent(img).append('<div class = "blok"></div>');
		}
		else if((img.attr('check') == 0) && ($width >= '550')){
			img.attr('check', '1');
			this.img = this;
			flex.css({
				"position": "static"
			});
			$(this).css({
				"position": "fixed",
				"width": "500px",
				"zIndex": "1001",
				"top": "50%",
				"left": "50%",
				"margin": "-200px 0 0 -250px"
			});
			$(this).parent(img).append('<div class = "blok"></div>');
		}
		
		else {
			img.attr('check', '0');
			this.img = this;
			flex.css({
				"position": "relative"
			});
			$(this).css({
				"position": "static",
				"width": "100%",
				"zIndex": "auto",
				"top": "auto",
				"left": "auto",
				"margin": "auto"
			});
			$('.blok').remove();
		}
		
	});
	
	
	
	
});