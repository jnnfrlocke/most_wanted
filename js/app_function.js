// =========================================================================================
// THIS IS GOOD CODE
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

// helper function to pass in as default promptFor validation
function chars(input) {
    return true; // default validation only
}