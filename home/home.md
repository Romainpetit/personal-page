---
img: https://mk0divicommunite7joq.kinstacdn.com/wp-content/uploads/2018/05/Divi-Community-ajouter-css-a-divi.png
# Markdown to PDF generation options
stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
body_class: markdown-body
css: |-
  .page-break { page-break-after: always; }
  .markdown-body { font-size: 14px; }
  .markdown-body pre > code { white-space: pre-wrap; }
pdf_options:
  format: a4
  margin: 30mm 20mm
  printBackground: true
  headerTemplate: |-
    <style>
      section {
        margin: 0 auto;
        font-family: system-ui;
        font-size: 10px;
      }
    </style>
    <section>
    </section>
  footerTemplate: |-
    <section>
      <div>
        Page <span class="pageNumber"></span>
        of <span class="totalPages"></span>
      </div>
    </section>
---

# CSS - Référence technique

Manuel de notions théoriques pour 2 jours de formation pratique.

## Human Coders

https://www.humancoders.com/

## Votre formateur

**Romain Petit**

- Basé à Grenoble, France
- Formateur & Consultant depuis 10 ans
- Github: @romainpetit
- Website: https://www.romainpetit.com/

## Parlez moi de vous!

- Votre nom
- Votre métier actuel
- Votre projet du moment
- Vos attentes

## Horaires quotidiens

- 9AM / Début de journée
- 10:30—10:45AM / Pause
- 12:00—1PM / Déjeuner
- 2:45—3PM / Pause
- 5PM / Fin de journée

<div class="page-break"></div>

## Trame — Jour 1

### Matin

