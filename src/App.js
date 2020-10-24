import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider} from 'styled-components'

import { store, persistor } from './redux/store';

import Routes from './routes'
import Navigation from './screens/Navigation'
import Footer from './screens/Footer'
import { Section } from './components/generic/Views'

import { theme } from './styles/theme'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router>
            <Section>
              <Navigation />
              <Routes />
              <Footer />
            </Section>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
