import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import mySaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['PageReduxReducer'],
  whitelist: ['PageReduxReducer', 'auth'],
};

// const localCompose = isProduction
//     ? compose
//     : composeWithDevTools({ trace: true })
//   const isExtensionCompose =
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//     isProduction
//   const composeEnhancers = isExtensionCompose
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : localCompose

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware width thunk
  // applyMiddleware(thunk)
  // applyMiddleware width sagas
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);

export const persistor = persistStore(store);
