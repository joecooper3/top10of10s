import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './sass/style.scss';

import Intro from './components/Intro';
import PositionNav from './components/PositionNav';
import YearNav from './components/YearNav';
import AlbumSingle from './components/AlbumSingle';

class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <Router>
          <div className="app-grid">
            <YearNav />
            <PositionNav />
            <main>
              <Route exact path="/" component={Intro} />
              <Route exact path="/:year/:pos" component={AlbumSingle} />
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
