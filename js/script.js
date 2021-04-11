/*Dérouler et fermer la navbar quand l'utilisateur clique sur le bouton correspondant*/
function Dérouler() {
    var x = document.getElementsByClassName("navbar");
    if (x.className === "navbar") 
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  } 