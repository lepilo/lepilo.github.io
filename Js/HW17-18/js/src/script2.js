
var Human = {
	constructor: function(name, age, gender, height) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.height = height;
		return this;
	}
}

var Worker = Object.create(Human);
Worker.constructor = function(name, age, gender, height, workPlace, salary) {
	Human.constructor.call(this, arguments);
	this.workPlace = workPlace;
	this.salary = salary;
	return this;
}
Worker.work = function() {
	console.log('Work');
}
Worker.work();

var Student = Object.create(Human);
Student.constructor = function(name, age, gender, height, workPlace, salary, studyPlace, scholarship) {
	Human.constructor.call(this, arguments);
	this.studyPlace = studyPlace;
	this.scholarship = scholarship;
	return this;
}	
Student.watchSerial = function() {
	console.log('Watch');
}

Student.watchSerial()