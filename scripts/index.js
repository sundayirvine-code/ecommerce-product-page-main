/* Animate Cart Icon */
const cart_icon = document.querySelector(".cart");
const cart_popup = document.querySelector(".cart-popup");
let notify = document.querySelector(".notify");
let isEmpty = true;
let empty = document.querySelector(".empty");
const cart_image = document.querySelector(".cart-image");
const product_title = document.querySelector(".product-title");
const price_calculation = document.querySelector(".price-calculation");
const checkout = document.querySelector(".checkout");

// add event listener on cart icon
cart_icon.addEventListener("click", function pop_up(){
    cart_popup.classList.toggle("show-cart");

    /* Empty cart */
    if (isEmpty){
        empty.style.display = "block";
        cart_image.style.display = "none";
        price_calculation.style.display = "none";
        product_title.style.display = "none";
        checkout.style.display = "none";
    }
    else{
        empty.style.display = "none";
        cart_image.style.display = "block";
        price_calculation.style.display = "block";
        product_title.style.display = "block";
        checkout.style.display = "block";
    }
})

// add event listener on notify icon
notify.addEventListener("click",function pop_up(){
    cart_popup.classList.toggle("show-cart");

    /* Empty cart */
    if (isEmpty){
        empty.style.display = "block";
        cart_image.style.display = "none";
        price_calculation.style.display = "none";
        product_title.style.display = "none";
        checkout.style.display = "none";
    }
    else{
        empty.style.display = "none";
        cart_image.style.display = "block";
        price_calculation.style.display = "block";
        product_title.style.display = "block";
        checkout.style.display = "block";
    }
})


/* Allow user to Increase and decrease qty */
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const qty = document.querySelector(".qty");
let item_qty = 0;

// click event on plus
plus.addEventListener("click", ()=>{
    item_qty++;
    qty.innerHTML = item_qty;
})

// click event on minus
minus.addEventListener("click", ()=>{
    if (item_qty > 0){
        item_qty--;
    } 
    qty.innerHTML = item_qty;
})



/* add event on add_to_cart btn */
const add_to_cart_btn = document.querySelector(".add-to-cart");
add_to_cart_btn.addEventListener("click", function add_to_cart(){
    let cart_qty = document.querySelector(".cart-qty");
    let cart_total = document.querySelector(".cart-total");
    let notify = document.querySelector(".notify");

    // if cart popup was open close it
    if (cart_popup.hasAttribute("class","show-cart")) {
        cart_popup.classList.remove("show-cart");
    }
    //only add when quantity is > 0
    if (item_qty > 0)
    {
        notify.innerHTML = item_qty;
        notify.style.display = "block";
        cart_qty.innerHTML =item_qty;
        let t = item_qty * 125;
        cart_total.innerHTML = "$" + t;
        isEmpty = false;
    }
    else{
        alert("Add the quantity of Items");
        isEmpty = true;
        notify.innerHTML = item_qty;
        notify.style.display = "none";
        return;
    }
})

/* add event on del icon */
const del= document.querySelector(".del-icon");

del.addEventListener("click", ()=>{
    isEmpty = true;
    item_qty = 0
    qty.innerHTML = item_qty;
    notify.innerHTML = item_qty;
    notify.style.display = "none";
    empty.style.display = "block";
    cart_image.style.display = "none";
    price_calculation.style.display = "none";
    product_title.style.display = "none";
    checkout.style.display = "none";
})