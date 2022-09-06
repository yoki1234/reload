// document.getElementById("count-el").innerHTML=10;
let countnum=document.getElementById("counter");
let count = 0;
function increment(){
    // console.log('cliked');
    count+=1;
    countnum.innerText= count;
    color()
   
}
function decrement(){
    count-=1;
    countnum.innerText=count;
    color()
}
function color(){
    if(count>0){
    
        document.body.style.backgroundColor="skyblue";
    }
    if (count===0){
        document.body.style.backgroundColor="cornsilk";
    }
    if (count<0) {
        document.body.style.backgroundColor="pink";
    } 
    
}