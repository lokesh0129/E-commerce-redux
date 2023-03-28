import { createStore ,applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk';


import Reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;


