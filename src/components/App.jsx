import React from 'react';
import {createGlobalStyle} from 'styled-components'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import AppRouter from './router/AppRouter'

const backgroundImage = require('../assets/background.jpg')

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #283761;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    margin: 0;
  }
  #root {
    background: linear-gradient(45deg, #0c3e88fa, #283761ba);
  }
  * {
    font-family: Open Sans, sans-serif;
  }
`

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#8C3ECE'
      },
      secondary: {
        main:'#FFFCFC'
      }
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
          fontSize: 22,
          borderRadius: 30
        }
      },
      MuiDialog: {
        paper: {
          borderRadius: 15
        }
      }
    }
  }
)

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyle/>
      <AppRouter />
    </MuiThemeProvider>
  )
}

export default App
