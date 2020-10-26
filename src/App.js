import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom"; // 63 BIS. Plus besoin de la partie "link" (c'etait pour le test en 45.) Voilà, Go -> 64. (Dans Version 3. Plus bas)
// import { Route, Switch, Link } from "react-router-dom"; // 45. Ajout de cette ligne, pour avoir acces à la fonction "Route" ("switch" et "link" ont étés rajoutés par apres) de BrowserRouter. 46 -> plus bas.
import Homepage from "./pages/homepage/homepage.component";
// 4. le component "Homepage" exporté et le chemin de ce component.
import ShopPage from "./pages/shopping/shopping.component"; // 75. Import de la "ShopPage".. Maintenant, il faut l'inclure dans le <Switch><route> de l'App, plus bas. (point 76.)
import Header from "./components/header/header.component"; // 102. Import du "Header" dans "l'App". Go -> Point 103. En dessous (pres du <Switch>).

/* ------------------------------------------------------------- Version 1. de la page (on va dire) -----------------------------------------------------------
function App() {
  return (
    <div>
      <Homepage></Homepage>

      // 5. La <Div> Globale entiere, "Homepage" avec tout ce qu'elle contient 
      // 6. Création d'un répertoire "page" et création d'un autre repertoire "homepage" à l'intérieur du repertoire "src" : src/page/homepage et déplacement des fichiers "homepage.component.jsx" et homepage.style.scss dedans... Si celà est réalisé dans VS-code via l'explorer, les liens d'import seront automatiquement changés! Voir le lien du dessus : (import Homepage from "./pages/homepage/homepage.component";) qui à été mis à jour. 
      // 7. Création de la partie "répetitive" en en faisant un component :
      // Alors par partie "répétitive" il faut comprendre; dans le "homepage.component.jsx" on à plusieurs <div> "Choix-item", qui ont chacuns la MEME UTILITE (juste le titre qui change) Go regarder...      
      // Créer un dossier "choix-item" dans "src/components". Dedans, créer des fichiers "choix-item.component.jsx" et "choix-item.style.scss" 
      // 8. Modification du fichier "homepage.styles.scss" (Aller voir dedans) 

    </div>
  );
}



/* --------------------------------------------------- Version 2. de la page (test avec le react-router) -----------------------------------------------------------
function App() {
  return (
    <Switch>
      {/*48. Changer la <Div> en "Switch" (ajouter "Switch" dans l'import). Pourquoi? Parce que c'est mieux Switch. Cherche pas...
      <Route exact path="/" component={Homepage} />
      <Route path="/Chapeaux" component={Chapeaux} />
      <Route path="/detail/:refArticle" component={AutrePage} />
    </Switch>
  );
}
const Chapeaux = (props) => {
  return (
    <div>
      <Link to="/detail/0">Détail zéro</Link>
      {/* 49. Deux façon de "lier" des pages : Via "link" (rajouter "Link" dans la partie import) Ici link amene à "AutrePage" 
      <button onClick={() => props.history.push("/detail/push")}>
        par push
        {/* 50. Ou on peut lier par "push" avec un bouton "onClick" (pas oublier le "C" majuscule!) avec cette technique digne d'un mage vaudou pour la compréhension! 
        {/* 51. Dans les "props" (console.log) le "location.pathname" donne le contenu de l'URL. Interessant.. 
        {/* 52. Go -> choix-item.component.jsx pour la suite. 
      </button>
      <h1>Une page</h1>
    </div>
  );
};
const AutrePage = (props) => {
  console.log(props);
  return (
    // 46. Toute cette partie : "props => {console.log(props) return (..)" permet de voir dans la console ET en tapant "http://localhost:3000/detail/E34" (le path de AutrePage quoi) dans la page les infos transmises. (regarder la ligne "App.js:46" dans ce cas-ci. C'est ca les infos.)
    <div>
      <h1>Une autre page: {props.match.params.refArticle}</h1>
      {/* 47. Avec l'ajout de ceci, et en repetant le point 46. Bim on à dans ces fâmeuses infos transmises le pathname "/detail/e34"  
    </div>
  );
};
*/

/* --------------------------------------------------- Version 3. de la page (Pour la shopping-page) -----------------------------------------------------------*/
// 63. Modification des imports (63 BIS.) en haut de la page..
// 64. Nettoyage de la "Version 2" de la page avant création de la "Shopping-page". Comme on peut le voir, RETOUR de notre simple partie "Homepage" (Comme dans la Version 1.) avec les modif. du routeur. Donc, a part les modifications (importante) dans les composants "choix-item.component.jsx" et "categorie.component.jsx", ici ca semble toujours plus ou moins succint. La <div> comprenant "Homepage" le PARENT de toute l'appli. qui est lié à tout les composants ENFANT via (à présent) un routage.
// 65. Maintenant, création du composant "shopping" dans le dossier src/pages. (On peut le créer ailleurs, dans coponent par exemple (ce que j'avais fait au début, trouvant cela plus logique) une fois le composant fini, et correctement lié (donc fonctionnel) si l'on transfere le repertoire dans VSCode, il changera automatiquement les liens des fichiers) Bref, nouveaux fichiers "shopping.component.jsx" et "shopping.styles.scss". "shopping.component.jsx" sera une "class" car il faudra gerer des données à partir du composant.  EN PREMIER - Go -> "shopping.component.jsx" (point 66.)

function App() {
  return (
    <div>
      <Header />{" "}
      {/* 103. Placement de "Header". Normalement il devrait apparaitre. Mais il est mal foutu, donc Go -> "header.style.scss" pour arranger ça. */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Shopping" component={ShopPage} />
        {/* 76. Import de la route de "Shopping" pour l'afficher. Tester en changeant l'URL en "http://localhost:3000/shopping". Voilà. 
        // 77. Suite -> création du composant "apercu-collection". Créer un nouveau dossier "apercu-collection" dans "src/components". A l'intérieur, deux fichiers : "apercu-collection.component.jsx" et "apercu-collection.styles.scss". Rendez-vous point 77. dans "apercu-collection.component.jsx" (point 78.) une fois crée. */}
      </Switch>
    </div>
  );
}

export default App;
