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


// let currentIndex = 3;

// function nextCard(n) {
//   showCard(n);  
//   console.log("indexCard " + currentIndex);
// }

// function showCard(n) {
//   currentIndex += n;  
//   let i;
//   let cardList = document.querySelectorAll(".recom-card .card");
//   for (i = 0; i < cardList.length; i++) {
//     cardList[i].style.display = "none";
//   }
//   for (i = currentIndex - 3; i < currentIndex + 1; i++) {
//     if (cardList[i]) {
//       cardList[i].style.display = "block";     
//     }
//   }
//   if (currentIndex <= 0 || currentIndex === 3) {
//     document.querySelector("#recom-prev").style.display = "none";
//   } else {
//     document.querySelector("#recom-prev").style.display = "block";
//   }
//   if (currentIndex >= cardList.length - 1) {
//     document.querySelector("#recom-next").style.display = "none";
//   } else {
//     document.querySelector("#recom-next").style.display = "block";
//   }
// }

// showCard(0);

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
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
