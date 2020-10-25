// 9.BIS : Comme dans le "homepage.component.jsx" on importe react, on lie la feuille de style qui va avec le fichier (ici le fichier contient le composant "ChoixItem").

import React from "react";
import "./choix-item.styles.scss";

// 10. On "construit" le composant (comme dans la homepage) on lui donne le nom qu'on veut (ici "ChoixItem", en un mot).

const ChoixItem = ({ titre, imageUrl, taille }) => (
  // 10. On fait un COPIER / coller (pas couper hein!) de la <div> "choix-item" qui se trouve aussi dans "homepage.component.jsx"
  // 26 BIS. Ajout de l'image dans "ChoixItem" - "const ChoixItem = (props, {imageUrl}) => (..)"

  /*

  <div className="Choix-item">
    <div className="Content">
      <h1 className="Titre">Baskets</h1>
      <span className="Sous-titre">Achetez maintenant</span>
    </div>
  </div>


  // 11. Sauf qu'avec ça, le composant ne "reçoit" rien... Il faut lui envoyer les données voulues en "props" (le fâmeux PROPS) donc... On AJOUTE "props" dans
  // 12. "const ChoixItem = () => ... "
  // 13. On modifie donc le fichier en y foutant des "props" là ou on veut les infos.. Ici, le "titre" (seul element qui change entre les différents "Choix-item" des <div>) doit être modif. selon que le titre est "Chapeaux", "Vestes", "Baskets", "Femmes" ou "Hommes".

  // 13.BIS : Y'a un 2 moyen de le faire, avec "props" (et dans ce cas, il faudra mettre "const ChoixItem = (props) => ..." au dessus. Et l'autre technique est plus bas. Sinon, ca donne pour le moment :


  <div className="Choix-item">
    <div className="Content">
      <h1 className="Titre">{props.titre}</h1>
      <span className="Sous-titre">Achetez maintenant</span>
    </div>
  </div>
  );
  

  <div style={{ backgroundImage: `url(${imageUrl})` }}
    className={`${taille} Choix-item`}
  >

    /* 30. Ajout de "const ChoixItem = ({ titre, imageUrl, taille }) =>" dans "const" ET "{`${taille} Choix-item`}" ici pour changer la taille des deux images; là normalement, le style "large" n'est pas définit dans la feuille SCSS. Go -> choix-item.style.scss */

  /* 26 BIS. Ajout de l'image en "backgroundImage" directement dans la <div> "Choix-item". Maintenant, il faut ENCORE changer le "choix-item.style.scss" pour mettre l'image en "cover" et "center" */
  /* ATENTION!!! Pour `url(${imageUrl})` CE NE SONT PAS DES GUILLEMETS qu'il faut mettre! Bien veiller à foutre des " ` " sinon, cassé!*/
  /* 27. Ensuite, go -> cotegorie.component.jsx pour changer un peu les tailles des 2 plus grandes images */

  // 35. Bon, on doit adapter la <div> pour faire une anim sympa.
  // 36. Ensuite, il faut ajouter le classe "background-image" dans la feuille de style "homepage.style.scss" (oui, pourquoi pas dans la feuille de style de "choix-item"..? Ca serait putain de logique.. Ben NON! Kamoulox!).
  <div className={`${taille} Choix-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />

    <div className="Content">
      <h1 className="Titre">{titre.toUpperCase()}</h1>
      {/* 34. Ajout de .toUpperCase() qui est du Javascript, pour mettre le titre en majuscule. Suite 35. plus haut..*/}
      <span className="Sous-titre">Achetez maintenant</span>
    </div>
  </div>
);

// 14. Maintenant qu'on à créé le composant, on en permet l'export éventuel..

export default ChoixItem;

// 15. Suite avec la création du coposant "CATEGORIE; création du dossier "catégorie" dans "src/components" et création de deux fichiers (encore) "categorie.component.jsx et "categorie.styles.scss" dedans. (Suite des explications dans "categorie.style.scss").
