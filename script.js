// Mobile navigation, project filters, contact form, and current year.
document.addEventListener("DOMContentLoaded", function () {
  // Show the current year automatically in the footer.
  document.querySelectorAll(".current-year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // Open and close the mobile navigation menu.
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", isOpen);
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.textContent = "☰";
      });
    });
  }

  // Filter project cards on the Projects page.
  const filterButtons = document.querySelectorAll(".filter-button");
  const projectCards = document.querySelectorAll(".project-card");
  const projectCount = document.querySelector(".project-count");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const filter = button.dataset.filter;
        let visibleCount = 0;

        filterButtons.forEach(function (item) {
          item.classList.toggle("active", item === button);
        });

        projectCards.forEach(function (card) {
          const categories = card.dataset.category.split(" ");
          const shouldShow = filter === "all" || categories.includes(filter);
          card.hidden = !shouldShow;
          if (shouldShow) visibleCount += 1;
        });

        if (projectCount) {
          projectCount.textContent = "Showing " + visibleCount + (visibleCount === 1 ? " project" : " projects");
        }
      });
    });
  }

  // This demo form opens an email draft; it does not send or store messages.
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const subject = document.querySelector("#subject").value.trim();
      const message = document.querySelector("#message").value.trim();
      const recipient = "your.email@example.com"; // Replace with your real email address.

      const body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
      const mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      const note = document.querySelector("#form-note");
      if (recipient === "your.email@example.com") {
        note.textContent = "Before publishing, replace your.email@example.com in script.js with your real email address. A draft will open in your email app.";
      }
      window.location.href = mailtoLink;
    });
  }
});
