import React from "react";
import "./homepage.style.scss";
// 1. A chaque crétion d'un nouveau component : import React from "react";

// 24 BIS. Import du composant "Categorie" et du coup, nettoyage de "homepage" de tout ce dont on a plus besoin. "Categories" est le "return" du "render" et retourne ici tout ce qui se trouve dans la  <div className="Categories">.
import Categorie from "../../components/categorie/categorie.component";

const Homepage = () => (
  // 2. Construct de la homepage.
  // Il est plus malin de d'abord, faire les points 3. 4 et 5 AVANt de replir ceci, afin de voir en live dans le HTML les titres, h1 et un cahangement de couleur (si l'on y ajoute la CSS) etc..

  <div className="Homepage">
    {/* 25. ABSOLUMENT tout le contenu des <div> est maintenant devenu un component et donc, peut être supprimé et remplacé par "<Categorie></Categorie>" ou "<Categorie/>" ... Mais je laisse les <div> ici pour la documentation et l'explication */}

    {/*
    { Composant 1 }

    <div className="Categories">

      { Composant 3 }
      <div className="Choix-item">
        <div className="Content">
          <h1 className="Titre">Chapeaux</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
      <div className="Choix-item">

        { Composant2 }
        <div className="Content">
          <h1 className="Titre">Vestes</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
      <div className="Choix-item">

        { Composant 2 : toujours le même }
        <div className="Content">
          <h1 className="Titre">Baskets</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
      <div className="Choix-item">

        { Composant 2 : toujours le même }
        <div className="Content">
          <h1 className="Titre">Femmes</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
      <div className="Choix-item">

        { Composant 2 : toujours le même }
        <div className="Content">
          <h1 className="Titre">Hommes</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
    </div>
    */}

    <Categorie />
    {/* 26. l'image n'est toujours pas affichée, Le composant "ChoixItem" ne recoit toujours pas l'image, car à ce moment-ci, nous ne l'avons toujours pas modifié. Go -> "choix-item.component.jsx" */}
  </div>
);

export default Homepage;
// 3. Exporter le component "Homepage" vers "App.js"
