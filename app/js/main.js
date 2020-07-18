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

	$('.featured__slider').slick({		
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-arrow click-prev"><img src="./images/icons/chevron-left.png" alt="prev arrow"></button>',
		nextArrow: '<button type="button" class="slick-arrow click-next"><img src="./images/icons/chevron-right.png" alt="next arrow"></img></button>',
	 });


	 $(".js-range-slider").ionRangeSlider({
		type: "double",        
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
  });
  
var mixer = mixitup('.products__inner-box');
});


					