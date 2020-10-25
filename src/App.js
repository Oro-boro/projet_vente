import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom"; // 45. Ajout de cette ligne, pour avoir acces à la fonction "Route" ("switch" et "link" ont étés rajoutés par apres) de BrowserRouter. 46 -> plus bas.
import Homepage from "./pages/homepage/homepage.component";
// 4. le component "Homepage" exporté et le chemin de ce component.

/*
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

*/
function App() {
  return (
    <Switch>
      {/* 48. Changer la <Div> en "Switch" (ajouter "Switch" dans l'import). Pourquoi? Parce que c'est mieux Switch. Cherche pas... */}
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
      {/* 49. Deux façon de "lier" des pages : Via "link" (rajouter "Link" dans la partie import) Ici link amene à "AutrePage" */}
      <button onClick={() => props.history.push("/detail/push")}>
        par push
        {/* 50. Ou on peut lier par "push" avec un bouton "onClick" (pas oublier le "C" majuscule!) avec cette technique digne d'un mage vaudou pour la compréhension! */}
        {/* 51. Dans les "props" (console.log) le "location.pathname" donne le contenu de l'URL. Interessant.. */}
        {/* 52. Go -> choix-item.component.jsx pour la suite. */}
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
      {/* 47. Avec l'ajout de ceci, et en repetant le point 46. Bim on à dans ces fâmeuses infos transmises le pathname "/detail/e34"  */}
    </div>
  );
};

export default App;
