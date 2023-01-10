// problem 1) Hello, object 
// Write the code, one line for each action:
//Answer 
// Create an empty object user.
let user = {}; 
// Add the property name with the value John.
user.name = "John";
console.log(user) // { name: 'John'}
// Add the property surname with the value Smith.
user.surname = "Smith"
console.log(user) // { name: 'John', surname: 'Smith' }
// Change the value of the name to Pete.
user.name = "Pete"
console.log(user) // { name: 'Pete', surname: 'Smith' }
// Remove the property name from the object.
delete user.name 
console.log(user)// { surname: 'Smith' }

// problem 2) Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {}; // testing 
// schedule["8:30"] = "get up"; // uncomment and run to test

function isEmpty(obj){ 
    for (let prop in obj){  
        return false; 
    }
        return true
    }
console.log(isEmpty(schedule)); // true, testing 
// // console.log(( isEmpty(schedule))); // false, uncomment and run to test
//     // need to check if the object has properties 
//     // if it has no properties --> return true 
//     // if it does have properties need to return false 

//problem 3) Sum object properties
// task: Write the code to sum all salaries and store in the variable sum. Should be 390 in the example below.
// If salaries is empty, then the result must be 0.
let salaries = {      // object storing salaries of our team 
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function sumSal(obj){
     // create a function that will loop thru each key and obtain its value & add them together 
    // assign that value to sum 
    // if theres nothing in the object then the answer of sum has to be 0 
    // want to create a variable to store the answer in called sum 
    let sum = 0; // hold our numbers 
    for(let key in obj){ 
        // access the key and take its value 
       if (salaries.hasOwnProperty(key)){ 
        sum += obj[key]; // sum = sum + value of the objects key
       }else{ 
        return sum = 0; // if sum is 0
       }
    } 
    return sum;
  }
console.log(sumSal(salaries)); 

//problem 4) Multply Numeric propery values by 2 
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };


  
  // have a function called multiplyNumeric 
  // for every key in the menu object 
  // we want to check the type of the key's value and see if its a number 
  // if it is a number, we wamt to multiply each value by 2 
  // then we want to update the menu 
  function multiplyNumeric(obj){  
    
    for(let key in obj){  
        if(typeof obj[key] === 'number'){ 
        obj[key] *= 2
        }
    }
    
  }
  

  // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

