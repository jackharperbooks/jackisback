document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const links = document.querySelectorAll("nav a");
  const rainbow = document.getElementById("rainbow-overlay");
  const toggleRainbow = document.getElementById("toggle-rainbow");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const current = document.querySelector(".page.active");
      const next = document.getElementById(targetId);

      if (current !== next) {
        current.classList.remove("active");
        current.classList.add("flipping");

        setTimeout(() => {
          current.classList.remove("flipping");
        }, CONFIG.flipDuration);

        next.classList.add("active");
      }
    });
  });

  toggleRainbow.addEventListener("click", () => {
    CONFIG.rainbowEnabled = !CONFIG.rainbowEnabled;
    rainbow.style.display = CONFIG.rainbowEnabled ? "block" : "none";
  });
});

