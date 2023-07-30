
// let name = "Nguyễn Danh Phương";
// let splitFunction = name.split("");
// console.log(splitFunction);
;

let moreBTN = document.querySelector(".more");
let toggle = document.querySelector(".toggle");
let all = document.querySelector(".all");

moreBTN.addEventListener("mouseover", function () {
  all.style.display = "block";
});

moreBTN.addEventListener("mouseout", function () {
    all.style.display = "none";
});


