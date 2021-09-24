import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App }  from './Components/App';
import  { usersActions } from './reducers/usersSlice';
import { publicationsSlice } from './reducers/publicationsSlice'


const store = configureStore({
  reducer: { 
    users: usersActions.reducer,
    publications: publicationsSlice.reducer
  } 
});


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


