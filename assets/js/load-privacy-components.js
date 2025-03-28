document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("privacy-content");
    const files = [
      "intro.html",
      "policy.html"
    ];
  
    for (const file of files) {
      const res = await fetch(`/components/privacy/${file}`);
      const html = await res.text();
      container.innerHTML += html;
    }
  
    const elements = document.querySelectorAll(".fade-in-up");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.style.animationDelay || "0s";
          entry.target.style.animation = `fadeInUp 0.8s ease forwards ${delay}`;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(el => observer.observe(el));
  });