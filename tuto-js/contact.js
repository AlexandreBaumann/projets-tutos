document.getElementById("formulaire").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission classique du formulaire

    // Récupère les données du formulaire
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.querySelector("textarea[name='message']").value;

    // Affiche les données du formulaire dans la console
    console.log("Prénom:", prenom);
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Message:", message);
});