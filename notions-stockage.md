# Cookies

Ce sont des espaces de stockage sur le navigateur qui permettent de stocker des chaines de caractères (size max 4ko)
 - les cookies sont envoyés au serveur à chaque requette HTTP 

Pour voir les cookies de notre navigateur on va dans les dev tools : appli > Stockage > Cookies

## Pour creer un cookies en Javascript 

```js

document.cookie = "nomDuCookie=ValeurDuCookie";
document.cookie = "theme=dark";

```

## Pour lire tous les cookies 

```js

const allCookies = document.cookie;
console.log(allCookies); // affiche theme=dark

```

## Acceder à un seul cookie en particulier

On recupère avec document.cookie une chaine de caractère

"theme=dark ; ident=solene"

Pour transformer la chaine en tableau on utilise split qui permet de couper une chaine en sous chaines suivant un séparateur spécifié en paramètre
Doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/


```js

const allCookies = document.cookie; // "theme=dark ; ident=solene"
const cookiesArray = allCookies.split("; "); // ['identifiant=solene', 'theme="dark"']

```

On a donc un tableau indexé cookiesArray qui ressemble à ça : 

0   theme=dark
1   ident=solene

```js

// on créé un tableau assocatif qui va etre remplis avec les valeurs des cookies
let cookieArrayAssoc = {};

//  on parcours le tableau indexé
for (let cookie of cookiesArray) {
    // pour chaque ligne on split le contenu au niveau du =
    const tempArray = cookie.split("="); 
    const index = tempArray[0];
    const valeur = tempArray[1];

    // on rempli cookieArrayAssoc avec en clé index et en value valeur
    cookieArrayAssoc[index] = valeur;
}

```

On a donc un tableau comme ça en sortie qui est beaucoup plus facile à utiliser

theme   dark
ident   solene


## Creer un cookie avec une durée max avant expiration 

```js

document.cookie = "mission=save the world; max-age=15"

```

Ce cookie va s'autodétruire dans 15 secondes

## Supprimer un cookie

```js

document.cookie = "identifiant=solene; max-age=0"

```


# LocalStorage

C'est pareil que les cookies, des espaces de stockage coté navigateur pour des chaines de caractère (size max 5mo)
Comme les cookies, une entrée dan slocalstorage est propre au navigateur, il est persistant (il reste meme si on recharge la page, il a une durée de vie définie)

Doc MDN : https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage

## Pour creer une entrée dans le localstorage

```js

localStorage.setItem('nomDeVariable', 'ValeurDeVariable');
localStorage.setItem('theme', 'dark');

```

Pour voir les cookies de notre navigateur on va dans les dev tools : appli > Stockage > Stockage local

## Acceder à un seul localstorage entry en particulier

```js

const theme = Window.localStorage.getItem('theme'); // dark

```

## Supprimer une entrée

```js

Window.localStorage.removeItem('theme');

```

# Stocker un structure JS telle qu'un objet / boolean / array sous forme de JSON

JSON c'est le langage universel des langages de programmation

## Pour transformer une structure JS en JSON on utilise JSON .stringify

Doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Exemple : 

```js

const arrayAssoc = { titre: "cookie", ingredients: { sucre: "150g", oeuf: 4 }}
const arrayAssocStringifié = JSON.stringify(arrayAssoc);

```

arrayAssocStringifié contient : '{"titre":"cookie","ingredients":{"sucre":"150g","oeuf":4}}'
C'est devenu une chaine de caractère, on peut alors la stocker dans le localStorage ou les cookies

## Pour retransformer du JSON en objet Javascript on utilise JSON.parse

Doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
Exemple : 

```js

const arrayAssocStringifié = Window.localStorage.getItem('recette')
// '{"titre":"cookie","ingredients":{"sucre":"150g","oeuf":4}}'

const arrayAssoc = JSON.parse(arrayAssocStiguifié)
// on retrouve notre objet !!

```
