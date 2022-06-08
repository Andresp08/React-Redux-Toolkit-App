
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'prueba',
    initialState:{
        name: 'Pipe',
        email: 'Pipe27@gmail.com'
    },
    reducers:{
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email
        },
        remove: (state) => ({
            name: '', email: ''
        })
    },
});

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;