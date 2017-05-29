//fucnctions are objects CH4-39
//Object Function this 區別
//arguments:參數

function greet(firstname,lastname,language='cccc',...other){
	//空函數greet()不受language='cccc'影響
	language=language||'Chinese';
	if(arguments.length===0){
		console.log('Missing paramenters!');
		console.log('------------');
		return;
	}
	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
	//argument 
	console.log('arg:'+arguments[0]);
	console.log('------------');

}

greet(); //undefined undefined undefined
greet('John');//John undefined undefined
greet('John','Doe');
greet('John','Doe','es');
greet('John','Doe','es','ssE Street','Sec Floor');

function greet1(firstname,lastname,language){
	language=language||'Chinese';
	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log('------------');

}
greet1(); //undefined undefined undefined
greet1('John1');//John undefined undefined
greet1('John1','Doe1');
greet1('John1','Doe1','es1');
