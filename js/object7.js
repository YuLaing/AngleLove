//fucnctions are objects CH4-37
//Object Function this 區別
//會指向全域變數
console.log(this);

//呼叫function 呼叫a()
//陳述
function a() {
	console.log(this);
	this.newvariable='hello';
}

a();
console.log(newvariable)
//表示
var b=function(){
	console.log(this);
}
b();

var c = {
	name:'the c object',
	
	log:function(){
		var self=this;

		this.name='up dtier',
		console.log(this);
		//無法顯示下面 純值 by value
		var setname=function(newname){
			this.name=newname;
		}
		setname('Updat again! the c object');
		console.log(this);
		console.log(this.name);
		this.name;

		self.name='up dtier',
		console.log(self);
		//self=this可以顯示下面 object by reference
		//往外層 有適當使用by reference 
		var setname=function(newname){
			self.name=newname;
		}
		setname('Updat again! the c object');
		console.log(self);
		console.log(self.name);
		self.name;

	}};

c.log();
