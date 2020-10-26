import React from "react";
import "./form-input.styles.scss";

// 115. Pas le temps d'écrire et comprendre tout le "component". Aller copier / coller moche. Ca fonctionne... normalement! Aller Go -> "form-input.style.scss" (Point 116.) pour changer la gueule de tout ca...
const FormInput = ({ gestionChangement, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={gestionChangement}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "reduis" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
