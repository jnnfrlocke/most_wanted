// =========================================================================================
// Jared working on
function displayDescendants(person, people) {
    //this should be called when user enters "descendants"
    //The last 11 people have parents, so the loop can start at 10 for i
    //Loops through each object in data array(outter array) and compares "parents" index to "id" of person(inner loop)
    var kids = [];
    for (var i = 10; i < people.length; i++) {
        var parents = people[i].parents //access "parents" array from data.js
        for (var j = 0; j < parents.length; j++) {
            if (parents[j] === person.id) {
                kids.push(people[i]); //save descendant in array
            }
        }
    }
    if (kids.length != 0) {
        displayPeople(kids); //display descendant(s) full name
        return;
    } else {
        alert("This person has no descendants");
        return;
    }
}