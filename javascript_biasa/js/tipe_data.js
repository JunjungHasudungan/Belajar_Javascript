		// create type variable string with value
		var string = "Hasudungan";
		// inject id in html
		document.getElementById("variable").innerHTML  = string;
		
		// create tpye variable number with value
		var number = 10;
		// inject id in html
		document.getElementById("number").innerHTML = number;
	
		// create tpye variable with value
		var a = 5;
		var b = 5;
		var c = 6;
 		// inject id in html
 		document.getElementById("boolean").innerHTML = ( a == b ) + "<br>" + ( a == c );

 		// create type variable with array
 		var array = ["apple", "manggo", "banana"];
 		//inject id in html
 		document.getElementById("array").innerHTML = array[1];

 		// create type variable with object
 		var Human = {
 			name: "Hasudungan", 
 			age: 27, 
 			familyName : "Sitorus"
 		};
 		document.getElementById("object").innerHTML = "my name is: "+ Human.name 
 		+ "<br>" +" my age is: " + Human.age 
 		+ "<br>" + " my family name is: " 
 		+ Human.familyName;