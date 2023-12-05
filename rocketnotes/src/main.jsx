import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components'

import { MyContext } from './hooks/myContext'

import GlobalStyles from './styles/global'
import theme from './styles/theme';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <MyContext.Provider value={{email:'samuel@yahoo.com.br'}}>

          <Routes />

        </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
