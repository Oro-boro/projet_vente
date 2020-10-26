// 66. Création de tout ce bordel donc... (détail troublant : "this.staTe =... /n'est pas/ "this.staGe =..." (comme dans "categorie.component.jsx") Quelle est la différence? En tout cas ICI c'est "state" et pas "stage".. )
// 67. Je le rapelle, il s'agit d'une "class". Des données seront gérées à partir de ce composant. Ces données seront IMPORTEES dans le "state.collections" à partir d'un fichier contenant des données statiques (Exactement comme dans "categorie.component.jsx"). Afin d'être modifiables dans le futur!
// 68. "shopping.styles.scss" est toujours vide. Normal. Occupons nous de la création des données qui rempliront le tab. "collections" ici présent. -> Création du fichier "shopping.data.jsx". (point 69. à l'intérieur..)
import React from "react";
import "./shopping.styles.scss";
import SHOP_DATA from "./shopping.data"; // 72. Import de notre tab. SHOP_DATA. -> Go -> (point 73. plus bas)
import ApercuCollection from "../../components/apercu-collection/apercu-collection.component"; // 79. Import du composant "ApercuCollection". Go -> 79 BIS. (En bas)

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA, // 73. Ajout du tableau "SHOP_DATA" dans "collections" (qui avant était écrit "collections: []"). Maintenant il faut l'afficher! Création d'un "render" en point 74.
    };
  }

  // 74. Création entiere du "render" avec seulement un return <div>Shopping Page</div> qui donc pour le moment n'affiche qu'un simple message. Il faut encore adapter le "App.js" pour tester.. Donc Go -> "App.js" (point 75.)
  // 79 BIS. (Obsolete, réécriture en 80.)

  /*
  render() { 
    return <div>Shopping Page</div>;
  }
  */

  // 80. (Le nouveau "render") - On déstructure d'abord le "state.collections". Et ensuite on boucle sur chaque éléments de "collections" :
  // 81. Tester avec l'URL "locahost:3000/shopping".
  // 82. Il affiche un peu trop d'articles, pour n'en afficher que 4, retour dans "apercu-collection.component.jsx" (point 83.)
  render() {
    const { collections } = this.state;
    return (
      <div className="shop_page">
        {collections.map(({ id, ...autreCollectionProps }) => (
          <ApercuCollection key={id} {...autreCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
