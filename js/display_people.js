function displayPeople(people) {
    alert(people.map(function(person) {
        return person.firstName + " " + person.lastName;
    }).join("\n"));
}