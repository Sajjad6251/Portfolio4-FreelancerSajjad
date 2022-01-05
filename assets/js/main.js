const navMenu=document.getElementById("nav_menu"),navToggle=document.getElementById("nav_toggle"),navClose=document.getElementById("nav_close");navToggle&&navToggle.addEventListener("click",()=>{navMenu.classList.add("show_menu")}),navClose&&navClose.addEventListener("click",()=>{navMenu.classList.remove("show_menu")});const navLink=document.querySelectorAll(".nav_link");function linkAction(){document.getElementById("nav_menu").classList.remove("show_menu")}navLink.forEach(e=>e.addEventListener("click",linkAction));const modalViews=document.querySelectorAll(".services_modal"),modalBtns=document.querySelectorAll(".services_button"),modalCloses=document.querySelectorAll(".services_modal_close");let modal=function(e){modalViews[e].classList.add("active_modal")};modalBtns.forEach((e,t)=>{e.addEventListener("click",()=>{modal(t)})}),modalCloses.forEach(e=>{e.addEventListener("click",()=>{modalViews.forEach(e=>{e.classList.remove("active_modal")})})});let swiperPortfolio=new Swiper(".portfolio_container",{cssMode:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:!0}),swiperTestimonial=new Swiper(".testimonial_container",{loop:!0,grabCursor:!0,spaceBetween:48,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},keyboard:!0,breakpoints:{568:{slidesPreView:2}}});const sections=document.querySelectorAll("section[id]");function scrollActive(){const e=window.pageYOffset;sections.forEach(t=>{const o=t.offsetHeight,n=t.offsetTop-50;sectionId=t.getAttribute("id"),e>n&&e<=n+o?document.querySelector(".nav_menu a[href*="+sectionId+"]").classList.add("active-link"):document.querySelector(".nav_menu a[href*="+sectionId+"]").classList.remove("active-link")})}function scrollHeader(){const e=document.getElementById("header");this.scrollY>=80?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}function scrollUp(){const e=document.getElementById("scroll-up");this.scrollY>=560?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",scrollActive),window.addEventListener("scroll",scrollHeader),window.addEventListener("scroll",scrollUp);const themeButton=document.getElementById("theme-button"),darkTheme="dark-theme",iconTheme="uil-sun",selectedTheme=localStorage.getItem("selected-theme"),selectedIcon=localStorage.getItem("selected-icon"),getCurrentTheme=()=>document.body.classList.contains(darkTheme)?"dark":"light",getCurrentIcon=()=>themeButton.classList.contains("uil-sun")?"uil-moon":"uil-sun";selectedTheme&&(document.body.classList["dark"===selectedTheme?"add":"remove"](darkTheme),themeButton.classList["uil-moon"===selectedIcon?"add":"remove"]("uil-sun")),themeButton.addEventListener("click",()=>{document.body.classList.toggle(darkTheme),themeButton.classList.toggle("uil-sun"),localStorage.setItem("selected-theme",getCurrentTheme()),localStorage.setItem("selected-icon",getCurrentIcon())});
