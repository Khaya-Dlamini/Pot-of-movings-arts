window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("scrolling", window.scrollY > 0);
    }
});
