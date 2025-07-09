document.getElementById("formulaire").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const nom = document.getElementById("nom").value;
  const tel = document.getElementById("telephone").value;
  const voiture = document.getElementById("voiture").value;
  const debut = document.getElementById("dateDebut").value;
  const fin = document.getElementById("dateFin").value;

  const confirmation = `
    Merci ${nom} ! Votre réservation pour la ${voiture} 
    du ${debut} au ${fin} est bien enregistrée. Nous vous contacterons au ${tel}.
  `;

  document.getElementById("confirmation").innerText = confirmation;
  document.getElementById("formulaire").reset();
});

