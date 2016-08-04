$(function() {

	var leftArrow = $('.left__arrow');
	var rightArrow = $('.right__arrow');
	var carousel = $('.carousel');
	
	var pixelOffset = 225;
	var currentLeftValue = 0;
	var elementsCount = carousel.find('li').length;
	var minOffset = -( (elementsCount - 4) * pixelOffset );
	var maxOffset = 0;


	leftArrow.click(function() {
		if (currentLeftValue != maxOffset) {		
		currentLeftValue += 225;
		carousel.animate({
			left: currentLeftValue + "px"
		}, 500);
		}
	});

	rightArrow.click(function() {
		if (currentLeftValue != minOffset) {
		currentLeftValue -= 225;
		carousel.animate({
			left: currentLeftValue + "px"
		}, 500);
		}
	});

 	var temp = $('#temp').html();

 	

	var data = {
		name: 'Рощин Денис Алексеевич',
		reason: ['Люблю творить и созидать', 'Постоянное обучение', 'Достойная зп'],
		contact: 'Мои контакты: +380934982818',
		facebook: 'https://www.facebook.com/profile.php?id=100010085563125',
		credo: 'Never give up'
	};

	var content = tmpl(temp, data);
	console.log(content);

	$('body').append(content);
});