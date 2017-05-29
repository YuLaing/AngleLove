//fucnctions are objects CH4-35

var a;
if(a===3){
}
greet();
//function陳述句不會執行
function greet(){
	console.log('hi');
}
greet();

anonymousGreet();

//???錯誤
var anonymousGreet = function(){
	console.log("hi");
}

anonymousGreet();

function log(a){
	console.log(a);
}
log(3);

log('hello');
log({greeting:'hi'});
log(function(){
	console.log('hiii');
});
/*
function log(a){
	a();
}
*/
