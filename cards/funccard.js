let currentOpenCard = null;

function toggleCard(cardNumber) {
  const clickedDescription = document.querySelector(
    ".card:nth-child(" + cardNumber + ") .description"
  );
  clickedDescription.classList.toggle("card-expan");

  if (currentOpenCard === clickedDescription) {
    // if clicked card is already open, close this
    clickedDescription.style.display = "none";
    currentOpenCard = null; // no card is open now
  } else {
    // close any previously opened card if open
    if (currentOpenCard) {
      currentOpenCard.style.display = "none";
    }

    // open clicked card
    clickedDescription.style.display = "block";
    currentOpenCard = clickedDescription; // set current open card
  }
}

function dropout1() {
  let card1 = document.getElementById("card1");
  card1.classList.toggle("card-expan");
}
function dropout2() {
  let card2 = document.getElementById("card2");
  card2.classList.toggle("card-expan");
}
function dropout3() {
  let card3 = document.getElementById("card3");
  card3.classList.toggle("card-expan");
}
function dropout4() {
  let card4 = document.getElementById("card4");
  card4.classList.toggle("card-expan");
}
function dropout5() {
  let card5 = document.getElementById("card5");
  card5.classList.toggle("card-expan");
}
function dropout6() {
  let card6 = document.getElementById("card6");
  card6.classList.toggle("card-expan");
}
