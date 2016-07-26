$(function() {
	$('a').on('click', function(e) {
		$currentAttr = $(this).attr('data');
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('#tabs ' + $currentAttr).fadeIn(1000).siblings('div').removeClass('active').hide();
	});

var $title;


	$('.inp').hover(
		function(){
			$title = $(this).attr('title');
			console.log($title);
			$(this).removeAttr('title').siblings('.help').show(100).html($title);
		}, 	
		function(){
			$(this).siblings('.help').html('')
			$(this).attr('title', $title);
		});
	$('button').on('click', function(e) {
			e.preventDefault();
			for(var i=1; i < 4; i++){
				var title = $('.string'+i).find('.inp').attr('title');
				console.log(title);
				var span = $('.string'+i).find('.help').show(100).html(title).delay(2000).fadeOut(300);
				console.log(span);
			}
	})
});
