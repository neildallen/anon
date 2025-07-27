// GSAP Animations
window.onload = () => {
  gsap.from(".logo", { y: -100, opacity: 0, ease: "bounce", duration: 1 });

  // Title stagger animation (each letter)
  gsap.to("#anon-title span", {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out"
  });

  // Social buttons bounce in
  gsap.from(".social-btn", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
    stagger: 0.2,
    delay: 1
  });

  // CA block slide-in and bounce
  gsap.from(".ca-block", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.to(".ca-block", {
    y: -10,
    duration: 0.3,
    delay: 0.8,
    ease: "bounce.out"
  });

  // Carousel fade-in
  gsap.to(".carousel", {
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: "power1.out"
  });

  // Add hover wobble to carousel images
  const carouselImages = document.querySelectorAll(".carousel-track img");

  carouselImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
      gsap.to(img, {
        rotate: 5,
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power1.out"
      });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(img, {
        rotate: 0,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)"
      });
    });
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

const imageWidth = 300 + 20; // 300px image + 20px gap
const visibleCount = 6;
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
