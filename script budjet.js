// Fonction pour valider les champs avant envoi
function validateForm() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var solde = document.getElementById("number").value;
    var objectifs = document.getElementById("gout").value;

    // Vérifier que les champs essentiels sont remplis
    if (nom === "" || prenom === "" || email === "" || solde === "" || objectifs === "") {
        alert("Tous les champs doivent être remplis.");
        return false;
    }

    // Vérifier que le solde est un nombre positif
    if (isNaN(solde) || solde <= 0) {
        alert("Veuillez entrer un solde valide.");
        return false;
    }

    // Si tout est valide, on peut envoyer le formulaire
    alert("Votre budget a été créé avec succès !");
    return true; // Envoie du formulaire
}

// Ajouter un événement au formulaire
document.querySelector("form").onsubmit = function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Empêche l'envoi du formulaire si la validation échoue
    }
};

