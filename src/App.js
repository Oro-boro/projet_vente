import React from "react";
import "./App.css";

import Homepage from "./homepage.component";
// 4. le component "Homepage" exporté et le chemin de ce component.

function App() {
  return (
    <div>
      <Homepage></Homepage>
      {/* 5. La <Div> Globale entiere, "Homepage" avec tout ce qu'elle contient */}
    </div>
  );
}

export default App;
