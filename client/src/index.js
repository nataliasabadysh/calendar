// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Instruments
import { store , persistor} from './redux/store';

import * as serviceWorker from './serviceWorker';
import './theme/base.css';
import './theme/index.css';

// Components 
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

