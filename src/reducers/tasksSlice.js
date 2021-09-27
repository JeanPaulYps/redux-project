import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://jsonplaceholder.typicode.com";

const initialState = {
    'tasksByUserId' : {},
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

            const taskByUserId = {};
            for (let {id, name} of users){
                taskByUserId[id] = {'name': name, 'tasks': []};
            }

            let tasks = await fetch(`${URL}/todos`).then(response => {
                if(!response.ok) {
                    throw new Error ('Recurso no disponible');
                }
                return response.json();
            });

            for (let {userId, ...taskJSON} of tasks){
                taskByUserId[userId].tasks = [...taskByUserId[userId].tasks, taskJSON];            
            }
            

            return(taskByUserId);
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
            state.tasksByUserId = {};
            state.loading = false;
            state.error = '';
        },
    },
    extraReducers: {
        [loadTasks.fulfilled] (state, {payload}) {
            state.tasksByUserId = payload;
            state.loading = false;
        },
        [loadTasks.pending] (state) {
            state.loading = true;
            state.error = '';
            state.taskByUserId = {};
        },
        [loadTasks.rejected] (state, {payload}){ 
            state.loading = false;
            state.error = payload;
        }
    },
})

export { tasksSlice, loadTasks}