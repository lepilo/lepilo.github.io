function pow(a, b){
	var result = a;

	for(var i = 1; i < b; i++){
		result *= a;
	}
		return result;
}

var a = prompt('Enter the number');
var b = prompt('Enter the exponent');

if(b <= 1){
	alert('Exponent ' + b + 'not supported, enter integer power greater than 1');
}else{
	alert(pow(a, b));
}

var names = [];

for(var i = 0; i < 5; i++) {
	names.push(prompt('Enter name'));
}

var userName = prompt('Enter user name');

for(var i = 0; i < names.length; i++){
	var namesIn = names[i];
	if(namesIn == userName){
		alert('Congratulations ' + userName + ' you entered');
		break
	}
	if(namesIn == false){
		alert('Error');
	}
	
}


















