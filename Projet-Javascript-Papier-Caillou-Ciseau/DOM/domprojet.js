const bouton = document.querySelector(".bouton-abonnement");

if (bouton.innerHTML === `S'abonner`) {
  bouton.innerText = `Abonné !`;
} else {
  bouton.innerText = `S'abonner`;
}
