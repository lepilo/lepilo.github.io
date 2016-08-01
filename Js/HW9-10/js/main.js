$(function() {
	
	$('.jcarousel').jcarousel();

	$('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

    $("#webmenu").msDropDown();

    $('.checkbox-jq input').iCheck({
    checkboxClass: 'icheckbox_square-purple',
    radioClass: 'iradio_square-purple',
    increaseArea: '20%' // optional
  	});

  	$('.menu__item').hover(function() {
  		$(this).find('.submenu').stop(true, true).fadeIn(300).animate({
  			background: "#ddd"
  		}, 300);
  	},
  	function() {
  		$(this).find('.submenu').fadeOut(400).animate({
  			backgroundColor: "#000",
  		}, 300);
  	})

  	$('.submenu__item').hover(function() {
  		$(this).find('.subsub').stop(true, true).slideDown(300).animate({
  			backgroundColor: "#000",
  		},300)
  	},function() {
  		$(this).find('.subsub').stop(true, true).slideUp(400).animate({
  			background: ""
  		},300)
  	})



})