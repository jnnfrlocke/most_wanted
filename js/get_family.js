// =========================================================================================
// Jared working on
function getFamily(person, people) {
    //called when user enters "family"
    //Need access person's info to get parents and currentSpouse.
    //Need to loop thru each object in people(data) to compare their parent's with the person, to get sibling. Done in getSibling function.
    //Use displayDecendants function to retrieve children.
    //Throwing parents,sibling, spouse, and childen in an array and getting full name of each of them.
    var family = [];
    // for(var i = 0; i < person.parents; i++){
    //   family.push(i)
    // }
    // family.push(person.currentSpouse); //need to get name of spouse

    getSibling(person, people, family);
    console.log(family);
    var children = getDescendants(person, people);
    var family = family.concat(children); //combines children array to family arrary
    displayPeople(family);
}

function getSibling(person, people, family) {
    var arrParent = person.parents;
    //var sibling = [];
    console.log(person);
    if (arrParent.length === 0) {
        return;
    }
    for (var j = 10; j < people.length; j++) {
        var parents = people[j].parents;
        for (var k = 0; k < parents.length; k++)
            if (arrParent[0] === parents[k] && person.id != people[j].id || arrParent[1] === parents[k] && person.id != people[j].id) {
                family.push(people[j]);
            }
    }
    return;
}