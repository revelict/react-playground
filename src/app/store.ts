import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import sagaMiddleware from './rootSaga';

// tslint:disable-next-line:no-empty-interface
export interface IStoreState {}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
