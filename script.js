function choisirclub() {
  let choix = prompt("Choisissez un club entre Liverpool et Arsenal");

  while (choix !== "Liverpool" && choix !== "Arsenal") {
    alert("Choix invalide. Veuillez choisir entre Liverpool et Arsenal.");
    choix = prompt("Choisissez un club entre Liverpool et Arsenal");
  }

  alert("Choix validé");
  return choix;
}

function choisirJoueur(club) {
  let joueurLiverpool = ["Salah", "Gomez", "Jota"];
  let joueurArsenal = ["Kiwior", "Saka", "White"];

  let listeJoueurs = club === "Liverpool" ? joueurLiverpool : joueurArsenal;

  let choixJoueur = prompt(
    `Choisissez un joueur parmi la liste suivante : ${listeJoueurs.join(", ")}`
  );

  while (!listeJoueurs.includes(choixJoueur)) {
    alert("Choix invalide. Veuillez choisir un joueur de la liste.");
    choixJoueur = prompt(
      `Choisissez un joueur parmi la liste suivante : ${listeJoueurs.join(
        ", "
      )}`
    );
  }

  alert("Choix de joueur validé");
  return choixJoueur;
}

function choisirMeilleurJoueur(club) {
  let joueurLiverpool = ["Salah", "Gomez", "Jota"];
  let joueurArsenal = ["Kiwior", "Saka", "White"];

  let listeJoueurs = club === "Liverpool" ? joueurLiverpool : joueurArsenal;

  let choixMeilleur = prompt(
    `Selon vous, qui est le meilleur joueur parmi ${listeJoueurs.join(", ")} ?`
  );

  while (!listeJoueurs.includes(choixMeilleur)) {
    alert("Choix invalide. Veuillez choisir un joueur de la liste.");
    choixMeilleur = prompt(
      `Selon vous, qui est le meilleur joueur parmi ${listeJoueurs.join(
        ", "
      )} ?`
    );
  }

  alert(`Vous pensez que ${choixMeilleur} est le meilleur joueur de ${club}.`);
  return choixMeilleur;
}

function processusDeSélection() {
  let clubChoisi = choisirclub();
  console.log("Vous avez choisi le club : " + clubChoisi);

  let joueurChoisi = choisirJoueur(clubChoisi);
  console.log("Vous avez choisi le joueur : " + joueurChoisi);

  let meilleurJoueur = choisirMeilleurJoueur(clubChoisi);
  console.log("Vous pensez que le meilleur joueur est : " + meilleurJoueur);

  return {
    club: clubChoisi,
    joueur: joueurChoisi,
    meilleurJoueur: meilleurJoueur,
  };
}

// Utilisation de la fonction principale
let résultat = processusDeSélection();
console.log("Résumé de vos choix :", résultat);
