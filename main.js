
// ADD GROW BUTTON
var button = document.getElementById("grow");
button.addEventListener("click", treeStacker);


function treeStacker (){
//capture user input	
	var treeHeight = document.getElementById('height').value;
	var treeChar = document.getElementById('character').value;

//math needed to stack tree
// to print spaces use treeHeight - (i + 1)
// to print characters use (2 * i) + 1

	var newTreeArray = [ height, character];

for (var i = 0; i < newTreeArray.length; i++){

	var treeHeight = treeHeight - (i + 1);
	var treeChar = treeChar (2 * i) + 1;

	}

	//grab input and put into array
console.log(newTreeArray);

return newTreeArray;
}


// Create a tree function that should build a pine tree out of a character 
// in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two 
// key/value pairs.

// A key that specifies the height of the pine tree.

// The value for the height of the tree should be from user input in a 
// <input type="text"> field in the DOM.

// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> 
// field in the DOM.

// Once the user enters in a number, and a character, the user can either 
// then just press the enter key (as long as the cursor is in one of the 
// 	input fields), or click a button that is labeled "Grow your tree" 
// and the tree should be shown in the console. This requires you to add 
// an event listener to the button, as well as an event listener for the 
// enter/return key.

// If either of the input fields does not have a value in it when the user 
// presses the enter key, or presses the button, then display an alert 
// stating that both fields must have a value.

// Grow your tree