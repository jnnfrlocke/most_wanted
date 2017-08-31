function getDatesOfBirth() {
    var datesOfBirth = [];
    var i = 0
    for (i = 0; i < data.length; i++) {
        var dobs = (data[i].dob);
        datesOfBirth.push(dobs);
    }

    ages = [];
    var j = 0;
    for (j = 0; j < datesOfBirth.length; j++) {
        var age = getAge(datesOfBirth[j]);
        ages.push(age);
    }
}