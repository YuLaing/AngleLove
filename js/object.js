var person = new Object();
person["firstname"]="Tony";
person['lastname']="Alicea";

var firstnameproperty="firstname";

console.log(person);
console.log(person[firstnameproperty]);
console.log(person.firstname); 
console.log(person.lastname);

person.address=new Object();
person.address.street="111 Main St.";
person.address.city="New York";
person.address.state="NY";
console.log(person);

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"])