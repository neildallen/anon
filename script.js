// GSAP Animations
window.onload = () => {
  gsap.from(".logo", { y: -100, opacity: 0, ease: "bounce", duration: 1 });
  // gsap.to(".animated-bg", {
  //   backgroundPosition: "200% 0%",
  //   duration: 5,
  //   ease: "linear",
  //   repeat: -1
  // });
  gsap.to("#anon-title span", {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.5,
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

  gsap.from(".ca-block", {
    x: -500,              // starts offscreen left
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.to(".ca-block", {
    y: -10,               // bounce up slightly
    duration: 0.3,
    delay: 0.8,           // wait until first slide-in finishes
    ease: "bounce.out"
  });
  gsap.to(".carousel", {
    opacity: 1,
    duration: 1,
    delay: 1,         // 1-second delay before fade starts
    ease: "power1.out"
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
// Simple Carousel
const track = document.querySelector(".carousel-track");
const images = track.querySelectorAll("img");

const imageWidth = 300 + 20; // 300px image + 20px gap
const visibleCount = 6;      // show 6 images at a time
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

