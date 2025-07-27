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
const track = document.querySelector(".carousel-track");
const images = track.querySelectorAll("img");
const imageWidth = 400 + 20; // 400px width + 20px gap
const visibleCount = 5;
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  const maxIndex = images.length - visibleCount;
  if (currentIndex > maxIndex) currentIndex = 0;

  const offset = -currentIndex * imageWidth;
  gsap.to(track, {
    x: offset,
    duration: 0.5,
    ease: "power2.inOut"
  });
}, 2000);
