const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");

let lastScroll = 0;

// Open menu
menuToggle.addEventListener("click", (e)=>{
    e.stopPropagation();
    nav.classList.add("active");
});

// Close menu
closeMenu.addEventListener("click",(e)=>{
    e.stopPropagation();
    nav.classList.remove("active");
});

// Click outside
document.addEventListener("click",(e)=>{
    if(!nav.contains(e.target) && !menuToggle.contains(e.target)){
        nav.classList.remove("active");
    }
});

// Hide / Show header
window.addEventListener("scroll",()=>{

    if(nav.classList.contains("active")) return;

    const currentScroll = window.scrollY;

    if(currentScroll <= 0){
        header.classList.remove("hide");
        return;
    }

    if(currentScroll > lastScroll && currentScroll > 80){
        header.classList.add("hide");
    }else if(currentScroll < lastScroll){
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});
