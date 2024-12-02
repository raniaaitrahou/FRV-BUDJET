// Fonction pour simuler une mise à jour dynamique de la barre de progression des objectifs financiers
document.addEventListener("DOMContentLoaded", function() {
    // Valeur dynamique de l'objectif (vous pouvez la modifier selon les données réelles)
    const objectif = 50;  // Par exemple, l'objectif atteint à 50%

    // Sélectionner la barre de progression et ajuster la largeur
    const progressBar = document.querySelector('.progress');
    if (progressBar) {
        progressBar.style.width = `${objectif}%`;
    }

    // Exemple d'alerte sur la page de tableau de bord
    const alertMessage = "Attention : Vous avez atteint 75% de votre budget pour ce mois.";
    setTimeout(function() {
        alert(alertMessage);
    }, 3000); // Affiche l'alerte après 3 secondes
});
