import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheet.scss';
import OwnerDashboard from '../OwnerDashboard';
import CustomerDashboard from '../CustomerDashboard';
import Landing from '../Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/owner">
            <OwnerDashboard />
          </Route>
          <Route path="/customer">
            <CustomerDashboard />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
