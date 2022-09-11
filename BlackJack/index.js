// create two variables,firstCard and secondCard.
//set their values to a random number between 2-11.

//create a variable ,sum, and set it to the sum of the two cards

let firstCard =10;
let secondCard =11;
let sum = firstCard +secondCard;

if(sum < 21){
  console.log("do you want to draw a new card?");
}
else if(sum===21){
   console.log("wohoo! you've got blackJack")
}
else if(sum>21){
    console.log("You're out of the game!");
}