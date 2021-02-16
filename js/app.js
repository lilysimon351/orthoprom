$(window).scroll(function(){
  if ($(window).scrollTop() >= $('.header').offset().top) {
      $('.header').addClass('small-header');
  }
  if($(window).scrollTop() == 0){
      $('.header').removeClass('small-header');
  }
});
      
   
$(document).ready( function() {
	let count = 0;
	$('#header-btn').on('click', openPopupForm)
	$('.consultation__btn').on('click', openPopupForm)
	$('.about-spec-sign').on('click', openPopupForm)
	
	$('.mob-menu-btn').on('click', function(e){
		menuItemClicked(e, '.navbar')
	})
	$('.mob-address').on('click', function(e){
		menuItemClicked(e, '.header__address, .timeline ')
	})
	$('.mob-appointment').on('click', function(e){
		menuItemClicked(e, '.mob-subscribe-form')
	})
	$('.mob-phone').on('click', function(e){
		menuItemClicked(e, '.header__phones')
	})
	$(document).on('click', function(e) {
		let isClickInside = $.contains(document.getElementsByClassName('header')[0], e.target );
		if (!isClickInside) {
			menuItemClicked(e, '')
		}
	});
	$('.mob-subscribe-form').on('click', function(e){
		mobPopupClose(e, this)
	})
	$('.mob-subscribe-form .popup-close-btn').on('click', function(e){
		mobPopupClose(e, this)
	})
	 
	var popup = $('.popup-sign-up');
	function openPopupForm() {
		popup.toggle("d-none")
	} 
	let closeBtn = $('.popup-sign-up .popup-close-btn')
	closeBtn.on('click', function(e){
		popupCloseOutClick(e,this)
	})
	popup.on('click', function(e){
		popupCloseOutClick(e,this)
	})
	function popupCloseOutClick(e, that) {
		let isClickInside = $.contains(that, e.target );
		if (!isClickInside) {
			popup.toggle("d-none")
		}
	}
	function menuItemClicked(e, itemClass) {
		if( $('.d-block')[0] && ($(itemClass)[0] != $('.d-block')[0] ) ) {
			$('.d-block').toggle("")
			$('.d-block').toggleClass('d-block')
		}
		if(itemClass){
			$(itemClass).toggleClass('d-block')
			$(itemClass).toggle("")
		}

	}
	function mobPopupClose(e, that) {
		let isClickInside = $.contains(that, e.target );
		if (!isClickInside) {
			menuItemClicked(e, '')
		}
	}

	let news = $('.news-slider').slick({
		infinite: false,
		speed: 300,
		dots: false,
		arrows: false,
		variableWidth: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: $('.news-pagination'),
		responsive: [
		  {
			breakpoint: 1051,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  centerMode: true,
			  centerPadding: 10
			}
		  }
		]
		  })
	let slidesCount = $('.news__item').length
	let additionalSlider = $('.news-pagination')
	for(let i = 1; i <= slidesCount; i++) {
	  additionalSlider.append('<button>' + i + '</button>');
	}
	let pag = $('.news-pagination').slick({
	  infinite: false,
	  speed: 300,
	  dots: false,
	  variableWidth: true,
	  centerMode: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: $('.news-button-prev'),
	  nextArrow: $('.news-button-next'),
	  asNavFor: $('.news-slider')
	})
	$(".news-pagination .slick-slide").on("click", function() {
	  pag.slick("slickNext");
	});

	let slidesCountForum = $('.forum__item').length
	let additionalSliderForum = $('.forums-pagination')
	for(let i = 1; i <= slidesCountForum; i++) {
	  additionalSliderForum.append('<span>' + i + '</span>');
	}

	let forumsSlide = $('.forums-slider').slick({
		infinite: false,
		speed: 300,
		dots: false,
		arrows: false,
		variableWidth: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: $('.forums-pagination'),
	})
	let forums = $('.forums-pagination').slick({
	  infinite: false,
	  speed: 300,
	  dots: false,
	  centerMode: true, 
	  variableWidth: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: $('.forums-button-prev'),
	  nextArrow: $('.forums-button-next'),
	  asNavFor: $('.forums-slider')
	})
	$(".forums-pagination .slick-slide").on("click", function() {
	  forums.slick("slickNext");
	});
	var certs = $('.certificates-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: $('.certificates-prev-btn'),
		nextArrow: $('.certificates-next-btn'),
		responsive: [
		  {
			breakpoint: 1300,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3
			}
		  },
		  {
			breakpoint: 1050,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 750,
			settings: {
			  centerMode: true,
			  centerPadding: 0,
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  })
	  
	  $('.news__item').each(function(index, item){
		$(this).on('click', function() {
		  $('.news-hovered').removeClass('news-hovered')
		  $('.detailed-open').removeClass('detailed-open')
		  $('.news__item').eq(index).addClass('news-hovered')
		  $('.detailed-item').eq(index).addClass('detailed-open')
		})
	  })
});

