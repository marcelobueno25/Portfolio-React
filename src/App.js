import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, Container } from '@material-ui/core';

// Pages
import Error404 from './pages/Error 404';
import Home from './pages/Home';


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#723891'
      },
      secondary: {
        main: '#FF5484'
      }
    },

  });
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
