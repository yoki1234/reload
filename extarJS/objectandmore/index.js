
/*-------------objects---------------------*/
// let person = {
//     name:"Akshay",
//     age:25,
//     country:"India"
// }
// function logData(){
//     console.log(`${person.name} is ${person.age} years old and living in ${person.country}.`)
// }
// logData();
/*------------------------------------------*/
/*--------------if condition----------------*/
// let age = 20;
// if (age <= 6) {
//   console.log("free");
// } else if (age <= 17) {
//   console.log("child discount");
// } else if (age <= 26) {
//   console.log("Student discount");
// } else if (age <= 66) {
//   console.log("full price");
// } else {
//   console.log("Senior citizen discount");
// }
/*-----------------------------------------*/
/*-----------------array-------------------*/

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"];
// let heading = "The 5 largest countries in the world:";
// console.log(heading);
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log(`-${largeCountries[i]}`)    
// }

/*-----------------------------------------*/
/*-------------array props-----------------*/
// use push() & pop() and their counterparts unshift() & shift()
// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]; 
// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");
// console.log(largeCountries);


/*----------------------------------------*/
/*-------------logical--------------------*/
//   let dayOfMonth = 13;
//   let weekday="friday"
//   if(dayOfMonth===13 && weekday==="friday"){
//     console.log("here! charle");
//   }
//   else{
//     console.log("safe for now");
//   }
/*----------------------------------------*/
/*-----Rock ,paper and -scissor-----------*/
// let hand = ["Rock","Paper","Scissor"]
// i=Math.floor(Math.random()*3);
// console.log(hand[i]);
/*----------------------------------------*/
/*----------------Shelf Sorting-----------*/
let fruit =["apple","orange","apple","apple","orange"]
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf=document.getElementById("orange-shelf");

function sorting() {
   for (let i = 0;i< fruit.length;i++){
    if(fruit[i]==="apple"){
        appleShelf.textContent += "apple";
    }
    else if(fruit[i]==="orange"){
        orangeShelf.textContent += "orange";
    }
   }
}
sorting()

/*----------------------------------------*/



