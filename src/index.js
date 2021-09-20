import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { App }  from './Components/App';
import usuariosReducer from './reducers/usuariosReducer';


const store = createStore(
  usuariosReducer
);


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


