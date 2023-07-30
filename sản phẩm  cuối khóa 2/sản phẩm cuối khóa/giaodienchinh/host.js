let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};

closecart.onclick = () => {
  cart.classList.remove("active");
};
//////////////////////////////////////////////////////

let d = document.getElementById("day");
setInterval(function () {
  let t = new Date();
  let d1 = t.getDay();
  let h = t.getHours();
  let m = t.getMinutes();
  let s = t.getSeconds();

  if (d1 == 0) {
    d.innerText = "SU";
  } else if (d1 == 1) {
    d.innerText = "MO";
  } else if (d1 == 2) {
    d.innerText = "TU";
  } else if (d1 == 3) {
    d.innerText = "WE";
  } else if (d1 == 4) {
    d.innerText = "TH";
  } else if (d1 == 5) {
    d.innerText = "FR";
  } else if (d1 == 6) {
    d.innerText = "SA";
  }
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}, 1000);
//////////////////////////////////////////////////////
let cartContainer = document.querySelector(".list_item_container");
let listButtonInProduct = document.querySelectorAll(".product button");

let getListCart = JSON.parse(localStorage.getItem("listCart"));
console.log(getListCart);
if (getListCart == null) {
  localStorage.setItem("listCart", JSON.stringify([]));
  window.location.reload();
} else {
  for (let i = 0; i < listButtonInProduct.length; i++) {
    listButtonInProduct[i].addEventListener("click", function () {
      console.log(
        listButtonInProduct[i].previousElementSibling.previousElementSibling.src
      );
      console.log(listButtonInProduct[i].parentElement.getAttribute("id"));
      let id = listButtonInProduct[i].parentElement.getAttribute("id");
      getListCart = JSON.parse(localStorage.getItem("listCart"));
      getListCart.push(id);
      localStorage.setItem("listCart", JSON.stringify(getListCart));

      //
      let imgSrc =
        listButtonInProduct[i].parentElement.previousElementSibling
          .firstElementChild.src;
      console.log(imgSrc);
      //
      let newDiv = document.createElement("div");
      newDiv.className = "item_at_cart";
      newDiv.innerHTML = `
        <img src="${imgSrc}"/>
        <h2>${listButtonInProduct[i].previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText}</h2>
        <i class="deleteButton fa-solid fa-trash trash" onClick="deleteBtn(this)"></i>
      `;
      cartContainer.append(newDiv);
    });
  }
}

function deleteBtn(e) {
  e.parentElement.remove();
}
btn - buy.addEventListener;
//////////////////////////////////////////////////////
