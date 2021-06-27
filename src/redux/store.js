import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { user } from './user';

const rootReducer = combineReducers({
  activeUser: user,
});

// Bonus
const lastState = sessionStorage.getItem('redux-store')
  ? JSON.parse(sessionStorage.getItem('redux-store'))
  : {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  lastState,
  composeEnhancers(applyMiddleware(thunk))
);

// Bonus
store.subscribe(() => {
  sessionStorage.setItem('redux-store', JSON.stringify(store.getState()));
});

export default store;
