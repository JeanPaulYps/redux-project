import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App }  from './Components/App';
import  { usersActions } from './reducers/usersSlice';
import { publicationsSlice } from './reducers/publicationsSlice';
import { commentsSlice } from './reducers/commentsSlice';
import { tasksSlice } from './reducers/tasksSlice';




const store = configureStore({
  reducer: { 
    users: usersActions.reducer,
    publications: publicationsSlice.reducer,
    comments: commentsSlice.reducer,
    tasks: tasksSlice.reducer
    
  } 
});


ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


