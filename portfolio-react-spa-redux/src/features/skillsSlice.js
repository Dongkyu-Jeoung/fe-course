import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list : []
}

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        click: (state, action) => {
            state.list.push(action.payload);
        },
    },
})

export const { click } = skillsSlice.actions

export default skillsSlice.reducer