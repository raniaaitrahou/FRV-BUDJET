// Script pour afficher une alerte de bienvenue lorsque l'utilisateur clique sur un lien
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        alert('Vous avez cliqué sur : ' + event.target.textContent);
    });
});

// Fonction pour afficher un message de bienvenue au chargement de la page
window.onload = function() {
    alert('Bienvenue sur FRV-BUDGET!');
};
