window.pixabayCallback = function() {
	console.log('its work!');
};

$('#search').keypress(function(event) {
	if(event.which === 13) {
	event.preventDefault();

		search();
	}
});

$('#button').on('click', function(event){
	event.preventDefault();
	search();
});

function search() {
	
	var result = $('#result');
	result.html('');
	var name = $('#search').val();

	if(name.length === 0) {
		return;
	}
	$.ajax({
		url: 'https://pixabay.com/api/',
		data: {
			key: '3170693-c85324769f3c82728a21662a1',
			q: name,
			callback: pixabayCallback()
		},
		method: 'GET',
		dataType: 'jsonp',
		error: function() {
			alert('smth wrong!');
		},
		success: function(data) {
			var hits = data.hits;
			for(var i = 0; i < hits.length; i++) {
				var url = hits[i].webformatURL;
				result.append('<li><img src="' + url + '"></li>');

			};
		}
	});
};