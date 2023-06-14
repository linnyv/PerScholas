let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const vinnyD =document.querySelector("#main-title");
vinnyD.textContent = "DOM T.'s life ";

  // Part 2

document.body.style.backgroundColor = "#f62e70";

  // Part 3

  const listOfFav = document.querySelector("#favorite-things");
  listOfFav.removeChild(listOfFav.lastElementChild);

  // Part 4

  const specialTitle = document.querySelectorAll(".special-title");
  specialTitle.forEach(function (element) {
    element.style.fontSize = "2rem";
  });

  // Part 5

  const areasOfRacing = document.querySelector("#past-races");
  const notSpeedRacer = areasOfRacing.querySelector("li:nth-child(4)");
  areasOfRacing.removeChild(notSpeedRacer);


  // Part 6

  const iDidRaceHere = document.createElement("li");
  iDidRaceHere.textContent = "Cuba";
  areasOfRacing.append(iDidRaceHere);

  // Part 7

  const postAboutCRace = document.createElement("div");
  postAboutCRace.classList.add("blog-post"); // h1 attributes are not showing up
  const postAboutCRaceHeader = document.createElement("h2");
  postAboutCRaceHeader.textContent = "Cuba";
  const postAboutCRaceBody = document.createElement("p");
  postAboutCRaceBody.textContent =
    "I RACED IN MY COUSIN'S CAR, WRECKED, BUT LETTY SAW ME WIN!";
  postAboutCRace.append(postAboutCRaceHeader);
  postAboutCRace.append(postAboutCRaceBody);
  const mainPost = document.querySelector(".main");
  mainPost.append(postAboutCRace);

  // Part 8

  const quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener("click", randomQuote);

  // Part 9

  const speedRacerDiary = document.querySelectorAll(".blog-post");
  speedRacerDiary.forEach(function (post) {
    post.addEventListener("mouseenter", function () {
      post.classList.toggle("red");
    });
    post.addEventListener("mouseout", function () {
      post.classList.toggle("purple");
    });
  });
});
