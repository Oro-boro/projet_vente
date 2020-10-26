import React from "react";
import "./login.styles.scss";
import FormInput from "../form-input/form-input.component"; // 117. Voilà, Import du composant "FormInput". Le point 118. c'est l'intégration du nouveau "FormInput" à la place de l'ancien champ "input". Simplement. Je vais essayer d'être clair, plus bas (Point 119.).
import BoutonCustom from "../bouton_custom/bouton-custom.component"; // 123. Voilà, c'est importé. Maintenant il faut aller l'intégrer plus bas, à la place de "<input type="submit" ... " (Point 124.)
import { loginAvecGoogle } from "../../firebase/firebase.utils"; // 142. Import du composant "firebase.utils.js" ou se trouve notre fichier de connection à Google Firebase. (Go l'intégrer dans le (Point 143.) Plus bas en dessous de "<BoutonCustom type="submit">Connecter</BoutonCustom>" )

// 110. Gros copié / collé baveux de tout ca.. Il est tard, je suis fatigué et fait chier de commenter! Apparemment il y a un "nouveau" truc : la méthode "gestionChangement" (voir Point 111. Plus bas.)
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  gestionSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  gestionChangement = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  // 111. Avec la méthode gestionChangement() le state est mis a jour a chaque changement. (Voir 112. et 112 BIS.) Sinon il faut ajouter ce composant dans le "login-et-inscription" (le composant qui contient le composant qu'on vient de crée (ici "login" et "Email" (en plus!)) Ben faut le mettre dans "login-et-inscription" donc Go -> "login-et-inscription.component.jsx" (Point 113.) )

  render() {
    return (
      <div className="login">
        <h2 className="titre">J'ai déjà un compte</h2>
        <span>Connectez vous avec votre email et mot de passe</span>
        <form onSubmit={this.gestionSubmit}>
          {/* 119. (et plus bas 119 BIS.) Le champ "<FormInput... " était AVANT juste "<input..." Mais avec l'intégration du composant, bha <input> est remplacé. Autre changement (119 BIS_2) -> On met les champs "<label>Email</label>" et "<label>Mot de passe</label>" sont déplacés à l'INTERIEUR du <FormInput> et ce, pour la partie "mail" et "password". Pareil, le "onChange" de départ devient "gestionChangement" dans les deux aussi (tout ca, dans les Points 119 BIS_2). Après ca, le formulaire visuellement occupe tout l'écran. Pour remédier à ca, il faut "ajouter du style" au login. Donc aller dans "login.styles.scss". Go -> (Point 120.) */}
          <FormInput /* 119 BIS. Anciennement <input... */
            type="email"
            name="email"
            value={this.state.email}
            /* 112. Avec la méthode "gestionChangement()" le state est mis a jour a chaque changement. */
            /* onChange={this.gestionChangement} - (119 BIS_2) devient : gestionChangement={this.gestionChangement}*/
            gestionChangement={this.gestionChangement}
            label="email" /* 119 BIS_2 - (Anciennement : <label>Email</label> plus bas) */
            required
          />
          {/* <label>Email</label> */} {/* 119 BIS_2 */}
          <FormInput /* 119 BIS. Anciennement <input... */
            type="password"
            name="password"
            value={this.state.password}
            /* 112 BIS. Avec la méthode "gestionChangement()" le state est mis a jour a chaque changement. */
            /* onChange={this.gestionChangement} - (119 BIS_2) devient : gestionChangement={this.gestionChangement}*/
            gestionChangement={this.gestionChangement}
            label="password" /* 119 BIS_2 - (Anciennement : <label>Mot de passe</label> plus bas) */
            required
          />
          {/* <label>Mot de passe</label> */} {/* 119 BIS_2 */}
          <div className="bouttons">
            <BoutonCustom type="submit">Connecter</BoutonCustom>
            {/* 124. Avant c'etait " <input type="submit" value="Connecter" /> " Mais après l'import du composant c'est " <BoutonCustom type="submit">Connecter</BoutonCustom>". Bon Maintenant que c'est ok, Go -> "login.style.scss" pour rajouter un peu de style "login" (Point*/}
            <BoutonCustom onClick={loginAvecGoogle} isGoogleLogin>
              Connecter avec Google
            </BoutonCustom>
          </div>
          {/* 143. Voilà, tu rajoutes ca pour intégrer le composant Firebase de "firebase.utils.js" Pour le moment, nous pouvons avoir une connexion sécuriser avec l'outil Google mais notre application n'est pas encore au courant. Mais si vous regarder dans la partie Authentification / User : On peut voir qu'il y a une connexion active sur FireBase. Pour cela nous allons intégrer le module Auth de FireBase dans la racine de notre application "App.js" Donc Go "App.js" (Point 144.)*/}
        </form>
      </div>
    );
  }
}

export default Login;
