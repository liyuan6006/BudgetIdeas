import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import budgetApp from './reducers/index';
import {Provider} from 'react-redux'
const store = createStore(budgetApp);
// // Log the initial state
// console.log(store.getState());
// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );
// // Dispatch some actions
// store.dispatch(addCategory('Learn about actions'));
// store.dispatch(addCategory('Learn about reducers'));
// store.dispatch(addCategory('Learn about store'));


ReactDOM.render(
<Provider store={store}>
  <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
