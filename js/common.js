$(function() {

/*Слайдер*/
	$('.directions-slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	infinite: true,
	dots: true,
	autoplay: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
/*Слайдер конец*/

			
/*Слайдер в карточке товара*/
	$('.object_page-slick').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	infinite: true,
	dots: true,
	autoplay: true,
	nextArrow: "<div class='next_arrow'></div>",
	prevArrow: "<div class='prev_arrow'></div>",
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
/*Слайдер в карточке товара конец*/


/*Мобильное меню*/
$('.top-nav_menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('top-nav_menu-btn_active');
	// $('.menu_slide').slideToggle("slow", "linear");
	$('.top-nav_menu-slide').animate({height: 'toggle'}, 400);
 

});
/*Мобильное меню конец*/


/*Категории*/
$('.left-sidebar_btn').on('click', function () {
	$('.left-sidebar_menu').animate({height: 'toggle'}, 400);
});

/*Категории конец*/

/*Equal Heights выравниевание блоков по высоте*/
$('.org_item').equalHeights();
$('.object_card-text').equalHeights();
$('.object_card-title').equalHeights();
/*Equal Heights выравниевание блоков по высоте*/

/*Модальные окна*/

$('[data-target="modal"]').on('click', function(event) {
	event.preventDefault();
	$('#modal_form').fadeIn(400);
});
$('.modal_close').on('click', function(event) {
	$('#modal_form').fadeOut(400);
});
$(document).keydown(function(e) {
	if(e.keyCode === 27) {
		$('#modal_form').fadeOut(400);
		return false;
	}
});

/*Модальные окна конец*/


/*Калькулятор*/

let elem = document.querySelector('.calc_range'); //инициализация библеотеки powerrange
let init =  new  Powerange(elem, {min :  100000 , max :  3000000 , start :  100000 , step :  100000, hideRange : true });

//объявление переменных
let displayChange = $('.calc_summ-invest_num b'),
		totalSum = $('.calc_summ-year_num'),
		monthSum = $('.calc_summ-month_num'),
		month = 6,
		persent = 0.2,
		range = $('.calc_range'),
		money = rounding(+range.val()),
		radio = $('input[name="programm"]'),
		total = +persent/12*month*money+money;
		totalMonth = parseInt(persent/12*money);

function rounding (num) { //функция для округления из input range
	return Math.round(num/100000)*100000
};

displayChange.text(money.toLocaleString('ru'));//стандартное состояние поля для range
totalSum.text(total.toLocaleString('ru')); //стандартное состояние для итоговой суммы
$('.calc_summ-year_month').text(month.toLocaleString('ru')); //стандартное состояние месяцев
monthSum.text(totalMonth.toLocaleString('ru'));//стандартное состояние прибыль в месяц



range.on('change', function() { // при изминении input range изменения поля для него и пересчет общей суммы
	money = rounding(+range.val()),  
	displayChange.text(money.toLocaleString('ru'));
	month = $('input[name="programm"]:checked').attr('data-month');
	persent = $('input[name="programm"]:checked').attr('data-persent')
	total = +persent/12*month*money+money;
	totalSum.text(total.toLocaleString('ru'));
	totalMonth = parseInt(persent/12*money);
	monthSum.text(totalMonth.toLocaleString('ru'));

});

radio.on('change', function() { //при изменении input radio пересчет суммы
	month = $(this).attr('data-month');
	persent = $(this).attr('data-persent');
	total = +persent/12*month*money+money;
	totalSum.text(total.toLocaleString('ru'));
	$('.calc_summ-year_month').text(month);
	totalMonth = parseInt(persent/12*money);
	monthSum.text(totalMonth.toLocaleString('ru'));

});

/*Калькулятор конец*/

})


// document.body.onload = function () {
// 	setTimeout(function() {
// 		let preloder = document.getElementById('page_preloder');
// 		if(!preloder.classList.contains('done')){
// 			preloder.classList.add('done');	
// 		};
		
// 	}, 1000);
// };