import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
