import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, Container } from '@material-ui/core';
import { theme } from './theme';

// Pages
import Error404 from './pages/Error 404';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
