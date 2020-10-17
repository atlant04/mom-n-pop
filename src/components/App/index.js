import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheet.scss';
import Join from '../Join';
import Landing from '../Landing';
import orange from '@material-ui/core/colors/orange';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
