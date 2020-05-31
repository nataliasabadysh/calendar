import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


import user from './auth/reducer';
import { movieReducer } from './movies/reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const history = createBrowserHistory();

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
      title: (action) => {
          return action.error ? 'firebrick' : 'deepskyblue';
      },
      prevState: () => '#1C5FAF',
      action:    () => '#149945',
      nextState: () => '#A47104',
      error:     () => '#ff0005',
  }
});
const routerMiddleware = createRouterMiddleware(history);
const middleware = [ routerMiddleware, thunk ];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const rootReducer = combineReducers({
  user,
  movie: movieReducer,
  auth: persistReducer(authPersistConfig, user),
});

// createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));


export const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
