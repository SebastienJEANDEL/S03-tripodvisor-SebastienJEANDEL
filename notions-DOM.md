# DOM

Document Object Model
C'est une représentation des elements de la page HTML faite par le navigateur avec laquelle on va pouvoir interagir en JS

pour visualiser le DOM , extension chrome : https://chrome.google.com/webstore/detail/dom-node-tree-viewer/jbplakkefflidgnjhckoahendgekokfc

Pour agir sur des elements de la page, JS doit selectionner des elements du DOM, pour ça il peut utiliser

## Selection par ID : getElementById
C'est une fonction qui permet de recuperer un element avec son ID
https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById

```js
const elementDuDOM = document.getElementById('id-de-lelement');
```

## Selection par CLASS : getElementsByClassName
C'est une fonction qui permet de recuperer un element avec sa class
Comme potentielement il y a plusieurs elements trouvés , la méthode renvoie un tableau (meme si il n'y a qu'un element trouvé, il sera à l'index 0 d'un tableau)
https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName

```js
const tableauDelementsDuDOM = document.getElementsByClassName('class-des-elements');
```

## Selection par nom de balise HTML : getElementsByTagName
C'est une fonction qui permet de recuperer un element avec sa balise
Comme potentielement il y a plusieurs elements trouvés , la méthode renvoie un tableau (meme si il n'y a qu'un element trouvé, il sera à l'index 0 d'un tableau)
https://developer.mozilla.org/fr/docs/Web/API/Element/getElementsByTagName

```js
const tableauDelementsDuDOM = document.getElementsByTagName('balise-des-elements');
```

## Selection par selecteur CSS : 

### querySelector -> un seul resultat
C'est une fonction qui renvoie le premier element trouvé qui match le selecteur
https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector

```js
const dernierElementDuMenu = document.querySelector('.submenu__item:last-child');
```

### querySelectorAll -> un tableau de plusieurs resultats
C'est une fonction qui renvoie une liste de tous les elements trouvés qui matchent le selecteur
https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll

```js
const tableauDesElementsDuMenu = document.querySelectorAll('.submenu__item');
```

# Modification des elements du DOM

On peut changer les propriétés des elements, par exemple :

## Modifier le contenu texte 

### textContent
Récupère et défini le texte brut présent dans l'element
https://developer.mozilla.org/fr/docs/Web/API/Node/textContent

```js
let h1 = document.querySelector("h1");
h1.textContent = "Nouveau contenu";
```

### innerHTML
Récupère et défini la syntaxe HTML à l'interieur de l'element
https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML

```js
h1.innerHTML = "Nouveau contenu <span> avec des balises html </span>";
```

## Modifier les classes 

### .className
Récupère et défini la valeur de l'attribut class
https://developer.mozilla.org/fr/docs/Web/API/Element/className
```js
h1.className = "nouvelleClasse;
```
### .classList
Récupère la liste des classes sous forme de tableau
https://developer.mozilla.org/fr/docs/Web/API/Element/classList
Plus pratique que className car permet d'ajouter ou supprimer des classes sans ecraser les class existantes

- add : Pour ajouter une class
```js
h1.classList.add("nouvelleClasse");
```

- remove : Pour supprimer une class
```js
h1.classList.remove("nouvelleClasse");
```

- toggle : Pour ajouter une classe si elle n'existe pas ou la supprimer si elle existe
-> un peu comme un interupteur de lumière : quand on appuie dessus on veut que ça éteigne si c'est allumé et inversement !
```js
h1.classList.toggle("class");
```


## Modifier l'identifiant : .id
```js
h1.id = "nouvelleId;
```

## Modifier les attributs d'un element image
- alt d'une image : .alt
```js
imgElmt.alt = "Description de l'image";
```
- src, source d'une image : .src
```js
imgElmt.scr = "url/de/limage.png";
```

.... https://developer.mozilla.org/fr/docs/Web/API/HTMLImageElement


# Creer des elements HTML

On utilise createElement('typeDeBalise')

```js
let divElmt = document.createElement('div')
```

## Ajouter un element dans le DOM

- Ajouter à la fin des enfants d'un element parent :  
https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
```js
const parentElmt = document.querySelector('.content');
parentElmt.appendChild(divElmt)
``` 

- Ajouter au debut du parent (avant le premier des enfants)
https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
```js
const parentElmt = document.querySelector('.content');
parentElmt.prepend(divElmt)
``` 