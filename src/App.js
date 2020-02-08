import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'


// fab representa todos os componentes da biblioteca free-brands-svg-icons
// import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import { 
  faCoffee,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import SideMenu from './components/SideMenu/SideMenu'

// Criando minha biblioteca de icones para serem usadas em qualquer componente sem necessitar de imports.
library.add(faGithub, faLinkedin, faCoffee, faEnvelope)

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
