   //Jared is working on
   function searchByTraits(people) {
       var saved = [];
       var search = window.prompt("Would you like to search using different characteristics? Please enter 'yes' or 'no'.").toLowerCase();
       if (search === "yes") {
           var traits = window.prompt("Do you know the person's 'age', 'height', 'weight', 'occupation', or 'eyecolor'? Type the trait(s) you want to search by or 'restart' or 'quit'").toLowerCase();
       } else if (search === "no") {
           app(people);
       }
       switch (traits) {
           case "age":
               var age = getAge(data.age);
               //call to getAge function in get_age.js
               saved.push(age);
               break;
           case "height":
               heightCheck(people, saved);
               break;
           case "weight":
               weightCheck(people, saved);
               break;
           case "occupation":
               occupationCheck(people, saved);
               break;
           case "eyecolor":
               eyecolorCheck(people, saved);
               break;
           case "restart":
               app(people);
               break;
           case "quit":
               return;
               break;
           default:
               window.alert("Please enter a valid answer.");
               searchByTraits(people);
               break;
       }
       var narrowSearch = window.prompt("If you want to narrow your search even more please enter 'yes', otherwise 'no' to start from the beginning.").toLowerCase();;
       if (narrowSearch === "yes") {
           searchByTraits(saved);
       } else if (narrowSearch === "no") {
           app(people);
       } else {
           alert("Invalid Repsonse.");
           app(people);
       }
   }

   function heightCheck(people, saved) {
       var enteredHeight = parseInt(prompt("How tall are they in inches?"));
       var rightHeight = people.filter(function(el) {
           return (el.height === enteredHeight);
       });
       if (rightHeight.length === 0) {
           var noResult = window.prompt("Search inconclusive. Would you like to start over? Enter 'yes' or 'no'.");
           if (noResult === "yes") {
               searchByTraits(people);
           } else {
               app(people);
           }
       } else {
           displayPeople(rightHeight);
           saved.splice(0, saved.length, ...rightHeight); //Replaces items in saved array with what items(people) were filtered out.
       }
   }

   function weightCheck(people, saved) {
       var enteredWeight = parseInt(prompt("How much do they weight in pounds?"));
       var rightWeight = people.filter(function(el) {
           return (el.weight === enteredWeight);
       });
       if (rightWeight.length === 0) {
           var noResult = window.prompt("Search inconclusive. Would you like to start over? Enter 'yes' or 'no'.");
           if (noResult === "yes") {
               searchByTraits(people);
           } else {
               app(people);
           }
       } else {
           displayPeople(rightWeight);
           saved.splice(0, saved.length, ...rightWeight);
       }
   }

   function occupationCheck(people, saved) {
       var enteredOccupation = prompt("What is their occupation?");
       var rightOccupation = people.filter(function(el) {
           return (el.occupation === enteredOccupation);
       });
       if (rightOccupation.length === 0) {
           var noResult = window.prompt("Search inconclusive. Would you like to start over? Enter 'yes' or 'no'.");
           if (noResult === "yes") {
               searchByTraits(people);
           } else {
               app(people);
           }
       } else {
           displayPeople(rightOccupation);
           saved.splice(0, saved.length, ...rightOccupation);
       }
   }


   function eyecolorCheck(people, saved) {
       var enteredEyecolor = prompt("What is their eyecolor?");
       var rightEyecolor = people.filter(function(el) {
           return (el.eyeColor === enteredEyecolor);
       });
       if (rightEyecolor.length === 0) {
           var noResult = window.prompt("Search inconclusive. Would you like to start over? Enter 'yes' or 'no'.");
           if (noResult === "yes") {
               searchByTraits(people);
           } else {
               app(people);
           }
       } else {
           displayPeople(rightEyecolor);
           saved.splice(0, saved.length, ...rightEyecolor);
       }
   }