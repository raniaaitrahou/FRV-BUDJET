document.addEventListener("DOMContentLoaded", function() {
    // Exemples d'interactions JavaScript (comme une alerte ou un changement de style)
    
    // Exemple : Affichage d'une alerte après un certain délai
    setTimeout(function() {
        alert("Découvrez nos nouveaux conseils et astuces pour mieux gérer votre budget !");
    }, 5000); // Affiche l'alerte après 5 secondes

    // Exemple : Application d'un effet sur les liens (simuler un hover personnalisé via JavaScript)
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#45a049'; // Change la couleur du lien au survol
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#4CAF50'; // Remet la couleur d'origine
        });
    });
});
