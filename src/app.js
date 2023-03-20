/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Hearts, Spades, Clubs and Diamonds
  console.log("Everything is working!");
  document.querySelector("button").addEventListener("click", execute);
};

let number = document.querySelector(".number");
let topSuit = document.querySelector(".top-suit");
let bottomSuit = document.querySelector(".bottom-suit");

const execute = () => {
  let icons = ["♦ ", "♥ ", "♠ ", "♣"];
  let Numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];
  console.log("clicked");
  number.innerHTML = Numbers[Math.floor(Math.random() * Numbers.length)];
  let iconchoosen = icons[Math.floor(Math.random() * icons.length)];

  topSuit.innerHTML = iconchoosen;
  bottomSuit.innerHTML = iconchoosen;
};
