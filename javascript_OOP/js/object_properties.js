// create empty variable
var text = "";
var x;
// create some object
var Humans = {
	name : "Hasudungan",
	age : 27,
	famillyName : "Sitorus"
};

// output for object with for loop in
for ( x in Humans ){
	// recall empty variable to include all value
	text += Humans[x] + " ";
} 

document.getElementById("demo").innerHTML = "all object properties: <br>" + text;
