const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

//       main toggle

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
})


