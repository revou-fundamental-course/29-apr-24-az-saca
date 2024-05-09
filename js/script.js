let slideIndex = 1;
showDivs(1);

function plusDiv(n) {
  showDivs(slideIndex += n);
  console.log("indexSLide " + indexSlide);
  console.log("nilai n =" + n);
}

function showDivs(n) {
  let i;
  let imgList = document.getElementsByClassName("slideshow");
  if (n > imgList.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imgList.length;
  }
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";
}
setInterval(() => plusDiv(1), 10000);


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".card-container");
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

 
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
}); 

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    isValid = false;
  }

  if (subject === "") {
    isValid = false;
  }

  return isValid;
}