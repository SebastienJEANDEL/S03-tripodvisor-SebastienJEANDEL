//  on va creer un module : une sorte de tableau associatif qui regroupe toutes les variables (propriétés) et fonctions (méthodes) lié à une même fonctionnalité

// avantages : le code est plus lisible, mieux organisé, plus facilement réutilisable

const chatModule = {
    // on peut ranger une déclaration de variable dans un module, on l'apelle alors une propriété
    chatName: "Felix",
    pointsDeVie: 10,
    // on peut ranger des fonctions dans un module, on les apelle alors des méthodes
    chatMiaule: function () {
        console.log("miaoouuuu");
        //  le chat miaule on peut declancher l'appel à une fonction d'un autre module
        chienModule.coursApresLeChat();
    },
    presenteChat: function () {
        console.log("le chat s'apelle " + chatModule.chatName);
    },
    retombeSurLeDos: function () {
        pointsDeVie--;
    },
};

const chienModule = {
    chienName: "Medor",
    chienAbboie: function () {
        console.log("wouuuf");
    },
    coursApresLeChat() {
        console.log("waouf waouf waouf waouf waouf waouf  ");
    },
};

// pour appeler une fonction stockée dans un module, il suffit d'ecrire nomDuModule.fonction()
chatModule.presenteChat();
