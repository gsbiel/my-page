import React from 'react';
import './App.css';

import SideMenu from './components/SideMenu/SideMenu'

function App() {
  return (
    <div className="App">
      <main>principal</main>
      <header>header</header>
      <footer>cabeçalho</footer>
      <nav>
          <SideMenu />
      </nav>
    </div>
  );
}

export default App;
