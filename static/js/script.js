document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mainNav = document.querySelector(".main-nav");

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener("click", function() {
            mainNav.classList.toggle("active");
            const isExpanded = mainNav.classList.contains("active");
            hamburgerMenu.setAttribute("aria-expanded", isExpanded);
            if (isExpanded) {
                hamburgerMenu.setAttribute("aria-label", "Fechar menu");
            }
            else {
                hamburgerMenu.setAttribute("aria-label", "Abrir menu");
            }
        });
    }

    // Close menu when a link is clicked (optional, good for single-page sites)
    const navLinks = document.querySelectorAll(".main-nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mainNav.classList.contains("active")) {
                mainNav.classList.remove("active");
                hamburgerMenu.setAttribute("aria-expanded", "false");
                hamburgerMenu.setAttribute("aria-label", "Abrir menu");
            }
        });
    });
});
