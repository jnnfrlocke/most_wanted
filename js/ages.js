// var dobs = [];

function getDatesOfBirth() {
    //create empty array
    var datesOfBirth = [];

    // set i
    var i = 0
        // function getDob() {
    for (i = 0; i < data.length; i++) {
        var dobs = (data[i].dob);
        datesOfBirth.push(dobs);
    }
    // }
    console.log(datesOfBirth);

    // loop to get age for each person
    ages = [];
    var j = 0;
    for (j = 0; j < datesOfBirth.length; j++) {
        var age = getAge(datesOfBirth[j]);
        ages.push(age);
    }
    console.log(ages)

    // verifyAge(ages);
}