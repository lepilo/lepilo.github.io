$(function() {
	$('a').on('click', function(e) {
		$currentAttr = $(this).attr('data');
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('#tabs ' + $currentAttr).fadeIn(1000).siblings('div').removeClass('active').hide();
	});

	$('#button').on('click',function(e) {
		e.preventDefault();
		$('.help').toggleClass('show');
	})
	$('.string').hover(
		function() {
			$(this).find('.help').addClass('show');
		},
		function() {
			$(this).find('.help').removeClass('show');
		});

});


