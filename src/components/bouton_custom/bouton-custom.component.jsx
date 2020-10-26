// 121. Voilà, le composant "BoutonCustom", avec l'import et tout ca... Maintenant Go -> "bouton-custom.style.scss" pour  changer sa gueule. (Point 122. Inside)
import React from "react";
import "./bouton-custom.styles.scss";

const BoutonCustom = ({ children, isGoogleLogin, ...otherProps }) => (
  <button
    className={`${isGoogleLogin ? "google-login" : ""} bouton-custom`}
    {...otherProps}
  >
    {children}
  </button>
);

export default BoutonCustom;
