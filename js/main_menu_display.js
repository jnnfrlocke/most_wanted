// ======================================================================================
// THIS IS GOOD CODE
// Invoke function to get person's info based on user selection
function displayOption(person, people) {
    var option = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

    switch (option) {
        case "info":
            displayPerson(person.id);
            break;
        case "family":
            // TODO: get person's family
            getFamily(person, people);
            break;
        case "descendants":
            // TODO: get person's descendants
            displayPeople(getDescendants(person, people));
            break;
        case "restart":
            app(people); // restart
            break;
        case "quit":
            //return; // stop execution
            break;
        default:
            // return;
            app(people); // ask again
    }
}