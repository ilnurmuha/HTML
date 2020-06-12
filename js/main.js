$(function(){

	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false, //отключает бесконечную прокуртку
	});
	
	$('select').styler();

	

});



//$(funtion(){});  - надо указать чтобы сначала загрузилась html файлы только потом javascript фалы
