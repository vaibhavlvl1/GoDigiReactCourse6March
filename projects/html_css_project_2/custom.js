$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<", ">"],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Sticky Header (Fixed after scroll)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-section");
    if (window.scrollY > 100) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  });

  // Smooth Scroll on Navbar Link Click
  const navbarLinks = document.querySelectorAll(".navlink");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const offsetX = parseInt(this.getAttribute("offset-top")) || 0;
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - offsetX;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL hash without jumping
        window.history.pushState(null, null, targetId);
      }
    });
  });

  // smooth scroll on mobile menu

  const moNavbarLinks = document.querySelectorAll(".mo-navlinks");

  moNavbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const offsetX = parseInt(this.getAttribute("offset-top")) || 0;
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - offsetX;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL hash without jumping
        window.history.pushState(null, null, targetId);
      }
    });
  });

  const copyRightYear = new Date().getFullYear();

  document.querySelector(".copy-year").innerHTML = copyRightYear;
});

const toggleBtn = document.querySelector(".toggler");
const mobileMenu = document.querySelector(".mobile-menu-container");

toggleBtn.addEventListener("click", function () {
  if (mobileMenu.style.left === "0px") {
    mobileMenu.style.left = "-100%";
  } else {
    mobileMenu.style.left = "0";
  }
});

const navLinks = document.querySelectorAll(".mobile-link-container a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Close the menu
    mobileMenu.style.left = "-100%";
  });
});
