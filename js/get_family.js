// =========================================================================================
// Jared working on
function getFamily(person, people) {
    //called when user enters "family"
    //Need to loop thru each object in people(data) to compare their parent's with the person, to get sibling. Done in getSibling function.
    //Use getDecendants function to retrieve children.
    //Throwing parents,sibling, spouse, and childen in an array and getting full name of each of them.
    var family = [];

    getSibling(person, people, family);
    var children = getDescendants(person, people);
    var family = family.concat(children); //combines children array to family arrary
    getParents(person, people, family);
    getCurrentSpouse(person, people, family);
    displayPeople(family);
}

function getSibling(person, people, family) {
    var arrParent = person.parents;
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

function getParents(person, people, family){
    var parents = person.parents;
    if (parents.length === 0) {
        return;
    }
    for (var i = 0; i < people.length; i++) {
        var folks = people[i].id;
            if (parents[0] === folks || parents[1] === folks) {
                family.push(people[i]);
            }
    }
    return;
}

function getCurrentSpouse(person, people, family){
    var spouse = person.currentSpouse;
    if (spouse.length === 0) {
        return;
    }
    for (var i = 0; i < people.length; i++) {
        var betterHalf = people[i].id;
            if (spouse === betterHalf) {
                family.push(people[i]);
            }
    }
    return;
}