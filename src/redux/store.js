import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import Reducer from './reducer';

const middlewares = [logger];
export const store = createStore(Reducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
