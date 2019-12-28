import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/style.scss';
import { StoreProvider } from './store/AppStore';

import Intro from './components/Intro';
import PositionNav from './components/PositionNav';
import YearNav from './components/YearNav';
import AlbumAll from './components/AlbumAll';
import AlbumSingle from './components/AlbumSingle';

const App = () => (
  <Router>
    <StoreProvider>
      <div className="app-grid">
        <YearNav />
        <PositionNav />
        <main>
          <Route exact path="/" component={Intro} />
          <Route exact path="/:routeYear/:routePos" component={AlbumSingle} />
        </main>
      </div>
    </StoreProvider>
  </Router>
);

export default App;
