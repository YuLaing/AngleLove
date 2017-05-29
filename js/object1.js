var person={firstname:'Tony',
			lastname:"Alicea",
			address:{
				street:'123',
				city:'NewYork',
				state:'NY',
			}}; 
//大跨號知道你要創建物件
//:知道增加名稱和值配對分隔
//,知道為另一個物件
/*
console.log(person);
person=new Object();
person.firstname="Tony";
person.lastname="Alicea";
console.log(person);
*/
greet("person"); 
function greet(person){console.log('hi '+person.firstname)};
//console.log(person);
greet(person);
greet({firstname:'Mary',lastname:'Doe'});
greet("Gary");

person.address2={
	street:'322 Second St.'
}

console.log(person);