import { createSlice } from '@reduxjs/toolkit'

const intialState = {
  cargando: true,
  usuarios:  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    }
  ]
} ;


const usersActions = createSlice({
  name: 'users',
  initialState: intialState,
  reducers: {
    ready (state){
      state.cargando = false;
    },
  },
})


export { usersActions }