import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://jsonplaceholder.typicode.com"

const initialState = {
    'userPublications' : [],
    'loading': true,
    'error': ''
}

const getUserPublications = createAsyncThunk(
    'publications/getUserPublications', 
    async (userId, { rejectWithValue }) => {
        try {
            let userPublications = await fetch(`${URL}/posts?userId=${userId}`).then(response => {
                if(!response.ok){
                    throw new Error('Direccion no disponible');
                }
                return response.json();
                }
            );
            
            return userPublications;
        }
        catch (err) { 
            console.log(err);
            return rejectWithValue('We have problems loading the data. Please try later')
        }
    }
)



const publicationsSlice = createSlice({
    name: 'Publications',
    initialState,
    reducers: {
        downloadedUserPublications (state, action){
            state.userPublications = action.payload;
        },
        intializeLoading (state){
            state.userPublications = [];
            state.loading = true;
            state.error = '';   
        }
    },
    extraReducers: {
        [getUserPublications.fulfilled]: (state, { payload }) => {
            state.userPublications = payload;
            state.loading = false; 
        },
        [getUserPublications.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [getUserPublications.rejected]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export { publicationsSlice, getUserPublications, };