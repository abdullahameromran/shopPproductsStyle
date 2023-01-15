let productBox = document.querySelector(".product-box");
let addCart = document.querySelector(".add-cart");


productBox.onfocus = () => {
    addCart.style.padding = "10px";
}