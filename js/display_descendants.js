function getDescendants(person, people) {
    var kids = [];
    for (var i = 0; i < people.length; i++) {
        var parents = people[i].parents
        for (var j = 0; j < parents.length; j++) {
            if (parents[j] === person.id) {
                kids.push(people[i]);
            }
        }
    }
    if (kids.length != 0) {
        people = kids;
        return people;
    } else {
        var note = {
            "firstName": "This person has no descendants",
            "lastName": ""
        }
        kids.push(note);
        people = kids;
        return people;
    }
}