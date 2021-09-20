import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { App }  from './Components/App';
import  { usersActions } from './reducers/usersSlice';


const store = configureStore({
  reducer: {users: usersActions.reducer } 
});


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


