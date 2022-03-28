//  declarer un module qui s'apelle theme et qui contient un fonction (du coup une méthode) qui s'apelle changeTheme

const theme = {
    init: function () {
        // dans la méthode init on range les lignes de code qui servent à initialiser le module : généralement, c'est là qu'on embauche les espions / qu'on pose des écouteurs d'evenement

        // on va chercher le bouton qui a l'id theme-switch
        const switchBtnElmt = document.querySelector("#theme-switch");
        //on va chercher les éléments vert rouge et bleus pour leur poser des écouteurs
        const colorType = document.querySelectorAll('.theme-button');
       
        //on boucle pour poser un ecouteur a chaque entree
        for (i=0; i<colorType.length;i++){
                let currentColorType = colorType[i]
                currentColorType.addEventListener('click',theme.handleThemeColorClick);
                }

        // on lui pose un eventListner dessus
        // le handler (la méthode appelée au click) est une des méthodes de notre module, il faut donc prefixer son nom de theme. (équivalent de theme['changeTheme'] => nottation pas très utilisée pour les appels de méthode ..)
        switchBtnElmt.addEventListener("click", theme.changeTheme);

        // on check si il existe une entrée dans le dark mode on l'applique
        theme.applyLocalStorageTheme();
    },
    currentTheme: 'theme-green',
    
    handleThemeColorClick: function(e){
        currentTheme = e.target.id;
        theme.changeColorTheme();
    },
    changeTheme: function () {
        // fonction qui permet de mettre le thème en mode dark si il n'y est pas et de l'enlever si il y est.

        // on va stocker dans le localstorage le fait que l'utilisteur vient de passer en dark theme
        // on va creer un booleen qui s'appelle darkTheme et qui stock true si le theme est dark et false sinon
        let darkTheme;

        // aller chercher l'element HTML <body>
        const bodyElmt = document.querySelector("body");
        // pour aller chercher l'element body on peut utiliser querySelector('body') ou un raccourcis : document.body

        // savoir si on est deja en theme dark ou pas
        // si y'a 'theme-dark' on l'enleve
        if (bodyElmt.classList.contains("theme-dark")) {
            //  on enleve la classe
            bodyElmt.classList.remove("theme-dark");
            //  on passe le booleen à faux car on enleve le darktheme
            darkTheme = false;
        } else {
            // si y'a pas 'theme-dark' on l'ajoute
            bodyElmt.classList.add("theme-dark");
            // on remet le dark theme donc booléen à true : c'est vrai qu'on est en dark theme !
            darkTheme = true;
        }

        // ajouter cette valeur dans le local storage
        theme.setThemeToLocalStorage(darkTheme);
    },
    changeThemeV2: function () {
        document.querySelector("body").classList.toggle("theme-dark");
    },
    setThemeToLocalStorage: function (darkTheme) {
        //  notre darkTheme est un booléen, on veut le stocker en booleen
        // MAIS localstorage n'accepte que des string
        //  donc on va transformer notre booléen en JSON (comme JSON est assimilé string on pourra stocker le JSON dans localstorage)
        const stringifyDarkTheme = JSON.stringify(darkTheme);
        console.log(stringifyDarkTheme);

        // ajoute une entrée dans local storage
        localStorage.setItem("dark_theme", stringifyDarkTheme);
    },
    applyLocalStorageTheme: function () {
        // on regarde si il existe une entrée appelée dark_theme dans le local storage
        const StringifyIsDark = localStorage.getItem("dark_theme");

        console.log(typeof StringifyIsDark);
        //  => STRING

        // on va retransformer notre JSON en JS
        const isDark = JSON.parse(StringifyIsDark);

        console.log(typeof isDark);
        //  => BOOLEAN

        if (isDark) {
            console.log("vrai c'est vrai !");
            theme.changeTheme();
        }
    },
    changeColorTheme: function(){
         //repérage de l'élément à modifier la class
         let body = document.querySelector('body');
         //je regarde si body a déjà une classe auquelcas je lui retire
         let listeClassBody = body.classList;
         console.log(listeClassBody);
 
         if (listeClassBody!== null){
             body.classList.remove(theme.currentTheme);
             }
         
         
         body.classList.add(currentTheme);
 
    },
};
