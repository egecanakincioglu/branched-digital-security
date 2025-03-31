import { setCurrentYear } from './utils/set-current-year.js';

fetch("/components/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    import('./utils/theme-toggle.js').then((module) => {
      const initThemeToggle = module.default;
      initThemeToggle();
    });

    import('./utils/navbar-toggle.js').then((module) => {
      const initNavbarToggle = module.default;
      initNavbarToggle();
    });
  });

fetch("/components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
    setCurrentYear();
  });