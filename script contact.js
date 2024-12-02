document.addEventListener("DOMContentLoaded", function() {
    // Validation du formulaire de contact
    const form = document.querySelector("#contact-form form");
    form.addEventListener("submit", function(event) {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        
        if (!name || !email || !message) {
            event.preventDefault(); // Empêche l'envoi si un champ est vide
            alert("Veuillez remplir tous les champs du formulaire.");
        }
    });
});
