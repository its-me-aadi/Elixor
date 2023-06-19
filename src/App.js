import React from 'react';

import Navbar from "./Components/common/Navigation/Navbar";
import Page1 from './Components/Page1/page1';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Page1 />
    </div>
  );
}

export default App;
