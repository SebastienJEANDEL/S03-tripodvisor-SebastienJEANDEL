const newsletter = {
    //  on déclare une propriété (une variable dans un module) pour qu'elle soit accessible depuis toutes les méthodes du module
    newsletterElmt: document.querySelector(".newsletter"),
    init: function () {
        // la méthode init permet de poser tous les espion: l'initialisation du module

        // Etape 1 on selectionne le lien du menu newsletter
        const menuNewsletterElmt = document.querySelector(".menu__item--newsletter");

        // on pose un ecouteur d'evenement dessus pour espionner le click
        menuNewsletterElmt.addEventListener("click", newsletter.handleNewsletterClick);

        // on recupere le boutn close neswletter
        const closeBtnElmt = document.querySelector(".newsletter__close");

        // on pose un ecouteur d'evenement dessus pour espionner le click
        closeBtnElmt.addEventListener("click", newsletter.handleNewsletterClick);

        // Intercepter l'envoi du formulaire
        // recuperer l'element formulaire sur la page avec sa classe
        const formElmt = document.querySelector(".newsletter__form");

        // on place un espion sur l'evenement 'submit' du formulaire
        formElmt.addEventListener("submit", newsletter.handleNewsletterSubmit);
    },
    handleNewsletterClick: function (event) {
        // on stoppe le comportement par défaut du lien pour ne pas qu'il y ai de redirection
        event.preventDefault();

        // on ajoute la classe newsletter--on sur le aside pour l'afficher !
        newsletter.newsletterElmt.classList.toggle("newsletter--on");
    },
    handleNewsletterSubmit: function (event) {
        const forbiddenDomains = [
            "@yopmail.com",
            "@yopmail.fr",
            "@yopmail.net",
            "@cool.fr.nf",
            "@jetable.fr.nf",
            "@courriel.fr.nf",
            "@moncourrier.fr.nf",
            "@monemail.fr.nf",
            "@monmail.fr.nf",
            "@hide.biz.st",
            "@mymail.infos.st",
        ];

        // on sélectionne le champ dans lequel l'email est inscrit (il possède la classe newsletter__field).
        const newsletterFieldElmt = document.querySelector(".newsletter__field");
        const newsletterFieldValue = newsletterFieldElmt.value;

        // verifier si la valeur est incluse dans une des lignes du tableau des emails jetables
        //  on boucle sur tous les elements du tableau
        for (let forbiddenDomain of forbiddenDomains) {
            //  on compare la ligne forbiddenDomain avec la value de l'utilisateur newsletterFieldValue
            const isForbidden = newsletterFieldValue.includes(forbiddenDomain);
            // si isForbidden est egal à true : l'email fait parti des jetables donc on a pas besoin de continuer plus loin, on sort de la boucle
            //  si isForbidden est true l'email fait parti des jetables et on affiche un message d'erreur.
            console.log(forbiddenDomain, isForbidden);
            if (isForbidden) {
                //  on stoppe le comportement par defaut du submit de form avec preventDefault
                event.preventDefault();
                // on veux afficher un message, on va utiliser le module d'affichage des messages
                // la méthode addMessageToElmt prend en paramètre le node parent et le texte à afficher
                messages.addMessageToElmt(newsletter.newsletterElmt, "Les emails ne doivent pas etre jetables.");

                break;
            }
        }
    },
};
