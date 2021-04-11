/*Dérouler et fermer la navbar quand l'utilisateur clique sur le bouton correspondant*/
function Dérouler() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 