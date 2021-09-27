import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://jsonplaceholder.typicode.com";

const initialState = {
    'userPublications' : [],
    'loading': true,
    'error': ''
};

const loadTasks = createAsyncThunk(
    'tasks/getTasks',
    async (_, { rejectWithValue }) => {
        try{
            let users = await fetch(`${URL}/users`).then(response => {
                if (!response.ok){
                    throw new Error ('Recurso no disponible')
                }
                return response.json();
            })
            let idUsers = users.map( user => user.id );
            return(idUsers);

        }
        catch (error) {
            console.log(error);
            rejectWithValue('We have problems loading the data. Please try later');
        }
    }
)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState, 
    reducers: {
        intializeState (state) {
            state.tasks = [];
            state.loading = false;
            state.error = '';
        },
    },
    extraReducers: {
        [loadTasks.fulfilled] (state, {payload}) {
            state.tasks = payload;
        }
    },
})

export { tasksSlice, loadTasks}