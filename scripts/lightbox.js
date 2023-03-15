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


/*click event on main img to create lightox */
let main_img = document.querySelector(".img");
const light_box = document.querySelector(".light-box");
const body = document.querySelector("body");

main_img.addEventListener("click", ()=>{
    //display lightbox
    light_box.style.display = "grid";

    // style the main page with an overlay
    body.classList.add("overlay");
})

/*click event on close icon to close lightox */
const close_lightbox = document.querySelector(".close-lightbox");

close_lightbox.addEventListener("click", ()=>{
    light_box.style.display = "none";

    // remove overlay on main page
    body.classList.remove("overlay");
})


/* lightbox main image */
const light_img = document.querySelector(".light-img");

/* store product image paths */
const prod1 = "/images/image-product-1.jpg"
const prod2 = "/images/image-product-2.jpg";
const prod3 = "/images/image-product-3.jpg";
const prod4 = "/images/image-product-4.jpg";

/* individual lightbox thumbnails*/
const thumb1 = document.querySelector(".t1");
const thumb2 = document.querySelector(".t2");
const thumb3 = document.querySelector(".t3");
const thumb4 = document.querySelector(".t4");

/* lightbox thumbnails */
let nails = document.querySelectorAll(".thumb");
nails.forEach(thumb=>{
    thumb.addEventListener("click", (event)=>{
        var computedStyle = window.getComputedStyle(thumb);
        var backgroundImage = computedStyle.getPropertyValue("background-image");
        var imageUrl = backgroundImage.slice(backgroundImage.indexOf("(") + 1, backgroundImage.lastIndexOf(")")).replace(/\"/gi, "");
        var imagePath = imageUrl.slice(imageUrl.lastIndexOf("/") + 1);
        var finalPath = imagePath.replace("-thumbnail", "");
        var finalUrl = imageUrl.slice(0, imageUrl.lastIndexOf("/") + 1) + finalPath;
        if (finalUrl.includes('1')){
            box_number = 1;
        }
        if (finalUrl.includes('2')){
            box_number = 2;
        }
        if (finalUrl.includes('3')){
            box_number = 3;
        }
        if (finalUrl.includes('4')){
            box_number = 4;
        }
        light_img.style.backgroundImage = "url(" + finalUrl + ")";

        // Remove red border and whitish overlay from previously selected thumbnail (if any)
        const selectedThumb = document.querySelector('.thumb.selected');
        if (selectedThumb) {
        selectedThumb.classList.remove('selected');
        selectedThumb.classList.remove('whitish-overlay');
        }
        
        // Add  border and whitish overlay to the clicked thumbnail
        thumb.classList.add('selected');
        thumb.classList.add('whitish-overlay');
    })
})

// the firstthumbnail should always be selected
document.querySelector(".t1").classList.add('selected');

function switch_lightbox(box_number){
    // Remove red border and whitish overlay from previously selected thumbnail (if any)
    const selectedThumb = document.querySelector('.thumb.selected');
    if (selectedThumb) {
    selectedThumb.classList.remove('selected');
    selectedThumb.classList.remove('whitish-overlay');
    }
    switch (box_number) {
        case 1:
            light_img.style.backgroundImage = "url(" + prod1 + ")";
            document.querySelector(".t1").classList.add('selected');
            break;
        case 2:
            light_img.style.backgroundImage = "url(" + prod2 + ")";
            document.querySelector(".t2").classList.add('selected');
            break;
        case 3:
            light_img.style.backgroundImage = "url(" + prod3 + ")";
            document.querySelector(".t3").classList.add('selected');
            break;
        
        case 4:
            light_img.style.backgroundImage = "url(" + prod4 + ")";
            document.querySelector(".t4").classList.add('selected');
            break;
        
        default:
            break;
    }
}



let box_number = 1; // decides which image is displayed

/* click event on next button */
const icon_next = document.querySelector(".icon-next");
icon_next.addEventListener("click", ()=>{
    box_number++;
    if (box_number > 4){
        box_number = 1
    }
    switch_lightbox(box_number); 
})

/* click event on prev button */
const icon_prev = document.querySelector(".icon-previous");
icon_prev.addEventListener("click", ()=>{
    box_number--;
    if (box_number <= 0){
        box_number = 4
    }
    switch_lightbox(box_number); 
})
