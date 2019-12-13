import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/style.scss';

import Intro from './components/Intro';
import PositionNav from './components/PositionNav';
import YearNav from './components/YearNav';
import AlbumSingle from './components/AlbumSingle';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-grid">
          <YearNav />
          <PositionNav />
          <main>
            <Route exact path="/" component={Intro} />
            <Route exact path="/:year/:routePos" component={AlbumSingle} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
