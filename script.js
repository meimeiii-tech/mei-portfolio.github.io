
/* =====================================
   PORTFOLIO JAVASCRIPT
===================================== */

// Mobile navigation menu
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Toggle navigation"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after clicking a navigation link
  const navLinks = navigation.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Toggle navigation");
      menuButton.textContent = "☰";
    });
  });
}

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}