import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './reset.css';
import './assets/css/Base.css';

import Cabecalho from './components/Cabecalho';
import Home from './paginas/Home';
import Pagina404 from './paginas/Pagina404';
import DetalhesJogo from './paginas/DetalhesJogo';
import Rodape from './components/Rodape';
import PaginaFavoritos from './paginas/PaginaFavoritos';

function App() {
  const [favoritos, setFavoritos] = useState([]);
    
  useEffect(() => {
      console.log(favoritos)
  }, [favoritos])

  return (
      <Router>

        <Cabecalho />
        <Switch>
          
          <Route exact path="/" component={Home} />

          <Route exact path="/games/:nome">
            <DetalhesJogo favoritos={favoritos} setFavoritos={setFavoritos} />
          </Route>

          <Route exact path="/favoritos" component={PaginaFavoritos} />

          <Route component={Pagina404} />
          
        </Switch>
        <Rodape />
        
      </Router>

  );
}

export default App;