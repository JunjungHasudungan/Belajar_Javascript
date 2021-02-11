
	var fruits = ["apple", "manggo", "jambo"];
	getFruits();
	function getFruits()
	{
		for ( key in fruits) {
			// key + 1;
			document.write( key + " "+ fruits[key] + "<br>");
			// return key +0;
		}
	}
	document.getElementById("function").innerHTML = showFruits;
		function display( a, b ){
			return a * b;
		};