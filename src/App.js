import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './services/pages/Login';
import Search from './services/pages/Search';
import Album from './services/pages/Album';
import Favorites from './services/pages/Favorites';
import Profile from './services/pages/Profile';
import ProfileEdit from './services/pages/ProfileEdit';
import NotFound from './services/pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <main>
        <p>TrybeTunes</p>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

// Observei o código do Imar Mendes no requisito 1(R1) para entender porque as divs mesmo com id não passavam
// logo, observei que elas estavam no local errado.
// Ajuda de Vitu na monitoria do dia 07/03 para entender o porque não precisava do Link no R1.
// Ajuda de Vinicius Dionisio para entender que o exact deveria ir nos 2 profiles, não em 1 apenas.

export default App;
