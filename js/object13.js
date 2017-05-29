//fucnctions are objects CH4-44
//IIFE
//function statement
function greet(name){
	console.log('Hello '+name);
}
greet('John');
//using afunction expreession
var greetFunc=function(name){
	console.log('Hello '+name);
};
greetFunc('John');
//using an Immediately Invoked Function Expression (IIFE)
var greeting=function(name){
	console.log('Hello '+name);
}();

var greeting1=function(name){
	return 'Hello '+name;
}('Gary');
//
console.log(greeting1); //立刻執行
//console.log(greeting1());  //出現錯

{name:'joht'};
(function(name){  //需要function名字 會出現錯，這是陳訴具 需要名字
	return 'Hello '+name;
}); //加()，函數存在但不做任何事
/*
function(name){  //需要function名字 會出現錯，這是陳訴具 需要名字
	return 'Hello '+name;
}
*/
var firstname='Gary1';
//Inside IIFE
(function(name){  //需要function名字 會出現錯，這是陳訴具 需要名字
	var greeting='Hello';
	console.log(greeting+' '+name);
}(firstname)); //放兩個(()) //IIFE
var firstname='Gary2';
(function(name){  //需要function名字 會出現錯，這是陳訴具 需要名字
	var greeting='Hello';
	console.log(greeting+' '+name);
})(firstname); //放兩個(()) //IIFE

3;
"I am String";

