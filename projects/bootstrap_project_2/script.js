const sections = document.querySelectorAll(".scroll-section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6, // Adjust depending on when you want the section to be considered "active"
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.classList.add("shadow");
});
