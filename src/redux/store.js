import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';
import { rootSaga } from './sagas';


const persistConfig = {
  key: 'root',
  storage // defaults to storing in localStorage for web
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // enables redux dev tools when chrome plugin is installed
const sagaMiddleware = createSagaMiddleware();


// create store
const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers(
	  applyMiddleware(sagaMiddleware),
	  ),
);
// create persisted store
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
