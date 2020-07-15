$(function () {

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true,
	});

	$('.products-slider__inner').slick({
		// dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-arrow click-prev"><img src="./images/icons/chevron-left.png" alt="prev arrow"></button>',
		nextArrow: '<button type="button" class="slick-arrow click-next"><img src="./images/icons/chevron-right.png" alt="next arrow"></img></button>',
	});

	var mixer = mixitup('.products__inner-box');

	$('.featured__slider').slick({		
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-arrow click-prev"><img src="./images/icons/chevron-left.png" alt="prev arrow"></button>',
		nextArrow: '<button type="button" class="slick-arrow click-next"><img src="./images/icons/chevron-right.png" alt="next arrow"></img></button>',
	 });



});


					