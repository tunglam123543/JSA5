// function bai1() {
//     let operationInput = prompt("Enter (+, -, *, /)");
  
//     function plus(a, b) {
//       return a + b;
//     }
  
//     function minus(a, b) {
//       return a - b;
//     }
  
//     function product(a, b) {
//       return a * b;
//     }
  
//     function divide(a, b) {
//       return a / b;
//     }
  
//     if (operationInput == "+") {
//       let n1 = Number(prompt("Enter number 1: "));
//       let n2 = Number(prompt("Enter number 2: "));
//       let count = plus(n1, n2);
//       alert(`Tong 2 so ${n1} + ${n2} = ${count}`);
//     } else if (operationInput == "-") {
//       let n1 = Number(prompt("Enter number 1: "));
//       let n2 = Number(prompt("Enter number 2: "));
//       let count = minus(n1, n2);
//       alert(`Hiệu 2 số ${n1} - ${n2} = ${count}`);
//     } else if (operationInput == "*") {
//       let n1 = Number(prompt("Enter number 1: "));
//       let n2 = Number(prompt("Enter number 2: "));
//       let count = product(n1, n2);
//       alert(`Tích 2 số ${n1} * ${n2} = ${count}`);
//     } else if (operationInput == "/") {
//       let n1 = Number(prompt("Enter number 1: "));
//       let n2 = Number(prompt("Enter number 2: "));
//       let count = divide(n1, n2);
//       alert(`Thương 2 số ${n1} / ${n2} = ${count}`);
//     } else {
//       alert("Error input. Not exits operation");
//     }
//   }
  

// let arrayPerson = [
//     {
//       name: "Vinh",
//       age: 15,
//     },
//     {
//       name: "Lâm",
//       age: 14,
//     },
//     {
//       name: "Đức Anh",
//       age: 12,
//     },
//     {
//       name: "Quý",
//       age: 18,
//     },
//     {
//       name: "Việt Anh",
//       age: 1,
//     },
// ];

//   for (let i = 0; i < arrayPerson.length; i++) {
//     for (let j = 0; j < arrayPerson.length; j++) {
//       if (arrayPerson[i].age < arrayPerson[j].age) {
//         let tempAge = arrayPerson[i];
//         arrayPerson[i] = arrayPerson[j];
//         arrayPerson[j] = tempAge;
//       }
//     }
//   }
//   console.log(arrayPerson);



