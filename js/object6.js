//fucnctions are objects CH4-36
//by value and by reference
//     primitive value==>a(0x001)
//copy primitive value==>b(0x002)
//by value (primitives)方法 :所有純值 都是by value
var a=3;
var b;
b=a;
a=2;
console.log(a);
console.log(b);


//object
//object 0x001 a
//object 0x001 b
//指向同一位址，兩個名字，指向同一個位址
//by reference (all objects including functions) 
//所有物件都是by reference
var c={greeting:'hi'};
var d;
d=c;
console.log(c);
console.log(d);
c.greeting='hello';//mutate
//Big Word  :mutate Immutable 
console.log(c);
console.log(d);

//by reference even as parameters
function changeGreeting(obj) {
	obj.greetig='Hola';//mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

//equal operator sets up new memory space (new address)
c={greeting:'howdy'};
console.log(c);
console.log(d);




