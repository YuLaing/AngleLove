//fucnctions are objects CH4-41
//SYNTAX PARSERS
//arguments:參數
//return;
// return
//      {}
//和 return{}是不同的 return+分行 會自動寫成return;

function getPerson(){
	return    //自動幫你加上; =return;
	{fisrtname :'Tony'}
}

console.log(getPerson()); //undefined

function getPerson1(){
	return {  
	fisrtname :'Tony'}
}

console.log(getPerson1()); //Tony