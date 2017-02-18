
var input = document.getElementById("input");
var button = document.getElementById("grow");
button.addEventListener("click", inputValidation);
	
function inputValidation(){

	var treeHeight = document.getElementById('height').value;
	var treeChar = document.getElementById('character').value;

	var treeObject = { 				//bundles the values
		treeHeight: treeHeight,		//could write as treeHeight: document.getElementById('height').value; rather than have 2 steps
		treeChar: treeChar			//could write as treeChar: document.getElementById('char').value; rather than have 2 steps
	}

	 if (treeHeight === '') {		//if used bundle only and not two steps, would read as treeObject.treeHeight
	 	alert("Give me a height!")
	 }

	 else if (treeHeight != '') {
	 	treeStacker (treeObject);
	 }

	 if (treeChar === '') {
	 	alert("Give me a character!")
	 }
	 else if (treeChar != '') {
	 	treeStacker (treeObject);
	 }
 }

var treeStacker = function(treeObject){
	console.log(treeObject)

		for (var i = 0; i < treeObject.treeHeight; i++) {  //<--benefits of using bundled object rather than passing in multiple thingys

			var numOfSpaces = treeObject.treeHeight - (i + 1);
			var numOfChar = (2 * i) + 1;
			console.log(" ".repeat(numOfSpaces) + treeObject.treeChar.repeat(numOfChar))  //character is dynamic, so needs more code to clarify (coming in the bundle)
			//this console.log includes STRING METHODS...remember what those are you asshat
		}
};

