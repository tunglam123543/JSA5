let inputName = document.querySelector("#inputName");
let inputAge = document.querySelector("#inputAge");
let inputEmail = document.querySelector("#inputEmail");



let button = document.querySelector("#dangki");
button.addEventListener("click", function (){
let checkLocal = JSON.parse(localStorage.getItem("Arrayperson"));
if (checkLocal == null ) {
    let emptyArray = [];
    localStorage.setItem("Arrayperson",JSON.stringify(emptyArray));
}
    let person = { 
    name: inputName.value,
    age: inputAge.value,
    email: inputEmail.value,
}  
localStorage.setItem("person" , JSON.stringify(person)); 
console.log(localStorage.getItem("person"));

let getArrayPersonFromLocalStorage = JSON.parse(
    localStorage.getItem("Array person")
  );
  getArrayPersonFromLocalStorage.push(person);
  localStorage.setItem(
    "Array person",
    JSON.stringify(getArrayPersonFromLocalStorage)
  );
    inputName = "";
    inputAge = "";
    inputEmail = "";

})




