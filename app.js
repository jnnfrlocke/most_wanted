/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people) {
    var searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'.");
    switch (searchType.toLowerCase()) {
        case 'yes':
            searchByName();
            break;
        case 'no':
            window.prompt("Would you like to search using different characteristics? Please enter 'yes' or 'no'.").toLowerCase;
            // TODO: add case or ife/else stmt for end vs continue to search by characteristics
            break;
        default:
            window.alert("Please enter a valid answer.");
            app(people); // restart app
            break;
    }
}

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
                window.alert(firstName + lastName + " was not found.")
            }
        }
    })

}

function displayOption(firstName, lastName) {
    prompt("Found " + firstName + " " + lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

    switch (displayOption) {
        case "info":
            // TODO: get person's info
            // displayPerson(data[1].join);
            break;
        case "family":
            // TODO: get person's family
            break;
        case "descendants":
            // TODO: get person's descendants
            break;
        case "restart":
            app(people); // restart
            break;
        case "quit":
            return; // stop execution
        default:
            return mainMenu(person, people); // ask again
    }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people) {

    /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

    if (!person) {
        alert("Could not find that individual.");
        return app(people); // restart
    }





    // alerts a list of people
    function displayPeople(people) {
        alert(people.map(function(person) {
            return person.firstName + " " + person.lastName;
        }).join("\n"));
    }

    function displayPerson(person) {
        // print all of the information about a person:
        // height, weight, age, name, occupation, eye color.
        var personInfo = "First Name: " + person.firstName + "\n";
        personInfo += "Last Name: " + person.lastName + "\n";
        // TODO: finish getting the rest of the information to display


        alert(personInfo);
    }

    // function that prompts and validates user input
    function promptFor(question, valid) {
        do {
            var response = prompt(question).trim();
        } while (!response || !valid(response));
        return response;
    }

    // helper function to pass into promptFor to validate yes/no answers
    function yesNo(input) {
        return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
    }

    // helper function to pass in as default promptFor validation
    function chars(input) {
        return true; // default validation only
    }
}