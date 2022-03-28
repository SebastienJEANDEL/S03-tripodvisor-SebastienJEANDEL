// dans ce fichier, le module slider permet de gerer tout ce qui concerne le slider

const slider = {
    // on créé une propriété pour stocker le numéro de slide courrante , on sait qu'il commence à 0
    currentImg: 0,
    imgList: [],
    init: function () {
        // on load les images
        slider.loadImages();

        // recuperer la liste des images pour la stocker en propriété du module
        slider.imgList = document.querySelectorAll(".slider__img");

        // on place des ecouteurs d'evenement sur les bouton precedant / suivant
        const arrowBtnList = document.querySelectorAll(".slider__btn");

        // ecouteur sur le bouton précédant
        arrowBtnList[0].addEventListener("click", slider.handlePreviousClick);

        // ecouteur sur le bouton suivant
        arrowBtnList[1].addEventListener("click", slider.handleNextClick);
    },
    handlePreviousClick: function () {
        console.log("Click sur Previous, l'image courante est la numéro " + slider.currentImg);
        // on declare une variable qui va stoquer le numéro de la slide à afficher
        let previousImgNumber;

        // si on est à zéro
        if (slider.currentImg === 0) {
            // alors on ne veux pas aller à zéro moins un ...
            // on va aller au bout du tableau
            previousImgNumber = slider.imgList.length - 1;
        }
        //  si on est pas à zéro
        else {
            // on veut aller à l'image courante -1
            previousImgNumber = slider.currentImg - 1;
        }

        //  On peut faire une condition ternaire qui raccourci le code
        // tuto qui explique les ternaires : https://www.devenir-webmaster.com/V2/TUTO/CHAPITRE/JAVASCRIPT/13-ternaire/
        // previousImgNumber = slider.currentImg === 0 ? slider.imgList.length - 1 : slider.currentImg - 1;

        console.log("Et on veut aller sur la numéro " + previousImgNumber);

        // on appelle goToSlide avec le numéro de la slide précédante en param
        slider.goToSlide(previousImgNumber);
    },
    handleNextClick: function () {
        console.log("click sur next");
        // on veut aller à l'image courante +1

        // on ecrit une ternaire pour affecter nextImgNumber à 0 si on est sur la dernière et à la courante + 1 sinon
        nextImgNumber = slider.currentImg === slider.imgList.length - 1 ? 0 : slider.currentImg + 1;

        // on appelle goToSlide avec le numéro de la slide suivante en param
        slider.goToSlide(nextImgNumber);
    },
    goToSlide: function (nextImgNumber) {
        // et va chercher la slide dont le numéro est passé en paramètre et lui ajoute la classe courante

        // on va chercher la slide courrante
        const currentImg = slider.imgList[slider.currentImg];

        // on lui enleve la class courrante
        currentImg.classList.remove("slider__img--current");

        // on recupère l'image dont le numéro "nextImgNumber" est passé en param
        // on a la liste des images, on prend donc l'image numéro "nextImgNumber" dans la liste
        const nextImg = slider.imgList[nextImgNumber];

        // on lui ajoute la classe courante
        nextImg.classList.add("slider__img--current");

        // on met à jour la propriété qui stocke l'image courante
        // maintenant la nouvelle image courante est celle dont le num est passé en paramètre
        slider.currentImg = nextImgNumber;
    },
    loadImages: function () {
        // fonction qui va inserer dans le DOM des images pour le slider
        const sliderImages = ["ocean.jpg", "ski.jpg", "city.jpg", "nature.jpg"];

        // 1 - selectionner l'element slider qui sera le parent dans lequel on va inserer les images
        const sliderElmt = document.querySelector(".slider");

        // 2 - BOUCLE : pour chaque element du tableau  :
        for (const image of sliderImages) {
            // creer un element img : createElement
            let imgElmt = document.createElement("img");

            // lui ajouter une class : classList / className
            imgElmt.classList.add("slider__img");

            // lui ajouter une url d'image src : .src
            imgElmt.src = "img/" + image;

            // ajouter l'element image dans le parent slider : appendChild ou prepend
            sliderElmt.prepend(imgElmt);
        }

        // on va aller chercher la premiere image avec querySelector
        // on lui ajoute la classe current
        const firstImage = document.querySelector(".slider__img");
        firstImage.classList.add("slider__img--current");
    },
};
