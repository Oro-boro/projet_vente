// 78. Voilà, création du composant, avec tout le bordel : Il va recevoir deux parametres, le titre de la collection : "titre", et un tableau avec le nom des articles de la collection : "items" (actuellement, seulement le nom ("item.nom") et l'ID : "item.id" mais ca, on sait que c'est parce qu'il s'agit d'un tab. et que les "tableaux node.js" veulent toujours des "id"). Reste à re-configurer le "render" de "shopping.component.jsx" pour qu'il envoie les bonnes valeurs via le "render" (pour le moment il "return" toujours juste "<div>Shopping Page</div>"). Go -> "shopping.component.jsx" (point 79.).

import React from "react";
import "./apercu-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component"; // 90. L'import de "collection-item.component.jsx". Il va falloir ENCORE modifier le "const ApercuCollection = ..." (Point 91.)

const ApercuCollection = ({ titre, items }) => (
  <div className="apercu-collection">
    <h1 className="titre">{titre.toUpperCase()}</h1>
    <div className="apercu">
      {/* 83. Anciennement : {items.map((item) => (<div key={item.id}>{item.nom}</div>))</div></div> */}
      {/* 84. La ligne est devenue : " {items.filter((item, idx) => idx < 4).map((item) => (<div key={item.id}>{item.nom}</div>))}</div></div> */}
      {/* 85. Pour n'afficher que 4 articles (Fonction "filtre" de ES6). ATTENTION CES PUTAIN de lignes sont COMPLIQUEES!!!*/}
      {/* 86. Maintenant, il faut faire le composant qui va afficher l'article dans cette liste. Création du composant "collection-item". Nouveau dossier : "collection-item" dans "src/components". Dedans, les deux fichiers : "collection-item.component.jsx" et "collection-item.styles.scss" Go dans "collection-item.component.jsx" -> Point 87. */}
      {/* // 91. Nouvelle modif. de ce PUTAIN de composant; ca commence à devenir vraiment pas clair... Je laisse l'ancien ici pour les points 83. 84. 85 et 86. Le nouveau se trouve en Point 92.
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <div key={item.id}>{item.nom}</div>
        ))}
    </div>
  </div>
        */}

      {/* 92. La nouvelle modif du composant afin d'afficher le contenu de "collection-item.component.jsx". En mode ES6 pour.. j'sais pas... automatiser le truc encore une fois. C'est bien, mais ca rend le tout de moins en moins clair.. Go -> Point 93. En dessous une fois cela fini. */}
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

// 93. Voilà, comme précédemment, on "explose" les attributs à envoyer.. C'est moche, mais les images devraient au moins être là.. Maintenant, aller dans la feuille de style "apercu-collection.styles.scss" qui est actuellement importée, mais toujours vide. Pour rendre ça moins laid. Go.

export default ApercuCollection;
