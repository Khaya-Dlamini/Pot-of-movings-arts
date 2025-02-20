// window.addEventListener("scroll", () => {
//     const header = document.querySelector("header");
//     if (header) {
//         header.classList.toggle("scrolling", window.scrollY > 0);
//     }
// }); 

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-masthead");
  
    menuIcon.addEventListener("click", function () {
      navMenu.classList.toggle("d-none"); // Show/hide menu
      navMenu.classList.toggle("d-flex"); // Ensure flex styling when visible
    });
  });
  
  
  function toggleMenu() {
    document.querySelector(".mobile-nav").classList.toggle("active");
  }

  // Close menu when a link is clicked
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile-nav").classList.remove("active");
  });
});