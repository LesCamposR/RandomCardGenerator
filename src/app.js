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
let icons = ["\u2665", "\u2660", "\u2663", "\u2666"];
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
  "a"
];
console.log(icons);
