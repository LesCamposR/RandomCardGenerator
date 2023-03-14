/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let number = document.querySelector(".number");
let topSuit = document.querySelector(".top-suit");
let bottomSuit = document.querySelector(".bottom-suit");

let numbers = [
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
let icons = ["♦ ", "♥ ", "♠ ", "♣"];

window.onload = function() {
  //write your code here
  //Hearts, Spades, Clubs and Diamonds
  console.log("Everything is working!");
  document.querySelector("button").addEventListener("click", execute);
};

const execute = () => {
  console.log("clicked");
  number.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];
  let iconchoosen = icons[Math.floor(Math.random() * icons.length)];
  //iconchoosen == 0 || iconchoosen = 1 ? "redSymbol" : "blackSymbol";
  topSuit.innerHTML = iconchoosen;
  bottomSuit.innerHTML = iconchoosen;
};
