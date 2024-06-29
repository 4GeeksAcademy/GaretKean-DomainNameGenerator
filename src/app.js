import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pro = ["the", "our", "their"];
  let adj = ["great", "big", "sexy"];
  let noun = ["jogger", "racoon", "turd"];
  let loc = [".com", ".us", ".eu", ".edu"];
  let container = document.getElementById("generated-strings");
  for (let i = 0; i < pro.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < loc.length; l++) {
          let generatedString = pro[i] + adj[j] + noun[k] + loc[l];
          let p = document.createElement("p");
          p.textContent = generatedString;
          container.appendChild(p);
        }
      }
    }
  }
};
