// le module global qui gere toute l'appli est généralement appelé app
const app = {
    // la méthode de lancement de tous les init est la méthode init
    init: function () {
        // on appelle la méthode init du module theme pour placer l'ecouteur d'evenement
        theme.init();
        // on appelle la fonction qui load les images
        slider.init();
        // on appelle la méthode init du module newsletter pour placer les ecouteurs d'evenement
        newsletter.init();
        // on appelle le init du module de gestion des cartes destination
        destinations.init();
    },
};

// avant de lancer la méthode init() de toute l'appli on va attendre le chargment complet de la page avec un écouteur sur DOMContentLoaded
//  https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", app.init());
