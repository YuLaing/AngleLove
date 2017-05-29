//fucnctions are objects CH4-38
//Object Function this 區別
//會指向全域變數
var arr=[1,2,3];
console.log(arr);

arr=[1,false,3,{name:'Tone',address:'111 MainSt'},
function(name){
	var greeting='hello';
	console.log(greeting+name);
},'hello']
console.log(arr);
arr[4](arr[3].name);
arr[4]('ada');
