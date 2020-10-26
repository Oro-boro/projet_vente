import React from "react";
import { Link } from "react-router-dom"; // 98. - import { Link } from "react-router-dom" : C'est "nouveau" et utilisé plus bas.
import { ReactComponent as Logo } from "../../assets/couronne.svg"; // 99. Ca aussi c'est nouveau. C'est un chargement du logo en .SVG (couronne.svg) dans React.
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shopping">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          LOGOUT
        </div>
      ) : (
        <Link className="option" to="/inscription">
          LOGIN
        </Link>
      )}
    </div>
  </div>
);

// 100. Le reste, "link" et tout c'est du routage via "react-router-dom".
// 101. Maintenant il faut ajouter le composant "Header" à nottre Appli. Donc dans "App.js" MAIS AVANT le composant <Switch></Switch> qui s'y trouve (car le "Header" est tout en haut de la page et que le <Switch> englobe les <div> du site (donc en dessous du "header")). Go -> "App.js" (Point 102.))

export default Header;
