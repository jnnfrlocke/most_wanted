// ======================================================================================
// Get Age

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
// console.log('age: ' + getAge());








// function getAge(personId) {
//     // get current date
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     var currentMonth = currentDate.getMonth();
//     var currentDay = currentDate.getDate();
//     console.log(currentYear, currentMonth, currentDay);


//     // get dob from personId
//     var dob = data.filter(function(el) {
//         if (el.id === personId) {
//             // convert dob to correct array
//             var bdArray = (el.dob).split("/");
//             // loop through array to turn all strings into numbers
//             for (i = 0; i < bdArray.length; i++) {
//                 var bdArr = Number(bdArray[i]);
//             }
//             console.log(bdArr);
//             return;
//         }
//     })

//     // calculateAge
//     var age = function calculateAge() {
//             var years = currentYear - bdArr[2];
//             var months = currentMonth - bdArr[1];
//             if (months < 0 || (months === 0 && currentDay < bdArr[0])) {
//                 age--;
//             }
//             console.log(age);
//             return age;
//         }
//         // console.log(age);


// }