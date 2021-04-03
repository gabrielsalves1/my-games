import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './reset.css';
import './assets/css/Base.css';

import Cabecalho from './components/Cabecalho';
import Home from './paginas/Home';
import Pagina404 from './paginas/Pagina404';
import DetalhesJogo from './paginas/DetalhesJogo';

function App() {
  return (
      <Router>
        <Cabecalho />
        <Switch>
          <Route exact path="/my-games/">
            <Home />
          </Route>

          <Route exact path="/my-games/:nome">
            <DetalhesJogo />
          </Route>

          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;