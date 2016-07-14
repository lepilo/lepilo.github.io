var page = {
	header: 'Тест по программированию',
	questions: ['Вопрос№1', 'Вопрос№2', 'Вопрос№3'],
	answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 
						'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
						'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	submit: 'Проверить мои результаты'
}

console.log(page);

var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

console.log(wrapper);

var header = document.createElement('h1');
header.classList.add('title');
header.innerHTML = page.header;
wrapper.appendChild(header);


var ol = document.createElement('ol');
wrapper.appendChild(ol);

var k = 0;

for(var i = 0; i < page.questions.length; i++) {
	
	var olLi = document.createElement('li');
	ol.appendChild(olLi);
	olLi.innerHTML = page.questions[i];

	var ul = document.createElement('ul');
	olLi.appendChild(ul);

		for(var j = 0; j < 3; j++){
			var ulLi = document.createElement('li');
			ulLi.classList.add('answer__item')
			ul.appendChild(ulLi);

			var checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.id = k + 1;
			ulLi.appendChild(checkbox);

			var label = document.createElement('label');
			label.setAttribute('for', k + 1);
			ulLi.appendChild(label);
			label.innerHTML = page.answers[k];

			k++;
		}
}

var button = document.createElement('button');
button.innerHTML = page.submit;
wrapper.appendChild(button);









