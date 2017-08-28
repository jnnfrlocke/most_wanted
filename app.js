/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// =========================================================================================
// app is the function called to start the entire application
function app(people) {
    var searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'.");
    switch (searchType.toLowerCase()) {
        case 'yes':
            searchByName();
            break;
        case 'no':
            window.prompt("Would you like to search using different characteristics? Please enter 'yes' or 'no'.").toLowerCase;
            // TODO: search by traits
            break;
        default:
            window.alert("Please enter a valid answer."); //
            app(people); // restart app
            break;
    }
    return;
}

// =========================================================================================
// search by name
function searchByName() {
    var firstName = prompt("What is the person's first name?");
    var lastName = prompt("What is the person's last name?");
    var count = 0;

    var nameMatch = data.filter(function(el) {
        if ((el.firstName.toLowerCase() === firstName.toLowerCase()) && (el.lastName.toLowerCase() === lastName.toLowerCase())) {
            displayOption(firstName, lastName);
            return true;
        } else {
            count++;
            if (count === data.length) {
                window.alert(firstName + " " + lastName + " was not found.")
            }
        }
    })
    return;
}

// =========================================================================================
// Menu function to call once you find who you are looking for
function mainMenu(firstName, lastName) {
    /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

    // This is covered by the window.alert in searchByName above - commenting out
    // if (!person) {
    //     alert("Could not find that individual.");
    //     return app(people); // restart
    // }
}

// =========================================================================================
function displayOption(firstName, lastName) {
    prompt("Found " + firstName + " " + lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

    switch (displayOption) {
        case "info":
            // TODO: get person's info
            displayPerson();
            break;
        case "family":
            // TODO: get person's family
            break;
        case "descendants":
            // TODO: get person's descendants
            displayDescendants(person, people);
            break;
        case "restart":
            app(people); // restart
            break;
        case "quit":
            // return; // stop execution
        default:
            // return;
            mainMenu(person, people); // ask again
    }
}

// function displayOption(firstName, lastName) {
//     prompt("Found " + firstName + " " + lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'.");

//     switch (displayOption) {
//         case "info":
//             // TODO: get person's info
//             displayPerson(data[1].join);
//             break;
//         case "family":
//             // TODO: get person's family
//             break;
//         case "descendants":
//             // TODO: get person's descendants
//             displayDescendants(person, people);
//             break;
//         case "restart":
//             app(people); // restart
//             break;
//         case "quit":
//             return; // stop execution
//         default:
//             return mainMenu(person, people); // ask again
//     }
// }
// }

// =========================================================================================
// TODO: Jen is working on
function displayPerson(person) {
    // print all of the information about a person:
    // height, weight, age, name, occupation, eye color.
    var personInfo = "First Name: " + firstName + "\n";
    personInfo += "Last Name: " + lastName + "\n";

    //  .toString
    // TODO: finish getting the rest of the information to display
    return;


    alert(personInfo);
}

// =========================================================================================
function displayDescendants(person, people) {
    //this should be called when user enters "descendants"
    //The last 11 people have parents, so the loop can start at 10 for i
    //Loops through each object in data array(outter array) and compares "parents" index to "id" of person(inner loop)
    var kids = [];
    for (var i = 10; i < people.length; i++) {
        var parents = people[i].parents //access "parents" array from data.js
        for (var j = 0; j < parents.length; j++) {
            if (parents[j] === person.id) {
                kids.push(people[i]); //save descendant in array
            }
        }
    }
    if (kids.length != 0) {
        displayPeople(kids); //display descendant(s) full name
        return;
    } else {
        alert("This person has no descendants");
        return;
    }
}

// =========================================================================================
// function getFamily(person, people) {
//called when user enters "family"
//Need access person's info to get parents and currentSpouse.
//Need to loop thru each object in people(data) to compare their parent's with the person, to get sibling.
//Use displayDecendants function to retrieve children.
//Throwing parents,sibling, spouse, and childen in an array and getting full name of each of them.
//   var family = [];
//   var parents = person.parents
//   for(var i = 0; i < people[i].length; i++){

//   }
// }

// =========================================================================================
// alerts a list of people
function displayPeople(people) {
    alert(people.map(function(person) {
        return person.firstName + " " + person.lastName;
    }).join("\n"));
}