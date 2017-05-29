//fucnctions are objects CH4-46
//了解閉包understanding closeures
//function statement
function greet(whattosay){
	return function(name){
		console.log(whattosay + ' ' + name)
	}
}
//greet('hi')('Tony') //Hi Tony
var sayHi=greet('Hi');
sayHi('Bettey');