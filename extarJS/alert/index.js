let a = prompt("Enter a number1:");
let b = prompt("Enter a number2:");

function Greater(){
    if(a>b){
        // alert("number1 is greater than number2.");
        document.getElementById("comparison").innerText=`${a} is greater than ${b}.`
    }
    else{
        // alert("number2 is greater that number1.");
        document.getElementById("comparison").innerText=`${b} is greater than ${a}.`

    }
}
function displaycolour(){
    if(a>b){
        document.body.style.background="crimson";
        document.getElementById("color").innerText=`${a} like's crimson`;
        
    }
    if(b>a){
        document.body.style.background="DarkSlateGray";
        document.getElementById("color").innerText=`${b} like's DarkSlateGray`;

        
    }
}