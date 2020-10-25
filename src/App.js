import React from "react";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
// 4. le component "Homepage" exporté et le chemin de ce component.

function App() {
  return (
    <div>
      <Homepage></Homepage>
      {/* 5. La <Div> Globale entiere, "Homepage" avec tout ce qu'elle contient */}
      {/* 6. Création d'un répertoire "page" et création d'un autre repertoire "homepage" à l'intérieur du repertoire "src" : src/page/homepage et déplacement des fichiers "homepage.component.jsx" et homepage.style.scss dedans... Si celà est réalisé dans VS-code via l'explorer, les liens d'import seront automatiquement changés! Voir le lien du dessus : (import Homepage from "./pages/homepage/homepage.component";) qui à été mis à jour. */}
      {/* 7. Création de la partie "répetitive" en en faisant un component :
      Alors par partie "répétitive" il faut comprendre; dans le "homepage.component.jsx" on à plusieurs <div> "Choix-item", qui ont chacuns la MEME UTILITE (juste le titre qui change) Go regarder...      
      Créer un dossier "choix-item" dans "src/components". Dedans, créer des fichiers "choix-item.component.jsx" et "choix-item.style.scss" */}
      {/* 8. Modification du fichier "homepage.styles.scss" (Aller voir dedans) */}
    </div>
  );
}

export default App;
