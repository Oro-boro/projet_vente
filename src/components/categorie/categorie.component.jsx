// 17. Les deux lignes de départ. (Déjà fait précedemment, plus besoin d'expliquer).

import React from "react";
import "./categorie.style.scss";
// 21. Importantion du composant de "choix-item.component.jsx" dans lequel, pour rappel on à donné le nom "ChoixItem". (const ChoixItem = (props) => (....).
import ChoixItem from "../choix-item/choix-item.component";

//18. Le composant "Categorie", qui sera ici une CLASSE! Pourquoi? Car ici on va devoir transmettre les données au composant enfant!! (Important) C'est à dire :
// 19. Dans "homepage.component.jsx" si on observe les <div>, les composants "choix-item" sont DANS la <div> "Categorie" qui les englobent tous. Donc les "Choix-item" sont des enfants de "Categorie" (PARENT = "Categorie" --> ENFANTS = "Choix-item"). Nous avons configurés précédemment les "Choix-item" pour qu'il puissent recevoir des données (les titres; qui etaient : "Chapeaux", "Vestes", "Baskets", "Femmes" ou "Hommes"). Ces données vont lui être transmise par cette CLASSE (#component).

// Putain, te goure pas, oublie pas les majuscules et minuscules pour ecrire "React.Component".
class Categorie extends React.Component {
  constructor() {
    super();

    this.stage = {
      // 20. Ici les données dont on a besoin. On appelle cette partie "sections" mais on pourrait l'appeller "Caca", ca changerait rien (sauf par apres ou il foudrait adapter le code selon le nom choisi). "sections" est un tableau.
      sections: [
        {
          titre: "Chapeaux",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "Chapeaux", // 57. Rajout de ces trucs pour le routage.
        },
        // 21. titre: On remet le "classname" de la <div> (de "homepage.component.jsx"). Ici "Chapeaux"
        // imageUrl: On va choper une image sur le web ou autre..
        // id: Dans Node.js, des données dans un tab. (ici "section" est un tableau!) doivent avoir leur "id". C'est mieux! (Après si c'est une base de donnée, je ne saurais pas comment pour aller chercher une photo et auto-incrémenter l'"id" dans tout le code. Mais là c'est limité a quelques images donc "ok"..). Autre point. Un tableau commence toujours avec l'"id" [0], pourquoi ici on commence par "id:1" ???
        {
          titre: "Vestes",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "Vestes", // 57. Rajout de ces trucs pour le routage. Ne pas oublier de passer cette nouvelle variable a notre composant. (58. plus bas).
        },
        {
          titre: "Baskets",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "Baskets", // 57. Rajout de ces trucs pour le routage. Ne pas oublier de passer cette nouvelle variable a notre composant. (58. plus bas).
        },
        {
          titre: "Femmes",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          // 28. Augmentation de la taille de l'image via un parametre "taille".
          taille: "large",
          id: 4,
          linkUrl: "Femmes", // 57. Rajout de ces trucs pour le routage. Ne pas oublier de passer cette nouvelle variable a notre composant. (58. plus bas).
        },
        {
          titre: "Hommes",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          // 28 BIS. Augmentation de la taille de l'image via un parametre "taille" et modification dans le "render" pour envoyer l'info...
          taille: "large",
          id: 5,
          linkUrl: "Femmes", // 57. Rajout de ces trucs pour le routage. Ne pas oublier de passer cette nouvelle variable a notre composant. (58. plus bas).
        },
      ],
    };
  }

  // Te goure pas, c'est "render" PAS "Render"!!!
  render() {
    return (
      <div className="Categories">
        {/* 22. On propage le resultat des changements (titre + images) dans toute la <Div> "Categorie via le {props.titre} selon la regle : PARENT->ENFANT*/}

        {this.stage.sections.map(({ titre, imageUrl, id, taille, linkUrl }) => (
          // 58. Ajout de "linkUrl" pour le routage. PS: ES6 permet d'économiser du code sur la ligne du haut, pour ne PAS devoir à chaques crétion d'un nouvel élément le rajouter ici, avec :
          // " this.stage.sections.map(({id, ...autreSectionProps}) => ( <ChoixItem key={id} {...autreSectionProps} /> "
          // 59. Maintenant ENCORE, Il faut adapter le composant "choix-item.component.jsx" Go en 60. Dans ce fichier!
          <ChoixItem
            key={id}
            imageUrl={imageUrl}
            titre={titre}
            taille={taille}
            linkUrl={linkUrl}
            // 58. "linkUrl" Ici aussi.
            // 29. Apres ça, il faudra adapter "ChoixItem". Go -> choix-item.component.jsx
          />
        ))}

        {/* (map = foreach!!!) */}
        {/* Traduction : Pour chaque {"titre", "imageUrl" et "id" de "sections"} qui se trouve dans "this.stage" on va mettre DANS le composant "ChoixItem" (importé de "choix-item.component.jsx" en fin de page, on en a permis l'export via : "export default ChoixItem;") son "id" en "key", imageUrl en "imageUrl" et son "titre" en "titre". */}
      </div>
    );
  }
}

// 23. Maintenant qu'on à créé le composant, on en permet l'export éventuel..
export default Categorie;

// 24. La suite, c'est le nettoyage du composant "homepage". Go -> "homepage.component.jsx"
