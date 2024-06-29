/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// let pronoun = ["the", "our"];
// let adj = ["great", "big"];
// let noun = ["jogger", "racoon"];

// for (pronoun = 0; pronoun < pronoun.length; pronoun++) {
// for (adj = 0; adj < adj.length; adj++) {
// for (noun = 0; noun < noun.length; noun++) {}
// }
// console.log(pronoun + adj + noun);
// }
// window.onload = function() {
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (i = 0; i < pronoun.length; i++) {
  for (j = 0; j < adj.length; j++) {
    for (k = 0; k < noun.length; k++) {
      console.log("${pronoun[i]} + ${adj[j]} + ${noun[k]}.com");
    }
  }
}

// };
