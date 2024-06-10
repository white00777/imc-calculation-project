const form = document.querySelector(".form");
const btnCalculer = document.getElementById("btnCalculer");
const container = document.querySelector(".container");
const imc = document.getElementById("zoneImc");

/**
 *  Cette fonction calcule l'imc et l'affiche
 * @param {string} poids
 * @param {string} taille
 */
function calculerResultat() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const poids = document.getElementById("poids").value;
    const taille = document.getElementById("taille").value;
    const finalResult = poids / (taille * taille);
    const erreur = document.getElementById("erreur");
    imc.innerText = `${finalResult.toFixed(2)}`;

    if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
      erreur.innerText = "Veuillez entrez un nombre valide";
      zoneImc.innerText = "";
    }
  });
}

btnCalculer.addEventListener("click", function () {
  calculerResultat();
});

// Fonction pour effacer l'ancien resultat au click
function resetImc() {
  imc.innerText = "";
  erreur.innerText = "";
}
effacer.addEventListener("click", function () {
  resetImc();
});

// Effacer au changement sur l'input
form.addEventListener("input", () => {
  const input = document.getElementById('input[type="text"]');
  imc.innerText = "";
  erreur.innerText = "";
});

// Changement de background en fonction de la selection
femme.addEventListener("click", () => {
  if (femme.checked === true) {
    container.style.background = "pink";
  }
});

homme.addEventListener("click", () => {
  if (homme.checked === true) {
    container.style.background = "lightskyblue";
  }
});
