var objectLiteral={
	firstname:'Gary',
	isAProgrammer:true
};
console.log(JSON.stringify(objectLiteral));//{"firstname":"Gary","isAProgrammer":true}

var jsonvalue=JSON.parse('{"firstname":"Gary","isAProgrammer":true}');
console.log(jsonvalue);//Object {firstname: "Gary", isAProgrammer: true}
/*
//物件實體語法Java Script Object 
{
	firstname:'Gary',
	isAProgrammer:true
};
//JSON Java Script Object Notation
{
	"firstname":"Gary",
	"isAProgrammer":true
};

//XML
<object>
	<firstname>Mary</firstname>
	<isAProgrammer> true </isAProgrammer>
</boject>
*/
