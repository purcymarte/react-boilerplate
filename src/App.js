import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider} from 'styled-components'

import { store, persistor } from './redux/store';

import Routes from './routes'
import Navigation from './screens/Navigation'
import { Section } from './components/generic/Views'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router>
            <Section>
              <Navigation />
              <Routes />
            </Section>
          </Router>
        </ThemeProvider>
        <GlobalStyle/>
      </PersistGate>
    </Provider>
  );
}

export default App;
