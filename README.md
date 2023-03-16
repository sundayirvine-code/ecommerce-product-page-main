# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview
The code implements a web page for an e-commerce product page. The page includes a header section with a logo, navigation menu, and cart icon, as well as a product section that displays the product details, image gallery, and a button to add the product to the shopping cart.
### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it


### Links

- Live Site URL: [E-Commerce product page](https://ecommerce-product-page-main-delta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

I learnt how to manipulate an image's background image url using JS

```js
/* collect thumbnails */
let thumbs = document.querySelectorAll(".thumbnail");

/*click event on each thumbnail */
thumbs.forEach(thumb=>{
    thumb.addEventListener("click", ()=>{
        var computedStyle = window.getComputedStyle(thumb);
        var backgroundImage = computedStyle.getPropertyValue("background-image");
        var imageUrl = backgroundImage.slice(backgroundImage.indexOf("(") + 1, backgroundImage.lastIndexOf(")")).replace(/\"/gi, "");
        var imagePath = imageUrl.slice(imageUrl.lastIndexOf("/") + 1);
        var finalPath = imagePath.replace("-thumbnail", "");
        var finalUrl = imageUrl.slice(0, imageUrl.lastIndexOf("/") + 1) + finalPath;
        main_img.style.backgroundImage = "url(" + finalUrl + ")";
    })
})
```

### Continued development

JS definitley needs more work


## Author

- Website - [Add your name here](https://irvine-sunday-portfolio.vercel.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/sundayirvine-code)
