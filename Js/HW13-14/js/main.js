'use strict';

var data = [
		{
			question: 'Вопрос №1',
			answers: ['Вариант ответа№1', 'Вариант ответа№2', 'Вариант ответа№3'],
			correctAnswer: 'answ1',
			name: 'question1',
			id: ["answ1", "answ2", "answ3"]
		},
		{
			question: 'Вопрос №2',
			answers: ['Вариант ответа№4', 'Вариант ответа№5', 'Вариант ответа№6'],
			correctAnswer: 'answ5',
			name: 'question2',
			id: ["answ4", "answ5", "answ6"]
		},
		{
			question: 'Вопрос №3',
			answers: ['Вариант ответа№7', 'Вариант ответа№8', 'Вариант ответа№9'],
			correctAnswer: 'answ8',
			name: 'question3',
			id: ["answ7", "answ8", "answ9"]
		}
]

localStorage.setItem('data', JSON.stringify(data));

var storage = JSON.parse(localStorage.getItem('data'));
var temp = $('#temp').html();
var template = tmpl(temp, storage);

$('body').append(template);


var answer,
	  score = 0,
		modal = $('#resultModal'),
		head = $('#myModalLabel');

$('#checkBtn').click(function() {
	
	var userAnswer = $('input:checked').map(function() {
		return $(this).attr('id');
	});
console.log(userAnswer);
	for(var i = 0; i < userAnswer.length; i++) {
		if(userAnswer[i] != storage[i].correctAnswer) {
			answer = '<p class="bg-danger"> Ответ на ' + storage[i].question + ' - неправильный! Попробуйте еще раз </p>';	
			console.log(answer);
		} else {
			answer = '<p class="bg-success"> Ответ на ' + storage[i].question + ' - правильный! </p>';
			score++;
		}

		modal.append(answer);
	}

	if(score < 3) {
		head.html('<p> Тест не сдан! </p>');
	} else {
		head.html('<p>Поздравляем вы успешно сдали тест!</p>');
	}

	$('#retryBtn').click(function() {
		modal.html('');
		$('input:checked').removeAttr('checked');
		head.html('');
		score = 0;
	});

	$('button.close').click(function() {
		modal.html('');
		$('input:checked').removeAttr('checked');
		head.html('');
		score = 0;
	});

	$(document).on('keyup', function(e) {
		if(e.keyCode === 27) {
			$('body').removeClass('modal-open');
			modal.html('');
			$('input:checked').removeAttr('checked');
			head.html('');
			score = 0;
		}
	});

});





