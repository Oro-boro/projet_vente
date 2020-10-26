// 87. Bon, voilà, la flemme de commenter.. y'a tout les composants nécessaire pour lire le tab. des "items" de "shopping.data.jsx"
// 87 BIS. Go -> "collection-item.styles.scss" pour remplir le style du composant.. (Point 88.)

import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, nom, prix, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="nom">{nom}</span>
      <span className="prix">{prix}</span>
    </div>
  </div>
);

export default CollectionItem;
