const messages = {
    /* cette méthode permet d'ajouter dans un element parent donné en paramètre un <p> 
    /* @param parentElmt : le parent dans lequel sera inseré la balise <p>
    /* @param textToDisplay : le texte qui sera contenu dans la balise <p>
    */
    addMessageToElmt: function (parentElmt, textToDisplay) {
        //  avant d'afficher un message, on supprime ceux qui existent potentielement deja
        // dans le node parent
        messages.removeMessagesFromElmt(parentElmt);

        // on créé un element p
        const errorElmt = document.createElement("p");
        errorElmt.classList.add("message");
        errorElmt.textContent = textToDisplay;
        // on l'ajoute dans le DOM
        parentElmt.prepend(errorElmt);
    },
    //  cette méthode permet de supprimer tous les element p.message d'un node parent donné en paramètre
    removeMessagesFromElmt: function (parentElmt) {
        // si il existe déjà des messages d'erreur on les supprime
        //  on cherche les elements p du parent et si il en a on les supprime
        // on est pas obligé de faire querySelector sur le document entier, on peut le faire sur n'importe quel element
        const pElmt = parentElmt.querySelector(".message");
        //  si pElmt === null c'est que le query selector n'a pas trouvé de <p> donc on a rien à retirer du DOM
        console.log(pElmt);
        if (pElmt !== null) {
            // si pElmt est différent de null alors c'est qu'un <p> a été trouvé alors on le supprime !
            pElmt.remove();
        }
    },
};
