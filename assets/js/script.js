var displayDiv = document.querySelector(".display");

function press(element){
    console.log(element);
    if(displayDiv.innerText ==[0]){
        displayDiv.innerText = element;
    }
    else{
        displayDiv.innerText += element;
    }
}
function setOP(operador){
    displayDiv.innerText += operador;
}

function calculate(){
    var result = eval(displayDiv.innerText);
    displayDiv.innerText=result;
}
function clr(){
    displayDiv.innerText=0
}