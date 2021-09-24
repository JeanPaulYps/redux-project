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
            return rejectWithValue('Opps there seems to be an error')
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
        [getUserPublications.rejected]: (state) => {
            state.error = 'Error los datos no estan disponibles';
        }
    }
})

export { publicationsSlice, getUserPublications, };