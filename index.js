let container = document.getElementById("container");
let spanE1 = document.getElementById("counter");


let clickCounter = localStorage.getItem("clickCounter");
if(clickCounter === null){
    spanE1.textContent = 0 ;
}else{
    spanE1.textContent = clickCounter;
}

function increment(){
    let oldNum = spanE1.textContent;
    let newNum = parseInt(oldNum) + 1;

    localStorage.setItem("clickCounter",newNum);
    spanE1.textContent = newNum;
 }