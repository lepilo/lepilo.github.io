var startPauseBtn = document.getElementById('startPause');
console.log(startPause);
startPauseBtn.addEventListener('click', startPause);

var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

var time = 0;

var running = 0;

function startPause(){
	if(running === 0){
		running = 1;
		increment();
		document.getElementById('startPause').innerHTML = 'Pause';
	}
	else {
		running = 0;
		document.getElementById('startPause').innerHTML = 'Resume';
	}
}

function clear(){
	running = 0;
	time = 0;
	document.getElementById('startPause').innerHTML = 'Start';
	document.getElementById('clock').innerHTML = '00:00:00<span class="under">0</span>';
}

function increment(){
	var run = setInterval(function(){
		if (running === 1) {
			time++;

			var hours = Math.floor(time/100/60/60 % 24);
			var min = Math.floor(time/100/60 % 60);
			var sec = Math.floor(time/100 % 60);
			var tenth = time % 100;

			if (hours < 10) {
				hours = '0' + hours;
			}

			if (min < 10) {
				min = '0' + min;
			}

			if (sec < 10) {
				sec = '0' + sec;
			}

			if (tenth < 10) {
				tenth = '0' + tenth;
			}

		document.getElementById('clock').innerHTML = (hours + ':' + min + ':' + sec + '<span class="under">' + tenth + '</span>');
		} else {
			clearInterval(run);
		}
	},10);
}







