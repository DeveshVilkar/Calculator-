
let result=document.getElementById("display")
let a=document.querySelectorAll(".button")
function appendToDisplay(number){
    result.value+=number;

}
function calculate(){
    try{
        result.value=eval(result.value)
    }
    catch{
        alert ("invalid input")
    }

}
function clearDisplay(){
    result.value=" "

}


















