function getDescendants(person, people) {
    //The last 11 people have parents, so the loop can start at 10 for i
    //Loops through each object in data array(outter array) and compares "parents" index to "id" of person(inner loop)
    var kids = [];
    for (var i = 10; i < people.length; i++) {
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