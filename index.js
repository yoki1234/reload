// create two variables,firstCard and secondCard.
//set their values to a random number between 2-11.

//create a variable ,sum, and set it to the sum of the two cards


let cards = [];//array -ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
// let player ={
//   name:"Akshay Ashok",
//   chip: 200,
// }
// let playerEL= document.getElementById("player-el");
// playerEL.textContent=`${player.name}: $${player.chip}`

function getRandomCard(){
  let randomNum=Math.floor(Math.random()*13)+1;
  if(randomNum === 1){
    return 11;
  }
  else if(randomNum > 10){
    return 10;
  }
  else{
    return randomNum;
  }
  // return Math.floor(Math.random()*13)+1;
}


function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards=[firstCard,secondCard];
  sum = firstCard+secondCard;
  renderGame();
}

function renderGame(){
  cardEl.textContent= `Cards: `

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i]+" ";
  }

  sumEl.textContent= `Sum: ${sum}`;
  if(sum <= 20){
    message="Do you want to draw a new card?";
  }
  else if(sum === 21){
    message="You've got blackJack";
    hasBlackJack = true;
  }
  else {
    message="You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent=message;
  // console.log(hasBlackJack);
  // console.log(isAlive);
  // console.log(message);
}

function newCard(){
  if(isAlive===true && hasBlackJack ===false){
    console.log("cliked");
    let card = getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
  }
}

//check if the person is old enough to enter the nightclub (21)
// log a suitable message to the console in both cases

// let age = 18;
// if(age <= 20){
//   console.log("you can not enter the club");
// }
// else{
//   console.log("welcome");
// }
// check if the person is elegible for a birthday card from the King!(100)

// let age = 100;

// if(age < 100){
//   console.log("Not elegible");
// }
// else if(age === 100){
//   console.log("Here is your birthday card from the king!");
// }
// else{
//   console.log("Not elegible, you have already gotten one");
// }
// console.log(4===3)// false
// console.log(5>2);// true
// console.log(12>12);// false
// console.log(3<0);// false
// console.log(3>=3);// true
// console.log(11<=11);// true
// console.log(3<=2);// false
