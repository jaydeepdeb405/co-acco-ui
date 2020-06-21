import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// using sass instead of css (always use extn .scss) (sass docs - https://sass-lang.com/documentation/syntax)
import './App.scss';

import Home from './components/Home'

function App() {
  return (
    /*
     * added basic routes
     */
    <Router>
      <Switch>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
