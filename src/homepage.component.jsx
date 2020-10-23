import React from "react";
import "./homepage.style.scss";
// 1. A chaque crétion d'un nouveau component : import React from "react";

const Homepage = () => (
  // 2. Construct de la homepage.
  // Il est plus malin de d'abord, faire les points 3. 4 et 5 AVANt de replir ceci, afin de voir en live dans le HTML les titres, h1 et un cahangement de couleur (si l'on y ajoute la CSS) etc..
  <div className="Homepage">
    <div className="Categories">
      <div className="Choix-item">
        <div className="Content">
          <h1 className="Titre">Chapeaux</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
      <div className="Choix-item">
        <div className="Content">
          <h1 className="Titre">Vestes</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
      <div className="Choix-item">
        <div className="Content">
          <h1 className="Titre">Baskets</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
      <div className="Choix-item">
        <div className="Content">
          <h1 className="Titre">Femmes</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
      <div className="Choix-item">
        <div className="Content">
          <h1 className="Titre">Hommes</h1>
          <span className="Sous-titre">Achetez maintenant</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
// 3. Exporter le component "Homepage" vers "App.js"
