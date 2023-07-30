let input = document.querySelector("#myInput");
let filter = input.ariaValueMax.toUpperCase();
let ul = document.getElementById("myUL");
let li = ul.getElementsByTagName("li");

input.addEventListener("keyup", function () {
  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
