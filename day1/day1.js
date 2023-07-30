// Bai 1
// function bai1() {
    // Cach 1
    //     let a = prompt("Enter some thing");
    // let b = prompt("Enter some thing");
    // let c = prompt("Enter some thing");
    // let d = prompt("Enter some thing");
    // let e = prompt("Enter some thing");
  
    // let array = [a, b, c, d, e];
    // console.log(array);
  
    // Cach 2:
  
    // let array = [];
    // for (let i = 0; i < 5; i++) {
    //   let value = prompt("Enter value at position " + i);
    //   while (value === "" || value == null) {
    //     // => Neu nhap la null || ""
    //     let newValue = prompt("Enter value at position " + i + " again !"); // => tao bien newValue moi
    //     if (newValue !== "" && newValue != null) {
          // => neu newValue thoa man dk trong if
  //         value = newValue; // => gan cho value bi null thanh value = newValue
  //         break;
  //       }
  //     }
  //     array.push(value);
  //   }
  
  //   console.log(array);
  // }
  // Bai 2
  function bai2() {
    let car = {
      carName: "Civic",
      bran: "Honda",
    };
  
    let arrayObject = [];
    let n = prompt("Enter members ?");
  
    for (let i = 0; i < n; i++) {
      let personNameFromInput = prompt("Enter person's name at " + i + " ?");
      let personAgeFromInput = prompt("Enter person's age at " + i + " ?");
      let person = {
        personName: personNameFromInput,
        personAge: personAgeFromInput,
      };
      arrayObject.push(person);
    }
  
    console.log(arrayObject);
 }

 
 
  
  // let tenCauBai = prompt("Enter bai ");
  // if (tenCauBai == 1) {
  //   bai1();
  // } else if (tenCauBai == 2) {
  //   bai2();
  // } else {
  //   alert("Ban da nhap sai bai");
  // }
  
  // function doSomething(name, age) {
  //   return "My name is " + name + ", I am " + age;
  // }
  // let name = prompt("Enter name");
  // let age = prompt("Enter age");
  // let valueOfFunction = doSomething(name, age);
  // console.log(valueOfFunction);

 
 
 
 //////b1////
  // Làm 1 chức năng tính toán cho phép người dùng nhập +/-/x/: từ prompt. Khi người dùng nhập đúng dấu, gọi function tính tương ứng. Có thể khai báo 2 biến đó trong từng function 1. (VD: cong(1, 2) tính ra 1 + 2)
  /////b2////
  // Lấy những đối tượng tạo ra được từ bài 2, tính xem tuổi của từng đối tượng đã đủ tuổi nghỉ hưu chưa.
  /////b3/////
  // In các số từ 1 - 20 trên 1 dòng 
  //////b4////
  // Yêu cầu người dùng nhập 2 số a và v từ ngoài vào rồi in ra các số nằm trong khoảng đó.
  /////b5////
  // Tính tổng các số từ trong a -> b
  ////b6/////
  // Tính giai thừa của số 5
  //////////////////////////////////////////////////
 
 
 
  ///////1//////////////
  
  // let e = prompt("Nhập phép tính")
  
  
  
  
  
  
  
  // let a = prompt("Nhập số đầu ")
  // let b = prompt("Nhập số cuối")
  
  // for(let i = a; i <= b ; i++){
  //   t = t+i ;
  //   }
  //   console.log("Tổng t = " , t );


  // for(let i = a; i <= b ; i++){
  //   t = t-i ;
  //   }
  //   console.log("Hiệu =  " , t );


  // for(let i = a; i <= b ; i++){
  //    t = t*i ;
  //    }
  //    console.log("Tích =" , t );


  
   
  
  
  ///////////////////2///////////////
    // let n = prompt("Enter members ?");
    // for (let i = 0; i < n; i++) {
    //   let personNameFromInput = prompt("Enter person's name at " + i + " ?");
    //   let personAgeFromInput = prompt("Enter person's age at  " + i + " ?");{
    //     if(personAgeFromInput > 55){
    //           console.log("Tuổi Nghỉ Hưu");
    //       } else if (personAgeFromInput < 55 ){
    //           console.log("Chưa Đến tuổi nghỉ hưu");
    //     }
    //   }
    
    












  /////////////////////////////////////

  ///////3///////
  // var array = [];
  // for(var i = 1; i <= 20; i++)
  // {
  //    array.push(i);
  // }
  // console.log(array.join(','));
  //////////////////



  /////4////////////////////
  // let a = Number(prompt("Enter a ?"));
  // let v = Number(prompt("Enter v ?"));
  //     for(let i = a ; i <= v ; i++ ) {
  //       console.log(i);
  //     }
  ///////////////////


  /////////////////5////////////////

//  let t = 0 ;
//  let a;
//  let b;

//  a = Number(prompt("Enter a"))
//  b = Number(prompt("Enter b"))

//  for(let i = a; i <= b ; i++){
//  t = t+i ;
//  }
//  console.log("Tổng t = " , t );


/////////////6///////////
//  let t = 1;
// for(let i = 1;i <= 5 ; i++ ) (
//     t = t * i
// )
// console.log(t);
/////////////////////////////