- [Mise en place du projet Git](#setup-du-projet-git)
- Le langage CSS, standard et évolution
- Prise en main des DevTools Chrome

**[Reprise de concepts clés](#les-concepts-clés-en-css)**

- Notions de cascade, spécificité et héritage
- Le modèle de boite
- Marges et Flux
- Sélecteurs CSS avancés

### Après-midi

**[Positionnement et mise en page](#/positionnement-et-mise-en-page)**

- Comprendre le positionnement
- Couches et stacking
- Flexbox
- CSS Grid
- Quelle technique utiliser ?

## Trame — Jour 2

### Matin

**[Maintenabilité du CSS](#maintenabilit%C3%A9-du-css)**

- Resets
- Media queries
- Architecture CSS et conventions de nommage
- CSS Encapsulé
- Créer une librairie de composants

**[Performances CSS](#performances-css)**

- Critical CSS
- Outils d'analyse du CSS
- Écrire du CSS performant

### Après-midi

**[Autour du CSS](#autour-du-css)**

- Présentation des principaux pré-processeurs : SASS, LESS, Stylus
- Utilisation de post-processeurs
- Optimisation et traitements des fichiers CSS
- Automatisation avec les outils de build : Gulp, Brunch, etc.
- Frameworks CSS : bootstrap, foundation, etc.

<div class="page-break"></div>

## Setup du projet git

Comme environnement de pratique, nous allons utiliser un dépôt GitHub.

_Je vous enverrai le lien du repo le premier jour_

- Forkez le repository
- Clonez votre fork
- Ajoutez le repo initial comme remote supplémentaire

Le fichier readme contient les commandes git et les consignes des exercices.

<div class="page-break"></div>

## Le langage CSS

CSS est un langage interprété par un navigateur web, faisant partie des standards du web.

[W3C: Cascading Style Sheets home page](https://www.w3.org/Style/CSS/Overview.en.html)

[W3C: CSS Validation Service](https://jigsaw.w3.org/css-validator/)

[State of CSS 2021: J'aime écrire du CSS](https://2021.stateofcss.com/fr-FR/opinions/#enjoy_writing_css)

### Évolution du langage

![css-modules_and_snapshots](https://user-images.githubusercontent.com/632197/124804357-7ea93080-df5a-11eb-8f53-64dc9b668cf8.png)
_Récemment, les versions majeures de CSS ont été remplacées par des versions de modules_

![html-css-evolution](https://user-images.githubusercontent.com/632197/124804364-810b8a80-df5a-11eb-83f5-0551447908d2.jpeg)
_L'évolution des versions majeures, en comparaison avec HTML_

### Supports multi-navigateurs

Si tous les navigateurs comprennent le CSS, ils ne parlent pas tous le même pour autant.

https://www.w3schools.com/cssref/css3_browsersupport.asp

https://caniuse.com/

### Vocabulaire

```css
h1 {
  color: blue;
}
```

Ce bloc complet est une _déclaration_

`h1` est un _sélecteur_

`color` est une _propriété_

`blue` est une _valeur_

`color: blue;` est une _règle_

## Prise en main des DevTools Chrome

L'onglet Éléments permet d'inspecter le DOM et de voir les styles associés.

Toutes les fonctionnalités du Chrome Devtools:
https://developer.chrome.com/docs/devtools/dom/

### Document Object Model

Attention, le DOM peut complètement être différent du contenu d'un fichier HTML source:

- Le HTML étant un language interprété et non compilé, chaque navigateur générera le DOM selon sa compréhension.
- Une fois le fichier HTML parsé, JavaScript peut intervenir sur le contenu du DOM.

**🤸 Exercice: `/01-dom`**

## Le langage CSS - Références

https://www.w3schools.com/cssref/

https://css-tricks.com/almanac/

# Les concepts clés en CSS

## Concepts — Cascade

_La cascade_ fait référence à l'ordre des règles concernant un même élément.

Si les deux déclarations ont la même spécificité, c'est la dernière qui sera retenue.

```css
h1 {
  color: pink;
}

/* Je serai la couleur finale */
h1 {
  color: indigo;
}
```

_Note: Les [At-Rules](https://developer.mozilla.org/fr/docs/Web/CSS/At-rule) qui ne contiennent pas de déclaration CSS ne sont pas concernées par le principe de cascade. `@font-face`, `@keyframes` par exemple_

[La cascade (MDN)](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#la_cascade)

## Concepts — Spécificité

_La spécificité_, c'est la force de la sélection faite en CSS.
Plus elle est élévée, plus la déclaration pourra gagner la compétition de la sélection.

[La spécificité (MDN)](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#sp%C3%A9cificit%C3%A9)

```css
.title {
  color: red;
}

h1 {
  color: blue;
}
```

On peut voir le score de spécificité avec le [Specificity Calculator](https://specificity.keegan.st/) ou directement dans VS Code en survolant un sélecteur css.

_À proscrire :_

- L'utilisation de `!important` sur des règles CSS qui bouleversent toute la hiérarchie de spécificité des déclarations. À la place, on cherchera à rendre plus précis les sélecteurs pour augmenter leur score.
- Les IDs comme sélecteurs en CSS. Leur spécificité est tellement haute qu'un retour à des sélecteurs simples est impossible ensuite.

## Concepts — Héritage

_L'héritage_ est la transmission de la valeur d'une propriété du parent à l'enfant.

```css
body {
  color: blue;
}

span {
  /* Sans cette règle, `color` vaudrait `blue` */
  color: black;
}
```

Chaque propriété présente sur sa documentation si elle est héritée ou non, par exemple [`text-transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

![inherited-mdn](https://user-images.githubusercontent.com/632197/124598158-9c946980-de64-11eb-80c9-ab500c1b6b8c.jpeg)

[L'héritage (MDN)](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#h%C3%A9ritage)

### Appliquer une valeur héritée

La valeur héritée peut être différente de la valeur appliquée par une déclaration.

On peut retrouver cette valeur héritée avec `inherit`.

```css
span {
  color: blue;
}

.extra span {
  color: inherit; /* Valeur de la `color` de `.extra` */
}
```

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="eYebRbo" data-editable="true" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/eYebRbo">
  CSS | Inheritance | Apply inherited value</a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Réinitialiser avec `all`

La propriété CSS `all` permet de réinitialiser _toutes_ les propriétés des élément sélectionnés.

```css
.module {
  all: unset;
}
```

En fonction de la valeur de `all`, les propriétés vaudront alors:

- `initial`
  leurs valeurs initiales, par défaut.
- `inherit`
  les valeurs héritées du parent, même pour les propriétés non héritables.
- `unset`
  la valeur déclarée pour le parent si elles peuvent être héritées ou la valeur initiale sinon.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="LVxvWP" data-user="css-tricks" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/team/css-tricks/pen/LVxvWP">
  all property demo</a> by CSS-Tricks (<a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

[CSS-Tricks: `all` property](https://css-tricks.com/almanac/properties/a/all/)

[MDN: `all`](https://developer.mozilla.org/fr/docs/Web/CSS/all)

**🤸 Exercice: `/02-specificity`**

## Concepts — Modèle de boite

Les composants d'une boîte:

- La boîte de contenu
- La boîte de padding (marge intérieure)
- La boîte du cadre
- La boîte de margin (marge extérieure)

![Box model props](https://mdn.mozillademos.org/files/16558/box-model.png)
![Box model sizes](https://mdn.mozillademos.org/files/16559/standard-box-model.png)

[Les propriétés qui influent sur le modèle de boite](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Box_Model)

### Le Modèle Alternatif de boîte CSS

```css
.box {
  box-sizing: border-box;
}
```

![Alt Box model](https://mdn.mozillademos.org/files/16557/alternate-box-model.png)

Toutes les information sur le modèle de boite d'un élément sont visibles depuis la section "Box Model" de l'onglet "Styles" des _devtools_.

## Concepts — Marges

Tout autour d'un élément, on peut donc définir une marge extérieure:

```css
p {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  /* margin: 10px 20px; */
}
```

### Fusion de marge

Entre les éléments adjacents, les marges verticales fusionnent.

Exceptions :

- Éléments non-bloc : Flexbox, Grid
- Les blocks inline, flottants
- Si padding et bordures sur un des deux éléments

https://www.zendevs.xyz/cest-quoi-la-fusion-de-marge-en-css/#adjacent-siblings

https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

## Concepts — Flux

En CSS, les blocs se suivent les uns après les autres.

Il existe deux axes :
![flux-direction](https://mdn.mozillademos.org/files/16125/mdn-horizontal.png)

### Inline

S'applique au élément `display: inline`

```html
<p>Un bel <em>exemple</em> d'élément en ligne qui suit le flux.</p>
```

On peut aussi passer des élément en `display: inline-block`, ils suivront le flux inline.

```css
div {
  display: inline-block;
}
```

[Inline-block, effets de bords](https://www.alsacreations.com/astuce/lire/1432-display-inline-block-espaces-indesirables.html)

### Block

Pour les éléments en `display` block, flex, grid.

Ils suivent l'ordre normal d'enchaînement des blocs, de haut en bas en français.

## Sélecteurs avancés - Enfants

Plusieurs sélecteur nous simplifient la sélection d'enfant par leur position au sein du parent.
Ils permettent d'éviter le règle plus complexes avec [`:nth-child`](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child)

_[`:first-child`](https://developer.mozilla.org/fr/docs/Web/CSS/:first-child)_

Le premier élément au sein de son parent.

```css
p {
  margin-top: 10px;
}
p:first-child {
  margin-top: 0;
}
```

_[`:last-child`](https://developer.mozilla.org/fr/docs/Web/CSS/:last-child)_

Le dernier élément au sein de son parent.

```css
p {
  margin-top: 10px;
}
p:last-child {
  padding-bottom: 20px;
  border-bottom: 1px solid #888;
}
```

_[`:only-child`](https://developer.mozilla.org/fr/docs/Web/CSS/:only-child)_

Un élément seul, qui est à la fois le premier et le dernier enfant.

```css
p:only-child {
  ...;
}
/* Équivalent */
p:first-child:last-child {
  ...;
}
```

## Sélecteurs avancés - Attribute Present

On peut détecter la présence d'attributs html en CSS, entre `[]`.

```css
input[disabled] {
  background-color: grey;
}
a[href] {
  color: red;
}
```

## Sélecteurs avancés — Target Pseudo-class

Sélectionne le bloc si il a une ancre dans l'url en cours.

```css
section:target {
  outline: 2px solid yellow;
}
```

```html
<section id="hello">...</section>
```

## Sélecteurs avancés - Negation

Très utile, permet de sélectionner d'inverse d'une sélection connue.

```css
div:not(.alert) {
  color: blue;
}
:not(div) {
  ...;
}
```

## Sélecteurs avancés - Sélection

Le fragment pseudo-element `::selection` identifie une partie du document qui a été sélectionnée suite à une action de l'utilisateur.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="bGWEOqL" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/bGWEOqL">
  Fragment Pseudo-element</a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Sélecteurs avancés - General Sibling Selector

Sélectionne tous les `p` qui suivent un `h2`, à condition de partager le même parent.
Ils peuvent ne pas se suivre immédiatement.

```css
h2 ~ p {
  /* ...; */
}
```

```html
<p>...</p>
<section>
  <p>...</p>
  <h2>...</h2>
  <p>This paragraph will be selected</p>
  <div>
    <p>...</p>
  </div>
  <p>This paragraph will be selected</p>
</section>
```

## Sélecteurs avancés - Adjacent Sibling

Sélectionne tous les `p` qui suivent un `h2`.
Ils doivent se suivre immédiatement.

```css
h2 + p
```

https://developer.mozilla.org/fr/docs/Web/CSS/Adjacent_sibling_combinator

**🤸 Exercice: `/03-selectors`**

## Sélecteurs avancés - Owl selector

Sélectionne chaque `p` qui n'est pas en première position.

```css
p + p {
  margin-top: 10px;
}
```

Sélectionne chaque élément qui n'est pas en première position.

(a)

```css
* {
  margin-top: 10px;
}
```

(b)

```css
* + * {
  margin-top: 10px;
}
```

![lob-owl-margin](https://alistapart.com/wp-content/uploads/2014/10/owl_1.png?w=960)

# Positionnement et mise en page

## Comprendre le positionnement

- Static - _par défaut_
- Relative
- Absolute
- Fixed
- Sticky

```css
div {
  position: fixed;
}
```

Chaque élément positionné peut recevoir des propriétés `top`, `left`, `bottom`, `right`

```css
.banner {
  position: fixed;
  bottom: -50%;
  width: 50%;
  margin-left: -25%;
}
```

#### Absolute

Un élément en absolute est hors flux, dans un contexte de positionnement en référence à `<html>`.
Nous pouvons changer ce contexte de positionnement — par rapport à quel élément est placé l'élément à positionner en absolu en renseignant une position `relative` sur le parent, qui deviendra le nouveau contexte

```css
div {
  position: relative;
  margin-top: 100px;
}
div p {
  position: absolute;
  background: lime;
  top: 0px;
}
```

[Le positionnement (MDN)](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Positioning)

## Concepts — Couches

Quand les éléments se chevauchent, un ordre de superposition est appliqué.

```css
p {
  position: absolute;
}
```

Le z-index permet de modifier cet ordre

```css
p {
  position: absolute;
  z-index: 1;
}
```

https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context

**🤸 Exercice: `/04-positionning`**

## Positionnement - Flexbox

### Le contexte Flex

Pour utiliser Flexbox, on commence par renseigner `display: flex;` sur le parent, il devient le _conteneur Flex_.

```css
.nav {
  display: flex;
}

.nav > a {
  /* flex items property */
}
```

Tous ses enfants directs seront des _éléments Flex_.

[Liste complète des propriété pour Parent et Enfant flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### flex-direction (Parent)

On peut choisir l'ordre du flux des éléments Flexbox.

- row
- row-reverse
- column
- column-reverse

```css
.nav {
  display: flex;
  flex-direction: row;
}
```

![row](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics1.png)

![column](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics2.png)

### Début et fin de ligne

Chaque début et fin de ligne sur cet axe est représenté par les termes `start` et `end`

![startend](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics5.png)

### flex-wrap (Parent)

Pour choisir si les éléments doivent rester sur l'axe ou peuvent prendre plusieurs lignes.

- wrap
- nowrap

```css
.box {
  display: flex;
  flex-wrap: wrap;
}
```

### Les propriétés d'enfants Flex

_`flex-basis`_

La propriété flex-basis définit la taille de l'élément en terme d'espace occupé. C'est l'espace minimum qu'il va réserver.

_`flex-grow`_

La propriété flex-grow permet aux éléments flexibles de _s'étendre_ à partir de la mesure de flex-basis et de l'espace disponible.

_`flex-shrink`_

La propriété flex-shrink permet de gérer la façon dont l'espace est partagé, quand l'espace disponible est _réduit_.

### Débugger flexbox

[Avec Firefox](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts)

[Avec Chrome](https://developer.chrome.com/blog/new-in-devtools-90/#flexbox)

[Référence Flexbox](https://tympanus.net/codrops/css_reference/flexbox/)

**🤸 Exercice: `/05-flexbox`**

## Positionnement — CSS Grids

Les grands principes :

- Grille à taille fixe ou variable, avec l'unité `fr`
- Les zones de contenu peuvent prendre plusieurs "cellules"
- Assignation du contenu à une zone en CSS
- Alignement et chevauchement sont contrôlables

### `grid-template-columns`

On commencer par définir notre modèle de grille, ici, trois colonnes de 200px par ligne.

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Avec l'unité `fr`, on répartit l'espace disponible, ici on a donc trois colonnes égales et une mise en page fluide.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="ZEKWqxb" data-editable="true" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/ZEKWqxb">
  </a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Les unités peuvent se combiner pour donner des tailles de cellules inégales.

```css
.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

On voit que le modèle se répète sur plusieurs lignes : c'est une _grille implicite_.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="jOmrNpg" data-editable="true" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/jOmrNpg">
  CSS Grid 3 Col</a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `grid-auto-rows`

On peut assigner une hauteur aux cellules.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="JjNKPzy" data-editable="true" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/JjNKPzy">
  CSS Grid Implicit </a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Comme on serait tenté de le faire avec `min-height` et `max-height`, on peut aussi passer à `grid-auto-rows` une fonction `minmax()` :

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="YzVWKML" data-editable="true" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/YzVWKML">
  CSS Grid Auto Rows </a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `grid-*-gap`

On peut mettre une gouttière aux lignes et colonnes.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="Vwbjwxg" data-editable="true" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/Vwbjwxg">
  CSS Grid Merged Cells</a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `grid-column-*` et `grid-row-*`

Depuis un enfant de notre grille, on peut demander à remplir plusieurs cellules avec les propriétés :

- `grid-column-start`
- `grid-column-end`
- `grid-row-start`
- `grid-row-end`

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="jOmrOMW" data-editable="true" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/jOmrOMW">
  CSS Grid MinMax</a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

https://tympanus.net/codrops/css_reference/grid/

Exercice:
https://cssgridgarden.com/

## Positionnement — Quelle technique utiliser ?

Les CSS Grid sont pensées pour organiser du contenu en _deux dimensions_, et Flexbox en une dimension.

Avec Flexbox, l'espace libre restant est utilisable de façon équitable une fois les éléments positionnés en fonction de leur contenu. CSS Grid trace arbitrairement des limites dans l'espace.

On préfèrera donc :

- Flexbox pour les positionnement et alignements au plus proche du contenu, sur des petits blocs.
- CSS Grid pour les mise en page principales, pleines largeur.

# Maintenabilité du CSS

## Maintenabilité - Resets

Les CSS resets visent à supprimer tous les styles appliqués par défault par les navigateurs.

_Tous les éléments vont avoir le même rendu car ils seront complètement vide de style_

### Hard reset

En 2004, Andrew Krespanis a défendu que le seul reset CSS utile est :

```css
* {
  padding: 0;
  margin: 0;
}
```

Mais le sélecteur universel a des conséquences assez destructrices.

Eric Meyer a ensuite démocratisé le concept de reset CSS avec plusieurs itérations plus complètes.

### Inconvénients

Comme soutenu par [Russ Weakly](http://www.maxdesign.com.au/articles/css-reset/) :

- Chaque élément réinitialisé doit être redéfini, avec plus de CSS.
- Un reset CSS peut rendre inutilisable certains éléments qui ont perdu leur style par défaut
- L'accessibilité clavier est aussi à reconstruire

[L'histoire des CSS resets](https://www.webfx.com/blog/web-design/the-history-of-css-resets/)

### Normalize

Le but d'un normalize est de donner un style précis à chaque élément CSS, et qu'il soit le même dans tous les navigateurs.

https://necolas.github.io/normalize.css/

## Maintenabilité - Media queries

Les média queries en CSS nous permettent de servir des déclarations en fonction du type d'appareil ou de ses caractéristiques.

Vérifiez l'étendue des média queries supportées par votre navigateur avec le [Viewport/Page Dimensions Media Features](http://lab.human-injection.de/mediaqueries/dimensions.html).

![Breakpoints per devices](https://user-images.githubusercontent.com/632197/157726370-c290dc7a-6845-4c9a-8793-90e5750c6c7d.png)
_Les breakpoints principaux_

L'application d'une approche unique dans notre codebase complète permet une meilleure maintenabilité.

On réduira aussi au minimum le nombre de breakpoints.

### Le mobile first

https://css-tricks.com/how-to-develop-and-test-a-mobile-first-design-in-2021/

Écrire du CSS mobile first se traduit par l'utilisation de `min-width` uniquement :

```css
/* De 0px à 600px */
body {
  background: red;
}

/* Pour les écrans de 600 px et plus */
@media (min-width: 600px) {
  body {
    background: green;
  }
}
```

https://zellwk.com/blog/how-to-write-mobile-first-css/

En [Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/#mf-dimensions), on peut même écrire la condition avec des opérateurs grâce à la [notation range](https://www.w3.org/TR/mediaqueries-4/#mq-range-context):

```css
/* Pour les écrans de plus de 600 px */
@media (width > 600px) {
  body {
    background: #e0cb52;
  }
}
```

## Architecture CSS et Conventions de nommage

La portée d'un sélecteur est globale. Pour s'organiser, des conventions existent.

### SMACSS — Scalable and Modular Architecture for CSS

Une ensemble de règles d'organisation d'un projet CSS pour une organisation modulaire.

Les styles sont répartis en :

- _Base_, les styles partagés globaux, reset.
- _Layout_, sections principales
- _Modules_, des composants indépendants
- _State_, interactions et visibilité
- _Theme_, couleurs, espacements et formes

Les conventions de nommage sont simples,

- On utilise des classes uniques pour simplifier la spécificité
- Le `--` entre les termes différencie des modules en plusieurs mots comme `human-coders`.

```css
.human-coders--list {
  padding: 20px;
}
.human-coders--list.is-active {
  color: #00d;
}
```

_`is-active` est ici un State_

### OOCSS — Object-Oriented CSS

OOCSS met en avant deux principes :

- Le principe de séparation de la structure et de l'apparence
- Le principe de séparation du conteneur et du contenu.

[OOCSS](http://oocss.org/)

### BEM — Block-Element-Modifier

BEM est une convention de nommage stricte.

Un _bloc_ est une entité indépendante, une « brique » de l'application ou de la page Web. Un bloc forme son propre contexte autonome.

Un _élément_ est une partie d'un bloc. Le contexte d'un élément est celui du bloc.

Un _modificateur_ est une propriété qui sert à créer des variantes, pour faire des modifications minimes comme changer des couleurs. Il existe des modificateurs de blocs et des modificateurs d'éléments.

En application, les sélecteur ressemble à ça :

```css
block-name {
}
block-name_modifier_name {
}
block-name__element-name {
}
block-name__element-name_modifier_name {
}
```

Tout le contexte est donc donné dans un sélecteur.

[CSS Guidelines](https://cssguidelin.es/)

## CSS Encapsulé

La création des noms de classe peut aujourd'hui être automatisée au moment de la compilation.

### [CSS-in-JS alias JSS](https://cssinjs.org)

Le style est écrit en JS, et injecté dans une feuille de style au chargement.

```js
const styles = {
  button: {
    fontSize: 12,
    '&:hover': {
      background: 'blue'
    }
  },
},
```

```html
<button class="${classes.button}">Button</button>
```

Résultat

```html
<button class="button-0-0-1">Button</button>
```

### [CSS Modules](https://github.com/css-modules/css-modules)

```css
/* style.css */
.title {
  color: green;
}
```

```js
import { title } from './style.css'

element.innerHTML = `<h1 class="${title}">
     An example heading
   </h1>`
```

Résultat

```html
<h1 class="_title_309571057">An example heading</h1>
```

### [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom)

Les composants web natifs permettent l'encapsulation des styles depuis le DOM.

## Créer une librairie de composants

### Relative units

Il existe beaucoup d'[unités de mesure](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Values_and_units#longueurs) en CSS.

Parmi elles certaines sont des unités relatives:

| Unité | Relative à                                                        |
| ----- | ----------------------------------------------------------------- |
| em    | Relative à la taille de la police de l'élément parent.            |
| ex    | La hauteur d'x de la police de l'élément.                         |
| ch    | La chasse/avance du glyphe « 0 » pour la police de l'élément.     |
| rem   | La taille de la police pour l'élément racine.                     |
| lh    | La hauteur de ligne pour l'élément.                               |
| vw    | 1% de la largeur du viewport (la zone d'affichage).               |
| vh    | 1% de la hauteur du viewport (la zone d'affichage).               |
| vmin  | 1% de la plus petite dimension du viewport (la zone d'affichage). |
| vmax  | 1% de la plus grande dimension du viewport (la zone d'affichage). |

~

Deux sont idéales à noter pour composer en CSS :

#### Em

"my parent element's font-size"

```css
ul {
  font-size: 18px;
}

li {
  font-size: 1.3em; /* Vaudra 1,3 * 18 */
  margin: 1em; /* Vaudra 1 * 18 */
}
```

#### rem

"The root element's font-size"

```css
html {
  font-size: 16px;
}

li {
  font-size: 1.3rem; /* Vaudra 1,3 * 16 */
}
```

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="vYmGLVm" data-user="romainpetit" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/romainpetit/pen/vYmGLVm">
  </a> by Romain Petit (<a href="https://codepen.io/romainpetit">@romainpetit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

https://medium.com/codeshake/unit%C3%A9s-de-mesures-em-vs-rem-eac03dbcb9c7

### Currentcolor

`currentcolor` un mot clé utilisable comme valeur qui vaudra toujours la `color` héritée.

```css
p {
  color: #333;
}
p a {
  color: currentcolor;
  border-bottom: 1px dashed currentcolor;
}
```

https://la-cascade.io/la-premiere-variable-css-currentcolor/

**🤸 Exercice: `/06-architecture`**

# Performances CSS

⚠ Les fichiers CSS bloquent le rendu de la page. Optimiser leur poids est donc essentiel.

## Critical CSS

Pour afficher une premier rendu le plus rapidement possible, on peut isoler nos déclarations CSS les plus importantes : c'est le _Critical CSS_.

Il sera ajouté dans une balise `style` pour éviter une requête.

Le reste du CSS peut être chargé de façon _asynchrone_

```html
<link
  rel="preload"
  href="style.css"
  as="style"
  onload="this.rel='stylesheet'"
/>
```

_Le `onload` est un hack cross-browser_

Des outils pour trouver le Critical CSS d'un site existent sous forme de [package Node](https://github.com/filamentgroup/criticalCSS)

## FOUT

Quand une police customisée est servie avec `@font-face`, il y a un flickering: le texte est affiché sans la police, puis avec une fois qu'elle est chargée.

[fighting-the-font-face-fout](https://www.paulirish.com/2009/fighting-the-font-face-fout/)

Pour éviter cela, des _polices de secours_ adaptées doivent être utilisées.

Pour trouver la bonne police de substitution (fallback), ce site est idéal:

[Font Family Reunion: Compatibility tables for default local fonts.](http://fontfamily.io/Helvetica)

## Outils d'analyse du CSS

Avant toute chose, assurez vous de bien désactiver le cache navigateur.

Tout va se passer depuis les Chrome DevTools, dans différents onglets.

### Network Tab

_Network_ présente une cascade de ressources dans l'ordre de leur chargement par la page.

Le throttling permet de simuler une mauvaise connexion.

On remarque les étapes clés du chargement de la page :

- <strong style="color:#0168b8">DOMContentLoaded</strong> : le DOM est rendu.
- <strong style="color:#d33a2c">Load</strong> : les ressources complémentaires sont chargées.

On peut filtrer la liste par type de ressources pour ne voir que les fichiers CSS.

![network-smashing](https://user-images.githubusercontent.com/632197/124915908-5b31c480-dff2-11eb-86be-768ff58462dc.jpeg)
_Analyse des requêtes sur la page https://www.smashingmagazine.com/_

### Performance Tab

_Performances_ présente l'enchaînement de l'exécution des processus pour le chargement de la page.

![perf-le-monde](https://user-images.githubusercontent.com/632197/124642751-7dabcc80-de90-11eb-8422-d51845dc49bc.jpeg)
_Analyse des processus au chargement de la page https://www.lemonde.fr/_

_Que chercher ?_

- Des _layout/reflow_ excessifs, recalculs des positions et tailles des éléments.
- Des _paint_, quand les pixels sont changés.

![performance-layout-shift](https://user-images.githubusercontent.com/632197/124666483-68459b00-deae-11eb-958e-3f5d5dea6156.jpeg)
_Un layout shift, à éviter_

### Coverage Tab — Enlever les déclarations inutiles

_Coverage_ est accessible depuis le menu additionnel.
Il nous permet d'identifier les déclarations qui ne sont pas appelées par notre page _au cours de la session_.

![coverage-smashing](https://user-images.githubusercontent.com/632197/124917969-c086b500-dff4-11eb-8d7f-3413c4e8f1b8.jpeg)

### Notes de performance

_Lighthouse_, une onglet des devtools, lance un audit selon plusieurs critères sur notre page :

![lighthouse-performance](https://user-images.githubusercontent.com/632197/124887310-56aae300-dfd5-11eb-8588-02ff3f159432.jpg)

https://www.webpagetest.org/easy

https://developers.google.com/speed/pagespeed/insights/

https://whatdoesmysitecost.com/index.php

#### Web vitals

Cette nouvelle règle de calcul de performance est une combinaison de trois facteurs

- LCP ou Largest Content Painful
- FID ou First Input Delay
- CLS ou Cumulative Layout Shift

https://web.dev/vitals/#core-web-vitals

https://blog.hubspot.fr/marketing/core-web-vitals

## Écrire du CSS performant

### Réduire la complexité des sélecteurs

Au départ, on référence nos éléments avec une simple classe :

```css
.title {
  /* styles */
}
```

Mais au fur et à mesure que le projet grossit, on se retrouve souvent avec :

```css
.box:nth-last-child(-n + 1) .title {
  /* styles */
}
```

Cette règle de sélection complexe demande autant d'analyse logique par le navigateur que pour nous pour la lire.

En adaptant notre HTML, on gagne en lisibilité pour nous et en performance pour le navigateur en utilisant un sélecteur précis :

```css
.final-box-title {
  /* styles */
}
```

#### L'impact d'une sélection large

https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/

```css
* + * {
  margin-top: 1em;
}
```

Dans un contexte précis, on pourrait faire la même chose avec d'autres sélecteurs.

Owl css :

```css
li {
  background-color: orange;
  height: 20px;
}

ul > * + * {
  border-top: 1px solid black;
}
```

:first-child :

```css
li {
  background-color: orange;
  height: 20px;
  border-top: 1px solid black;
}

li:first-child {
  border-top-width: 0;
}
```

:nth-child :

```css
li {
  background-color: orange;
  height: 20px;
}

li:nth-child(n + 2) {
  border-top: 1px solid black;
}
```

:not() :

```css
li {
  background-color: orange;
  height: 20px;
}

li:not(:first-child) {
  border-top: 1px solid black;
}
```

![owl-perf](https://user-images.githubusercontent.com/632197/124638751-a087b200-de8b-11eb-891f-0b24723f4ede.jpeg)
_Comparatif des performances entre les techniques_

### Utiliser des propriétés peu couteuses

Les propriétés CSS ne mobilisent pas toutes les mêmes actions. En particulier lorsqu'elle sont animées, leur impact leur les performance peut être énorme.

_csstriggers_ Recense les propriétés et leur coût : layout, pain ou composite.
https://csstriggers.com/

### Animations

Les propriétes les plus efficaces pour être animées avec `transition` sont :

- `opacity`
- `transform`
- `top`, `bottom`, `left`, `right` pour un élément positionné

Animer uniquement des propriétés ciblées, et non `all`

```css
transition: 0.3s all; /* :( */
transition: 0.3s opacity; /* :D */
```

Utiliser `will-change`

```css
will-change: opacity;
```

### Utiliser des techniques de layout modernes

Flexbox et CSS Grid consomment moins de ressources.

# Autour du CSS

## Pré-processeurs : SASS, LESS, Stylus

Les préprocesseurs CSS sont des langages compilés qui nous complètent la syntaxe de CSS.
Pour les utiliser, il faut un environnement de développement avec un serveur local pour gérer la compilation.

https://2020.stateofcss.com/technologies/pre-post-processors/

### SASS

https://sass-lang.com/

_Syntaxe SASS_

```css
$font-color: #fff
$bg-color: #00f

#box
  color: $font-color
  background: $bg-color
```

Testez la compilation SASS vers CSS avec https://www.sassmeister.com/

_Syntaxe SCSS_

```css
$font-color: #fff;
$bg-color: #00f;

#box {
  color: $font-color;
  background: $bg-color;
}
```

### LESS

Less a une syntaxe un peu différente.

```css
@font-color: #fff;
@bg-color: #00f
 
#box {
  color: @font-color;
  background: @bg-color;
}
```

### Stylus

Stylus ressemble à du CSS natif.

```css
font-color = #fff;
bg-color = #00f;

#box {
    color: font-color;
    background: bg-color;
}
```

<!-- ## Utilisation de post-processeurs -->

<!-- ## Optimisation et traitements des fichiers CSS -->

## Automatisation avec les outils de build

### Pourquoi des outils de build ?

### Grunt

Le premier, sorti en 2016

https://gruntjs.com/

### Gulp

Le successeur de Grunt, plus rapide.

https://gulpjs.com/

### Brunch

https://brunch.io/

https://brunch.io/skeletons

<!-- ### Webpack -->

## Frameworks CSS

Les frameworks CSS sont utilisés pour

- nous donner des styles prédéfinis
- personnaliser rapidement une codebase CSS complète

### Foundation

Approche modulaire et utilitaire.

https://get.foundation/

### Bootstrap

Approche modulaire et utilitaire.

https://getbootstrap.com/

Customisation avec SASS:
https://getbootstrap.com/docs/4.6/getting-started/theming/#sass

### TailwindCSS

Approche utilitaire uniquement.

https://tailwindcss.com/
