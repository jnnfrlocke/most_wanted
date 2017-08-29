// =========================================================================================
// TODO: Jen is working on
function displayPerson(personId) {
    // print all of the information about a person:
    // height, weight, age, name, occupation, eye color.
    var person = data.filter(function(el) {
        if (el.id === personId) {
            window.alert(el);
        }

    })





    var personInfo = "First Name: " + firstName + "\n";
    personInfo += "Last Name: " + lastName + "\n";
    //  .toString
    // TODO: finish getting the rest of the information to display
    return;
    alert(personInfo);
}

// function displayPerson(person) {
//     // print all of the information about a person:
//     // height, weight, age, name, occupation, eye color.
//     var personInfo = "First Name: " + person.firstName + "\n";
//     personInfo += "Last Name: " + person.lastName + "\n";
//     // TODO: finish getting the rest of the information to display
//     alert(personInfo);
// }