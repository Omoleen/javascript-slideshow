var current = 0;
var slides = document.querySelectorAll(".slide");
var total = slides.length;

var nextButton = document.querySelector("#next");
var prevButton = document.querySelector("#previous");

nextButton.addEventListener("click", function () {
  current += 1;
  console.log(current);
  console.log("NEXT");

  if (current >= total) {
    current = 1;
    console.log(current);
  }

  for (var i = 0; i < total; i++) {
    slides[i].style.display = "none";
  }

  slides[current].style.display = "block";
});

prevButton.addEventListener("click", function () {
  current -= 1;
  console.log(current);
  console.log("PREVIOUS");

  if (current < 1) {
    current = total - 1;
    // console.log(current);
  }

  for (var i = 0; i < total; i++) {
    slides[i].style.display = "none";
  }

  slides[current].style.display = "block";
});

function slideShow() {
  current += 1;
  console.log(current);

  for (var i = 0; i < total; i++) {
    slides[i].style.display = "none";
  }

  if (current >= total) {
    current = 0;
  }

  slides[current].style.display = "block";
}

setInterval(slideShow, 5000);
