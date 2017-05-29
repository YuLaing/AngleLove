//fucnctions are objects CH4-46
//了解閉包understanding closeures
//function statement
function buildFunctions(){
	var arr=[];
	for (var i=0;i<3;i++){
		arr.push(
			function(){
				console.log(i);
			}
			)
	}
	return arr;
}

var fs=buildFunctions();
fs[0]();
fs[1]();
fs[2]();

