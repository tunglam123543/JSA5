let firstNumber = "";
let secondNumber = "";
let switchNumber = false;
let latestChange = ""
let operation = ""
let freeze = false;

let screen = document.querySelector(".operation")
let nut1 = document.getElementById("1")
let nut2 = document.getElementById("2")
let nut3 = document.getElementById("3")
let nut4 = document.getElementById("4")
let nut5 = document.getElementById("5")
let nut6 = document.getElementById("6")
let nut7 = document.getElementById("7")
let nut8 = document.getElementById("8")
let nut9 = document.getElementById("9")
let nut0 = document.getElementById("0")

nut1.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "1";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "1"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 1"
        } else {screen.innerText = screen.innerText + "1"}
        latestChange = "secondNumber"
    }
    }
})

nut2.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "2";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "2"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 2"
        } else {screen.innerText = screen.innerText + "2"}
        latestChange = "secondNumber"
    }
    }
})

nut3.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "3";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "3"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 3"
        } else {screen.innerText = screen.innerText + "3"}
        latestChange = "secondNumber"
    }
    }
})

nut4.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "4";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "4"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 4"
        } else {screen.innerText = screen.innerText + "4"}
        latestChange = "secondNumber"
    }
    }
})

nut5.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "5";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "5"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 5"
        } else {screen.innerText = screen.innerText + "5"}
        latestChange = "secondNumber"
    }
    }
})

nut6.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "6";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "6"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 6"
        } else {screen.innerText = screen.innerText + "6"}
        latestChange = "secondNumber"
    }
    }
})

nut7.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "7";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "7"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 7"
        } else {screen.innerText = screen.innerText + "7"}
        latestChange = "secondNumber"
    }
    }
})

nut8.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "8";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "8"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 8"
        } else {screen.innerText = screen.innerText + "8"}
        latestChange = "secondNumber"
    }
    }
})

nut9.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        firstNumber = firstNumber + "9";
        screen.innerText = firstNumber
        latestChange = "firstNumber"
    } else {
        secondNumber = secondNumber + "9"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 9"
        } else {screen.innerText = screen.innerText + "9"}
        latestChange = "secondNumber"
    }}
})

nut0.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == false){
        if(firstNumber != ""){
        firstNumber = firstNumber + "0";
        screen.innerText = firstNumber
    latestChange = "firstNumber"}
    } else {
        if(firstNumber != ""){
        secondNumber = secondNumber + "0"
        if(latestChange == "operation"){
            screen.innerText = screen.innerText + " 0"
        } else {screen.innerText = screen.innerText + "0"}   
        latestChange = "secondNumber"}}
    } 
})


let cong = document.getElementById("+")
let tru = document.getElementById("-")
let nhan = document.getElementById("*")
let chia = document.getElementById("/")

cong.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == true){
    } else{
        switchNumber = true
        latestChange = "operation"
        operation = "+"
        screen.innerText = screen.innerText + " +"
    }
   }   
})

tru.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == true){

    } else{
        switchNumber = true
        latestChange = "operation"
        operation = "-"
        screen.innerText = screen.innerText + " -"
    }
   }   
})

nhan.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == true){
    } else{
        switchNumber = true
        latestChange = "operation"
        operation = "x"
        screen.innerText = screen.innerText + " x"
    }
    }   
})

chia.addEventListener("click", function(){
    if(freeze == false){
    if(switchNumber == true){
    } else{
        switchNumber = true
        latestChange = "operation"
        operation = "÷"
        screen.innerText = screen.innerText + " ÷"
    }
    }   
})


let prev = ""
let result = document.querySelector("#result")
let equal = document.querySelector(".equal")
equal.addEventListener("click", function(){
    if(latestChange == "secondNumber"){
        freeze = true;
        latestChange = "";
        if(operation == "+"){
            result.innerText = Number(firstNumber) + Number(secondNumber)
        } else if(operation == "-"){
            result.innerText = Number(firstNumber) - Number(secondNumber)
        } else if(operation == "x"){
            result.innerText = Number(firstNumber) * Number(secondNumber)
        } else if(operation == "÷"){
            result.innerText = Number(firstNumber) / Number(secondNumber)
        }
        prev = firstNumber + " " + operation + " " + secondNumber + " = " + result.innerText
        if(localStorage.getItem("") == null){
            localStorage.setItem("Lịch sử tính toán",  + prev)
        } else{
        localStorage.setItem("Lịch sử tính toán", localStorage.getItem("Lịch sử tính toán") + "\n" + "# " + prev)}
        history.innerText = localStorage.getItem("Lịch sử tính toán")
    }
    
})


let del = document.querySelector(".delete")
del.addEventListener("click", function(){
    if(freeze == false){
    if(latestChange == "firstNumber"){
        firstNumber = firstNumber.slice(0, -1);
        screen.innerText = screen.innerText.slice(0, -1)
    } else if(latestChange == "secondNumber"){
        secondNumber = secondNumber.slice(0, -1);
        screen.innerText = screen.innerText.slice(0, -1)
        if(secondNumber.length == 0){latestChange = "operation"}
    } else if(latestChange == "operation"){
        operation = ""
        latestChange = "firstNumber"
        screen.innerText = firstNumber;
        switchNumber = false;
    }
    }
})

