  const nav = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");

  // Create mobile menu dynamically
  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("mobile-menu");
  mobileMenu.innerHTML = document.querySelector(".nav-links").innerHTML;
  nav.appendChild(mobileMenu);

  // Toggle menu
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Close menu when a menu item is clicked
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "div") {
      nav.classList.remove("active");
    }
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });


  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });

