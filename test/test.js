// Phần của Lâm ở dưới này nhé
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
        listButtonInProduct[i].previousElementSibling.previousElementSibling
          .src;
      //
      let newDiv = document.createElement("div");
      newDiv.className = "item_at_cart";
      newDiv.innerHTML = `
        <img src=${imgSrc}/>
        <h2>${listButtonInProduct[i].previousElementSibling.innerText}</h2>
        <div class="deleteButton" onClick="deleteBtn(this)">X</div>
      `;
      cartContainer.append(newDiv);
    });
  }
}

function deleteBtn(e) {
  e.parentElement.remove();
}
