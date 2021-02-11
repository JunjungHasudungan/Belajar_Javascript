		// variable x with value
		var x = 10;
		x += 5;
		// variable y with value and operation
		var y = 19;
		y -= 3;
		// variable a with value and operation
		a = 8;
		a *= 3;
		// create variable b with value and operation
		b = 18;
		b /= 3;
		// create variable v with value and operator
		c = 25;
		c %= 3;

	// inject to innerHTML by id "operator1"
	document.getElementById("operator1").innerHTML = x;
	
	// inject to innerHTML by id "operator2"
	document.getElementById("operator2").innerHTML = y;

	// inject to innerHTML by id "operator3"
	document.getElementById("operator3").innerHTML = a;
	
	// inject to innerHTML by id "operator4"
	document.getElementById("operator4").innerHTML = b;
	
	// inject to innerHTML by id "operator5"
	document.getElementById("operator5").innerHTML = c;