// FINISHED =========================================================================================
function app(people) {
    var searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'.");
    switch (searchType.toLowerCase()) {
        case 'yes':
            searchByName(people);
            break;
        case 'no':
            searchByTraits(people);
            break;
        default:
            window.alert("Please enter a valid answer."); //
            app(people); // restart app
            break;
    }
    return;
}

// UNUSED STARTER CODE
// // helper function to pass in as default promptFor validation
// function chars(input) {
//     return true; // default validation only
// }