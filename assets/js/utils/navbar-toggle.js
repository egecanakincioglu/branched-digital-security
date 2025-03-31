const initNavbarToggle = () => {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    console.log("Navbar toggle loaded!");
  
    if (!toggleBtn || !navMenu) return;
  
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  };
  
  export default initNavbarToggle;