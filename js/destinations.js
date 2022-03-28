// dans ce module seront geré tous les fonctionnements de cartes destination

// ecrire le module
const destinations = {
    init: function () {
        // Placer des ecouteurs de click sur les bouton coeur
        const likeBtnList = document.querySelectorAll(".btn__like");

        // placer les ecouteurs d'evenement sur les bouton : on va boucler sur le tableau des bouton et poser autant de listener qu'il y a de boutons (un espion est monotache!)
        for (const likeBtn of likeBtnList) {
            likeBtn.addEventListener("click", destinations.handleLikeClick);
        }
    },
    handleLikeClick: function (event) {
        // méthode appelée à chaque click sur un bouton coeur

        // on recupere le bouton sur lequel on a cliqué avec event.target
        const btnElmt = event.currentTarget;

        // une fois qu'on a le bouton on cherche le plus proche parent qui a la class .card
        // doc ici : https://developer.mozilla.org/fr/docs/Web/API/Element/closest
        //  .closest('.card') récupère le premier ancêtre possédant la classe 'card'
        const cardElmt = btnElmt.closest(".card");

        // on fait appel à la méthode d'affichage des messages du module message
        messages.addMessageToElmt(cardElmt, "Vous devez etre connecté pour liker une destination.");
    },
};
