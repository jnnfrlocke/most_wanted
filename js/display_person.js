// FINISHED ============================================================
function displayPerson(personId) {

    var person = data.filter(function(el) {
        if (el.id === personId) {
            var calcAge = getAge(el.dob);
            var spouseName = getSpouse(el.currentSpouse);
            var parentNames = getPersonParents(el.parents);
            window.alert("First Name: " + el.firstName + "\n" + "Last Name: " + el.lastName + "\n" + "Gender: " + el.gender + "\n" + "Age: " + calcAge + "\n" + "Height: " + el.height + " inches" + "\n" + "Weight: " + el.weight + " pounds" + "\n" + "Eye Color: " + el.eyeColor + "\n" + "Occupation: " + el.occupation + "\n" + "Parents: " + parentNames + "\n" + "Current Spouse: " + spouseName);
        }
    })

    function getSpouse(spouseId) {
        var spouse;
        data.filter(function(el) {
            if (el.id === spouseId) {
                spouse = el.firstName + " " + el.lastName;
            }
        })

        if (!spouse) {
            spouse = "This person does not currently have a spouse."
        }
        return spouse;
    }

    function getPersonParents(parentsId) {
        var parentNames = [];
        var i = 0;
        while (i < parentsId.length) {
            data.filter(function(el) {
                if (el.id === parentsId[i]) {
                    i++;
                    parentNames.push(" " + el.firstName + " " + el.lastName);
                }
            })
        }

        if (parentNames.length === 0) {
            parentNames = "This person's parents have not been identified."
        }
        return parentNames;
    }
}