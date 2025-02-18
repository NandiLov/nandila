document.addEventListener("DOMContentLoaded", function () {
  // Select all project cards (both ux-project-card and project-card)
  const projectCards = document.querySelectorAll(".ux-project-card, .project-card");

  projectCards.forEach((card) => {
      const prototypeButton = card.querySelector(".prototype-btn");
      const caseStudyButton = card.querySelector(".case-study-btn");
      const prototypeContainer = card.querySelector(".prototype-container");
      const caseStudyContainer = card.querySelector(".case-study-container");

      if (prototypeButton) {
          prototypeButton.addEventListener("click", function () {
              // Hide all other prototype embeds
              document.querySelectorAll(".prototype-container").forEach(container => {
                  if (container !== prototypeContainer) container.style.display = "none";
              });

              // Toggle the selected prototype embed
              prototypeContainer.style.display = prototypeContainer.style.display === "block" ? "none" : "block";
          });
      }

      if (caseStudyButton) {
          caseStudyButton.addEventListener("click", function () {
              // Hide all other case study embeds
              document.querySelectorAll(".case-study-container").forEach(container => {
                  if (container !== caseStudyContainer) container.style.display = "none";
              });

              // Toggle the selected case study embed
              caseStudyContainer.style.display = caseStudyContainer.style.display === "block" ? "none" : "block";
          });
      }
  });
});
