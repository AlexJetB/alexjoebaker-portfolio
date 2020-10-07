import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import Navigation from './partials/Navigation';

import { Home, Background, Skillset, Projects } from './pages';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation className="App-header" />
        <Switch>
          <Route path="/bg">
            <Background />
          </Route>
          <Route path="/sk">
            <Skillset />
          </Route>
          <Route path="/pr">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
