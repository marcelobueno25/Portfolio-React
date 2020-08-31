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
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: '#252A2E',
        padding: 15
      }
    },
    MuiTypography: {
      colorPrimary: {
        color: '#222'
      },
      colorSecondary: {
        color: '#fff'
      },
      paragraph: {
        fontSize: 17
      },
      h1: {
        fontSize: 33
      },
      h2: {
        fontSize: 30
      },
      h3: {
        fontSize: 27
      },
      h4: {
        fontSize: 24
      },
      h5: {
        fontSize: 21
      },
      h6: {
        fontSize: 18
      }
    }
  }
});