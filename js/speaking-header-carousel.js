document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("speaking-header");

  if (!header) return;

  const images = [
    "assets/img/headers/header-speaking1.jpg",
    "assets/img/headers/header-speaking3.jpg",
    "assets/img/headers/header-speaking4.jpg",
    "assets/img/headers/header-speaking5.jpg"
  ];

  let currentIndex = 0;

  setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    header.style.backgroundImage = "url('" + images[currentIndex] + "')";
  }, 4000);
});