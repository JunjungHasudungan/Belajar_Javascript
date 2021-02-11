var Human = {
	name: "Hasuudungan",
	age: 27,
	familyName: "Sitorus",
	fullName: function(){
		// return all value using properties
		return this.name + " " + this.age + " " + "  " + this.familyName;

	}
};
		// recall object with method
		document.getElementById("demo").innerHTML = Human.fullName();