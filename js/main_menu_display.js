function displayOption(person, people) {
    var option = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

    switch (option) {
        case "info":
            displayPerson(person.id);
            break;
        case "family":
            getFamily(person, people);
            break;
        case "descendants":
            displayPeople(getDescendants(person, people));
            break;
        case "restart":
            app(people);
            break;
        case "quit":
            break;
        default:
            app(people);
    }
}