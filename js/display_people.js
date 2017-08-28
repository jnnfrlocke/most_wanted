// =========================================================================================
// Not working on this yet
// TODO: alerts a list of people
function displayPeople(people) {
    alert(people.map(function(person) {
        return person.firstName + " " + person.lastName;
    }).join("\n"));
}