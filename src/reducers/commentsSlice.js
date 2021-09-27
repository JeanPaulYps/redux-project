import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://jsonplaceholder.typicode.com";

const initialState = {
    'publicationComments' : [],
    'loading': true,
    'error': ''
}

const getComments = createAsyncThunk(
    'comments/getComments', 
    async (publicationId, { rejectWithValue })=> {
        try {
            let publicationComments = await fetch(`${URL}/comments?postId=${publicationId}`).then(response => {
                if(!response.ok){
                    throw new Error('Direccion no disponible');
                }
                return response.json();
                }
            );
            
            return publicationComments;
        } catch(err){
            console.log(err);
            return rejectWithValue('We have problems loading the data. Please try later')
        }
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        intializeLoading (state){
            state.publicationComments = [];
            state.loading = true;
            state.error = '';   
        }
    },
    extraReducers: {
        [getComments.fulfilled]: (state, { payload }) => {
            state.publicationComments = payload;
            state.loading = false; 
        },
        [getComments.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [getComments.rejected]: (state) => {
            state.error = 'Error los datos no estan disponibles';
            state.loading = false;
        }
    }
})

export { commentsSlice, getComments }