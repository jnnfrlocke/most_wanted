   	function searchByTraits(people) {
   	    var saved = [];
   	    var search = window.prompt("Would you like to search using different characteristics? Please enter 'yes' or 'no'.").toLowerCase();
   	    if (search === "yes") {
   	        var traits = window.prompt("Do you know the person's 'age', 'height', 'weight', 'occupation', or 'eyecolor'? Type the trait(s) you want to search by or 'restart' or 'quit'").toLowerCase();
   	    } else if (search === "no") {
   	        alert("Unfortunately you cannot be helped with the given information.");
   	        return;
   	    } else {
   	        alert("Invalid Repsonse.");
   	        return;
   	    }
   	    switch (traits) {
   	        case "age":
   	            ageCheck();
   	            break;
   	        case "height":
   	            heightCheck(people, saved);
   	            break;
   	        case "weight":
   	            weightCheck(people, saved);
   	            break;
   	        case "occupation":
   	            occupationCheck(people, saved);
   	            break;
   	        case "eyecolor":
   	            eyecolorCheck(people, saved);
   	            break;
   	        case "restart":
   	            app(people);
   	            break;
   	        case "quit":
   	            return;
   	            break;
   	        default:
   	            window.alert("Please enter a valid answer.");
   	            searchByTraits(people);
   	            break;
   	    }
   	    var narrowSearch = window.prompt("If you want to narrow your search even more please enter 'yes', otherwise 'no' to exit the application.").toLowerCase();;
   	    if (narrowSearch === "yes") {
   	        searchByTraits(saved);
   	    } else if (narrowSearch === "no") {
   	        alert("Goodbye");
   	        return;
   	    } else {
   	        alert("Invalid Repsonse.");
   	        return;
   	    }
   	}

   	function ageCheck() {
   	    var enteredAge = parseInt(prompt("What is this person's age?"));
   	    getDatesOfBirth();
   	    var sameAge = [];

   	    var i = 0;
   	    ages.filter(function(yrs) {
   	        if (yrs === enteredAge) {
   	            sameAge.push((data[i].firstName) + " " + (data[i].lastName));
   	        }
   	        i++;
   	    })
   	    window.alert("These people are all " + enteredAge + ":\n" + sameAge.join("\n"));
   	    return sameAge;
   	}

   	function heightCheck(people, saved) {
   	    var enteredHeight = parseInt(prompt("How tall are they in inches?"));
   	    var rightHeight = people.filter(function(el) {
   	        return (el.height === enteredHeight);
   	    });
   	    if (rightHeight.length === 0) {
   	        alert("Search inconclusive. Ending execution.");
   	        throw new Error("End Execution.");
   	    } else {
   	        displayPeople(rightHeight);
   	        saved.splice(0, saved.length, ...rightHeight);
   	    }
   	}

   	function weightCheck(people, saved) {
   	    var enteredWeight = parseInt(prompt("How much do they weigh in pounds?"));
   	    var rightWeight = people.filter(function(el) {
   	        return (el.weight === enteredWeight);
   	    });
   	    if (rightWeight.length === 0) {
   	        alert("Search inconclusive. Ending execution.");
   	        throw new Error("End Execution.");
   	    } else {
   	        displayPeople(rightWeight);
   	        saved.splice(0, saved.length, ...rightWeight);
   	    }
   	}

   	function occupationCheck(people, saved) {
   	    var enteredOccupation = prompt("What is their occupation?");
   	    var rightOccupation = people.filter(function(el) {
   	        return (el.occupation === enteredOccupation);
   	    });
   	    if (rightOccupation.length === 0) {
   	        alert("Search inconclusive. Ending execution.");
   	        throw new Error("End Execution.");
   	    } else {
   	        displayPeople(rightOccupation);
   	        saved.splice(0, saved.length, ...rightOccupation);
   	    }
   	}


   	function eyecolorCheck(people, saved) {
   	    var enteredEyecolor = prompt("What is their eyecolor?");
   	    var rightEyecolor = people.filter(function(el) {
   	        return (el.eyeColor === enteredEyecolor);
   	    });
   	    if (rightEyecolor.length === 0) {
   	        alert("Search inconclusive. Ending execution.");
   	        throw new Error("End Execution.");
   	    } else {
   	        displayPeople(rightEyecolor);
   	        saved.splice(0, saved.length, ...rightEyecolor);
   	    }
   	}