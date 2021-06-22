import React from 'react';
import Home from './Home/'
import './Styles.scss'; 
import { useTranslation, Trans } from "react-i18next";
import "../src/common/translate/i18n";
import '../src/common/translate/i18n.js';
function App() {
  return (
    <div className="App">
      <Home></Home>

    </div>
  );
}

export default App;
