// Ceci est le fichier le PLUS BAS de notre Application! C'est a partir d'ici que tout démarre et les composants majeurs y sont importés.
import React from "react";
import ReactDOM from "react-dom";
// 42. Ok on doit ajouter la librairie (React-routeur) qu'on vient d'installer en l'ajoutant ici via "import". Au debut ce sera "grisé" Normal car il faudra l'implementer plus bas "autour" de l'application.
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 43. Implementation de ReactRouteur pour "englober" l'App */}
      <App />
    </BrowserRouter>
    {/* 44. Implementation de ReactRouteur pour "englober" l'App. Go -> App.js */}
  </React.StrictMode>,
  document.getElementById("root")
);
