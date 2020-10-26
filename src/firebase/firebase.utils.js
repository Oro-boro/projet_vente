import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 136. Et le contenu de "var firebaseConfig" du fichier fourni par Firebase.

const config = {
  apiKey: "AIzaSyCcWNsHZH_AZWav7CHSXKWQbZiVYQaCpCA",
  authDomain: "projet-vente-79453.firebaseapp.com",
  databaseURL: "https://projet-vente-79453.firebaseio.com",
  projectId: "projet-vente-79453",
  storageBucket: "projet-vente-79453.appspot.com",
  messagingSenderId: "33715330245",
  appId: "1:33715330245:web:faa1b5be118424e3a3e4ac",
  measurementId: "G-B6G1506JT2",
};

// Dans le fichier recu c'est " firebase.initializeApp(firebaseConfig); " Mais je vais mettre ce que le prof à dit:
firebase.initializeApp(config);

// 137. Rajouter ces lignes

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// 138. Pour ne pas charger toutes les fonctionnalité de firebase, nous chargeons le noyaux app, ensuite auth pour la partie authentification et le firestore pour plus tard, la gestion des ventes.
// 139. Ajoutons a notre firebase.utils la configuration de l'authentification :

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const loginAvecGoogle = () => auth.signInWithPopup(provider);
export default firebase;

// 140. La configuration actuelle permet d'utiliser le popup de google. ( voir la documention )
// Configuration dans Firebase : Retour sur la console de Firebase (sur le site), cliquer sur "Authentification" dans le menu Développer.
// Cliquez sur le bouton afin de choisir la méthode de connexion :
// Cliquez sur le crayon a coté de Google. Activer là et ajouter votre adresse pour la gestion des problèmes puis "Enregistrer".
// 141. Ok putain, Maintenant Faut ajouter notre connection par Google dans le composant "login" (Go -> "login.component.jsx" (Point 142.))
