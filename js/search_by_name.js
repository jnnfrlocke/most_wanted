function searchByName(people) {
    var firstName = prompt("What is the person's first name?");
    var lastName = prompt("What is the person's last name?");
    var count = 0;

    var nameMatch = data.filter(function(el) {
        if ((el.firstName.toLowerCase() === firstName.toLowerCase()) && (el.lastName.toLowerCase() === lastName.toLowerCase())) {
            displayOption(el, people);
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