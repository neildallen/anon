// GSAP Animations
window.onload = () => {
  gsap.from(".logo", { y: -100, opacity: 0, ease: "bounce", duration: 1 });

  gsap.to("#anon-title span", {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.from(".social-btn", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
    stagger: 0.2,
    delay: 1
  });
};

// Copy CA functionality
document.getElementById("copy-btn").addEventListener("click", () => {
  const ca = document.getElementById("ca-value").innerText;
  navigator.clipboard.writeText(ca).then(() => {
    alert("Copied CA to clipboard!");
  });
});

// Simple Carousel
let index = 0;
const images = document.querySelectorAll(".carousel-img");

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 2000);
