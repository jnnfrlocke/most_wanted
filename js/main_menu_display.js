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

// From github
// Menu function to call once you find who you are looking for
function mainMenu(person, people) {

    /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

    if (!person) {
        alert("Could not find that individual.");
        return app(people); // restart
    }

    var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

    switch (displayOption) {
        case "info":
            // TODO: get person's info
            break;
        case "family":
            // TODO: get person's family
            break;
        case "descendants":
            // TODO: get person's descendants
            displayPeople(getDescendants(person, people));
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









// ======================================================================================
// THIS IS GOOD CODE
// Invoke function to get person's info based on user selection
function displayOption(firstName, lastName) {
    prompt("Found " + firstName + " " + lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

    switch (displayOption) {
        case "info":
            // TODO: get person's info
            displayPerson(person);
            // displayPerson(data[1].join);
            break;
        case "family":
            // TODO: get person's family
            break;
        case "descendants":
            // TODO: get person's descendants
            // displayDescendants(person, people);
            displayPeople(getDescendants(person, people));
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

// THIS NOT SO GOOD
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