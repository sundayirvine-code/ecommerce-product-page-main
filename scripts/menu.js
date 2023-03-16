/* collect all variables */
const menu_bg = document.querySelector(".mob-menu-bg");
const menu_bar = document.querySelector(".mobile-menu");
const close = document.querySelector(".close-menu");
const open = document.querySelector(".menu")
const background = document.querySelector(".mob-menu-bg");
const b = document.querySelector("body");

//menu_bar is initially hidden
menu_bar.style.display = "none";
background.style.display = "none";

// click event on open
open.addEventListener("click", ()=>{
    //hide open
    open.style.display = "none";

    //display close
    close.style.display = "block";

    // display background and menu
    background.style.display = "block";
    menu_bar.style.display = "grid";

    // style the main page with an overlay
    b.classList.add("overlay");
})


//click event on close
close.addEventListener("click", ()=>{
    //display open
    open.style.display = "block";

    //hide close
    close.style.display = "none";

    // hide background and menu
    menu_bar.style.display = "none";
    background.style.display = "none";

    // remove overlay on main page
    b.classList.remove("overlay");
})