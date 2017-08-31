function getDescendants(person, people) {
    var children = people.filter(function(el) {
        if (el.parents[0] === person.id || el.parents[1] === person.id) {
            return true;
        }
    })

    if (children.length === 0) {
        return;
    }
    for (var i = 0; i < children.length; i++) {
        var descendants = [];
        descendants = (getDescendants(children[i], people));
    }
    children.concat(descendants);
    displayPeople(children);
    return children;
}