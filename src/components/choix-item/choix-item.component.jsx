// 9.BIS : Comme dans le "homepage.component.jsx" on importe react, on lie la feuille de style qui va avec le fichier (ici le fichier contient le composant "ChoixItem").

import React from "react";
import { withRouter } from "react-router-dom"; // 53. Seul le composant principal, "homepage", a accès a l'history de navigateur. Ce composant-ci "choix-item" lui est un composant ENFANT. Le composant de react-routeur-dom "withRouteur" est une fonction qi reçoit un composant en argument et le retourne transformé de l'ENFANT vers le PARENT donc. (Go -> point 54 plus bas, "export defaut ChoixItem")
import "./choix-item.styles.scss";

// 10. On "construit" le composant (comme dans la homepage) on lui donne le nom qu'on veut (ici "ChoixItem", en un mot).

const ChoixItem = ({ titre, imageUrl, taille, history, linkUrl, match }) => (
  // 10. On fait un COPIER / coller (pas couper hein!) de la <div> "choix-item" qui se trouve aussi dans "homepage.component.jsx"
  // 26 BIS. Ajout de l'image dans "ChoixItem" - "const ChoixItem = (props, {imageUrl}) => (..)"
  // 55. Ajout de "history" (pour le routage) et Go -> 56. plus bas, apres les commentaires.
  // 60. Ajout de "linkUrl" et "match" pour le routage. La propriété "match" de react-routeur-dom permet d'avoir le contexte de l'URL actuel. (Ok si tu le dis..) Reste encore à modifier (ca n'aura jamais de fin) la suite en dessous " <div className={`${taille} Choix-item`} onClick={() => history.push()}> " et y rajouter le routage "match" et "link".. Go 61. En dessous.

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
  <div
    className={`${taille} Choix-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {/* 56. Rajout de "onClick={() => history.push()}" pour le routage. MAIS MAIS MAIS C'est TOUJOURS PAS FINI hein!, il nous faut une URL qui change selon le choix. On doit donc la rendre dynamique.. On va donc encore rajouter des trucs dans "categorie.component.jsx" GO! */}
    {/* 61. Ajout de " `${match.url}${linkUrl}` " dans "history.push()" pour le routage toujours, "match" afin d'avoir le contexte de l'URL actuel je le rapelle..*/}
    {/* 62. VOILA, normalement là avec toutes les manip depuis l'installation de "react-routeur-dom" (point 42. (index.js) pour le début) on a maintenant un systeme de navigation complet. Le starter étant : "http://localhost:3000/" pour le moment, les "boutons" étant liés à présent. La suite : Création de la "shopping-page" (mais avant il faut "nettoyer" nos modifications de test (pour le router) cad la "Version 2" dans App.js. Donc création d'une "Version3", "propre" dans App.js (point 63.) Go -> App.js */}

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

export default withRouter(ChoixItem); // 54. Anciennement : "export default ChoixItem;" Nous lui avons donc rajouté le "High Order Component" (HOC) "withRouter" afin d'avoir acces à tout le systeme de routage. Mais c'est poo fini hein! Go -> 55. (pres de "const ChoixItem = ({ titre, imageUrl, taille })" )

// 15. Suite avec la création du coposant "CATEGORIE; création du dossier "catégorie" dans "src/components" et création de deux fichiers (encore) "categorie.component.jsx et "categorie.styles.scss" dedans. (Suite des explications dans "categorie.style.scss").
