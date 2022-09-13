// when user cliks the purchase button, render out 
//"somethig went wrong,please try again" in the paragraph
//that has the id="error"  
let error = document.getElementById("error")
// let displayNone = document.getElementsById("wrap").style.display;
// console.log(displayNone);
function errorMessage(){
    error.textContent="Something went worng,Please try again."
}