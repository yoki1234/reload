
/*-----------------------------------------------------------------*/
//create two variables, firstName and lastName
let firstName="Akshay";
let lastName="Ashok";
// concatenate the two variables into a third variable called fullName
let fullName = firstName+" "+lastName;
//log fullName to the console
console.log(fullName);
/*------------------------------------------------------------------*/

//create a function that logs out "Hi there, Linda!" when called
let lname="Linda";
let greeting="Hi there";
let greetLinda = () =>{
    let Lgreeting = greeting+","+" "+lname+"!";
    console.log(Lgreeting);
}
greetLinda();
/*------------------------------------------------------------------*/
let myPoints = 3;
//create two function ,add3pointes() and remove1point(), and have them
// add/remove points to/from the myPoints variable

function add3Pointes(){
    myPoints+=3;
}
function remove1Point(){
    myPoints-=1;
}
add3Pointes();
add3Pointes();
add3Pointes();
remove1Point();
remove1Point();
//call the function to that the line below log out 10
console.log(myPoints)