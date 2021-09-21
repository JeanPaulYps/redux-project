import { createSlice } from '@reduxjs/toolkit'

const intialState = {
  cargando: true,
  usuarios:  []
} ;


const usersActions = createSlice({
  name: 'users',
  initialState: intialState,
  reducers: {
    downloadedUsers (state, action) {
      state.cargando = false; 
      state.usuarios = action.payload;
    },
    ready (state){
      state.cargando = false;
    },
  },
})


export { usersActions, }