/*==================================================
  DOM ELEMENTS
==================================================*/



/*==================================================
  MOBILE MENU
==================================================*/



/*==================================================
  SMOOTH SCROLLING
==================================================*/



/*==================================================
  ACTIVE NAVIGATION LINK
==================================================*/



/*==================================================
  HEADER SCROLL EFFECT
==================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/*==================================================
  SCROLL ANIMATIONS
==================================================*/



/*==================================================
  INTERSECTION OBSERVER
==================================================*/



/*==================================================
  HERO ANIMATIONS
==================================================*/

window.addEventListener("load", () => {

    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");

    heroText.style.opacity = "0";
    heroImage.style.opacity = "0";

    heroText.style.transform = "translateX(-40px)";
    heroImage.style.transform = "translateX(40px)";

    setTimeout(() => {

        heroText.style.transition = ".8s ease";
        heroImage.style.transition = ".8s ease";

        heroText.style.opacity = "1";
        heroImage.style.opacity = "1";

        heroText.style.transform = "translateX(0)";
        heroImage.style.transform = "translateX(0)";

    }, 200);

});



/*==================================================
  COUNTER ANIMATIONS (Optional)
==================================================*/



/*==================================================
  BACK TO TOP BUTTON (Optional)
==================================================*/



/*==================================================
  CONTACT BUTTON EFFECTS
==================================================*/



/*==================================================
  INITIALIZE WEBSITE
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    // Initialize Mobile Menu

    // Initialize Smooth Scrolling

    // Initialize Scroll Animations

    // Initialize Active Navigation

    // Initialize Header Effects

});
