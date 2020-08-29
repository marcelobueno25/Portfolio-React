import { createMuiTheme } from '@material-ui/core';

// Criando uma instancia theme.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#723891'
    },
    secondary: {
      main: '#FF5484'
    }
  },
  typography: {
    fontFamily: 'metropolis-medium'
  },
  shape: {
    borderRadius: 5
  },
  spacing: 5,
});