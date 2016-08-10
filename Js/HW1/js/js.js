// function pow(a, b){

// 	var result;

// 	if (a === '' || b === '') {
// 		result = 'You can not enter empty string!';
// 	} else if (b[0] === '-') {
// 		result = 'You can not use negative exponent!';
// 	} else { 
// 		result = Math.pow(a, b);
// 	} 
	
// 	alert('Result is: ' + result);
// }

// var a = prompt('Enter the number');
// var b;

// if (a === null) {
// 	alert('Cancelled');
// } else {
//  b = prompt('Enter the exponent');
//  pow(a, b);
// };

var names = [];
var listIsFilled = false;

for(var i = 0; i < 5; i++) {
	var enter = prompt('Enter name');
	names.push(enter);
	if (enter === null) {
		alert('Cancelled');
		listIsFilled = false;
		break;
	} else {
		listIsFilled = true;
	}
}

if (listIsFilled) {
	var userName = prompt('Enter user name');
	var matchesFound = false;
	var emptyString = false;

	if(userName == ''){
		alert('You must enter name')
	} else if (userName == null){

	} else {
		
	for(var i = 0; i < names.length; i++){

		if (names[i] == userName){
			matchesFound = true;
			break;
		} else if (userName == null) {
			matchesFound = null;
			break;
		} else if (names[i] == ''){
			emptyString = true;
		}else {
			matchesFound = false
		};
	}
	

	if (!emptyString) {
	
		if(matchesFound){
				alert('Congratulations ' + userName + ' you entered');		
		} else if (matchesFound == null) {
				alert('You not entered user name');		
		} else {
				alert('You entered wrong name');
		}
		
	} else {
		alert('You entered empty string')
	}

	}
} 



















