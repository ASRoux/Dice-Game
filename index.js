function randomDice() {

  var ranNum1 = Math.floor(Math.random() * 6) + 1;

  var ranNum2 = Math.floor(Math.random() * 6) + 1;

    if (ranNum1 === 1) {
      document.querySelector("img." + "img1").setAttribute("src", "images/dice1.png");
    }
    if (ranNum2 === 1) {
      document.querySelector("img." + "img2").setAttribute("src", "images/dice1.png");
    }
    if (ranNum1 === 2) {
      document.querySelector("img." + "img1").setAttribute("src", "images/dice2.png");
    }
    if (ranNum2 === 2) {
      document.querySelector("img." + "img2").setAttribute("src", "images/dice2.png");
    }
    if (ranNum1 === 3) {
      document.querySelector("img." + "img1").setAttribute("src", "images/dice3.png");
    }
    if (ranNum2 === 3) {
      document.querySelector("img." + "img2").setAttribute("src", "images/dice3.png");
    }
    if (ranNum1 === 4) {
      document.querySelector("img." + "img1").setAttribute("src", "images/dice4.png");
    }
    if (ranNum2 === 4) {
      document.querySelector("img." + "img2").setAttribute("src", "images/dice4.png");
    }
    if (ranNum1 === 5) {
      document.querySelector("img." + "img1").setAttribute("src", "images/dice5.png");
    }
    if (ranNum2 === 5) {
      document.querySelector("img." + "img2").setAttribute("src", "images/dice5.png");
    }
    if (ranNum1 === 6) {
      document.querySelector("img." + "img1").setAttribute("src", "images/dice6.png");
    }
    if (ranNum2 === 6) {
      document.querySelector("img." + "img2").setAttribute("src", "images/dice6.png");
    }
    if (ranNum1 === ranNum2) {
      document.querySelector("h1").innerHTML = "Draw!";
    }
}
