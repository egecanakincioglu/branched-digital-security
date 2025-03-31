const initThemeToggle = () => {
  const toggleBtn = document.querySelector(".theme-toggle");

  let themeLink = document.getElementById("theme-style");

  if (!themeLink) {
    themeLink = document.createElement("link");
    themeLink.id = "theme-style";
    themeLink.rel = "stylesheet";
    document.head.appendChild(themeLink);
  }

  const savedTheme = localStorage.getItem("theme") || "default";
  setTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = themeLink.href.includes("dark") ? "dark" : "default";
    const newTheme = currentTheme === "dark" ? "default" : "dark";
    setTheme(newTheme);
  });

  function setTheme(themeName) {
    document.body.classList.add("theme-transition");

    themeLink.href = `/assets/css/shared/theme/${themeName}-theme.css`;
    localStorage.setItem("theme", themeName);

    const logo = document.querySelector(".logo img");
    if (logo) {
      logo.src =
        themeName === "dark"
          ? "/assets/img/branched-darkmode-logo.png"
          : "/assets/img/branched-main-logo.png";
    }

    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 400);
  }
};

export default initThemeToggle;