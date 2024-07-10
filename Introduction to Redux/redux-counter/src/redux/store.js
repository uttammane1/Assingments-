import { createStore } from 'redux';
import counterReducer from './reducers';

// Create store
const store = createStore(counterReducer);

export default store;
