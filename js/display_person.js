// =========================================================================================
// TODO: Jen is working on
function displayPerson(personId) {
    // print all of the information about a person:
    // height, weight, age, name, occupation, eye color.
    // TODO: function to get age
    var person = data.filter(function(el) {
        if (el.id === personId) {
            window.alert("First Name: " + el.firstName + "\n" + "Last Name: " + el.lastName + "\n" + "Gender: " + el.gender + "\n" + "Age: " + getAge() + "\n" + "Height: " + el.height + "\n" + "Weight: " + el.weight + "\n" + "Eye Color: " + el.eyeColor + "\n" + "Occupation: " + el.occupation + "\n" + "Parents: " + el.parents + "\n" + "Current Spouse: " + el.currentSpouse);
        }

    });





    //     var personInfo = "First Name: " + firstName + "\n";
    //     personInfo += "Last Name: " + lastName + "\n";
    //     //  .toString
    //     // TODO: finish getting the rest of the information to display
    //     return;
    //     alert(personInfo);
    // }

    // function displayPerson(person) {
    //     // print all of the information about a person:
    //     // height, weight, age, name, occupation, eye color.
    //     var personInfo = "First Name: " + person.firstName + "\n";
    //     personInfo += "Last Name: " + person.lastName + "\n";
    //     // TODO: finish getting the rest of the information to display
    //     alert(personInfo);
    // }