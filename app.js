/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    displayPeople(getDescendants(person, people));
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

// app is the function called to start the entire application
function app(people) {
    var searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'.");
    switch (searchType.toLowerCase()) {
        case 'yes':
            searchByName();
            break;
        case 'no':
            window.prompt("Would you like to search using different characteristics? Please enter 'yes' or 'no'.").toLowerCase;
            // TODO: search by traits
            break;
        default:
            window.alert("Please enter a valid answer."); //
            app(people); // restart app
            break;
    }
}

function searchByName(people){
  var firstName = prompt("What is the person's first name?");
  var lastName = prompt("What is the person's last name?");

  var nameMatch = data.filter(function(el){
    if ((el.firstName.toLowerCase() === firstName.toLowerCase()) && (el.lastName.toLowerCase() === lastName.toLowerCase())){
        displayOption(firstName, lastName);
        return true;
    } 
    else{
          count++;
          if(count === data.length){
            window.alert(firstName + lastName + " was not found.");
          }
        }
  })
}

function displayOption(firstName, lastName) {
    prompt("Found " + firstName + " " + lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

    switch (displayOption) {
        case "info":
            // TODO: get person's info
            displayPerson(data[1].join);
            break;
        case "family":
            // TODO: get person's family
            break;
        case "descendants":
            // TODO: get person's descendants
            displayPeople(getDescendants(person, people));
            break;
        case "restart":
            app(people); // restart
            break;
        case "quit":
            return; // stop execution
        default:
            return mainMenu(person, people); // ask again
    }
}

// helper function to pass in as default promptFor validation
function chars(input) {
    return true; // default validation only
}

// alerts a list of people
function displayPeople(people) {
    alert(people.map(function(person) {
        return person.firstName + " " + person.lastName;
    }).join("\n"));
}

function displayPerson(person) {
    // print all of the information about a person:
    // height, weight, age, name, occupation, eye color.
    var personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    // TODO: finish getting the rest of the information to display
    alert(personInfo);
}










































function getDescendants(person, people){
  //this should be called when user enters "descendants"
  //The last 11 people have parents, so the loop can start at 10 for i
  //Loops through each object in data array(outter array) and compares "parents" index to "id" of person(inner loop)
  var kids = [];
  for(var i = 10; i < people.length; i++){
    var parents = people[i].parents //access "parents" array from data.js
    for(var j = 0; j < parents.length; j++){
      if(parents[j] === person.id){
        kids.push(people[i]);//save descendant in array
      }
    }
  }
  if(kids.length != 0){
    people = kids;
    return people;
  }
  else{
    var note = {
    "firstName": "This person has no descendants",
    "lastName": ""
    }
    kids.push(note);
    people = kids;
    return people;
  }
}

function getFamily(person, people){
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

function getSibling(person, people, family){
  var arrParent = person.parents;
  //var sibling = [];
    console.log(person);
  if(arrParent.length === 0){
    return;
  }
  for(var j = 10; j < people.length; j++){
    var parents = people[j].parents;
    for(var k = 0; k < parents.length; k++)
      if(arrParent[0] === parents[k] && person.id != people[j].id || arrParent[1] === parents[k] && person.id != people[j].id){
        family.push(people[j]);
      }
  }
  return;
}

