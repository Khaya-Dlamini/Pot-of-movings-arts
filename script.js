  // menu-icon
  function toggleMenu() {
    document.querySelector(".mobile-nav").classList.toggle("active");
  }

  // Close menu when a link is clicked
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile-nav").classList.remove("active");
  });
});

