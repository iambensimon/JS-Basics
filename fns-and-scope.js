//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  var isTyler = function(placeholder) {
    if(placeholder == name) {
      return true;
    }else {
      return false;
    }
  }
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
  var realName = prompt("Can I have your name?");
  return realName;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  var welcome = function() {
    getName();
    alert("Welcome, " + getName());
    
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  "parameters are placeholders that arguments are passed into. Parameters are like the parking slot. Arguments are like the car. Arguments are a definite thing passed into \'slot\' that can vary."


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


"The falsy values are 0, false, NaN, undefined, an empty string, and null.  You check for falsy values using an exclaimation mark. like, if something is truthy \'!truthy\' will be falsy."



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  var myName = function() {
    return "Barney";
  }
  


//Now save the function definition of myName into a new variable called newMyName

   var newMyName = myName;

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
  return (function() {
    return "Barney";
  });
};

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
