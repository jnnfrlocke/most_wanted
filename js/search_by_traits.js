   
//Jared is working on
function searchByTraits(people){
	var search = window.prompt("Would you like to search using different characteristics? Please enter 'yes' or 'no'.").toLowerCase();
	if (search === "yes"){
		var traits = window.prompt("Do you know the person's 'age', 'height', 'weight', 'occupation', or 'eyecolor'? Type the trait(s) you want to search by or 'restart' or 'quit'").toLowerCase();
	}
	else if(search === "no"){
		app(people);
	}
	switch(traits){
		case "age":
		break;
		case "height":
		heightCheck(people);
		//checkHeight(people);
		break;
		case "weight":
		break;
		case "occupation":
		break;
		case "eyecolor":
		break;
		case "restart":
		app(people); // restart
		break;
		case "quit":
		// return; // stop execution
		break;
		default:
		window.alert("Please enter a valid answer.");
		searchByTraits(people);
		break;
	}
}

function heightCheck(people){
	var enteredHeight = parseInt(prompt("How tall are they in inches?"));
	var rightHeight = people.filter(function (el) {
    return (el.height === enteredHeight);
	});
	displayPeople(rightHeight);
}