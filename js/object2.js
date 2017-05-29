/*
var greet='Hello!';
var greet='Hola!';
console.log(greet);
*/
var english={};
var spanish={};
/* //error
english.error.greet="Hello!";
spanish.greet="Hola!";
console.log(english);
*/
english.error={};
english.error.greet="Hello!";
spanish.greet="Hola!";
console.log(english);

var english={
	greetings:{
		basic:'Hello1'
	}
};
var spanish={};
spanish.greet="Hola!";
console.log(english);