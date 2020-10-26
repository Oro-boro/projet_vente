import React from "react";
import "./login-et-inscription.styles.scss";
import Login from "../../components/login/login.component"; // 113. Import du composant "Login". Ici, comme toujours et dans le code (plus bas : (Point 114.))

// 107. Voilà, c'est le début de composant "LoginEtInscription". Il faut apres l'importer dans  notre application, c'est à dire dans App.js ! Donc Go! :
const LoginEtInscription = () => (
  <div className="login-et-inscription">
    Inscription
    <Login />
    {/* 114. Voilà, la balise est intégrée dans le code. Voilà ca donne 2 beaux inputs. Maintenant on va créer un composant pour les inputs et les boutons, car ceux-ci peuvent être eventuellement réutilisables. Créer un nouveau dossier "form-input" dans le dossier "components" et 2 fichiers "form-input.component.jsx" et "form-input.styles.scss". Apres Go -> "form-input.component.jsx" pour le (Point 115.) */}
  </div>
);

export default LoginEtInscription;
