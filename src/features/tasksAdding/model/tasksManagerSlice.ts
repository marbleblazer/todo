import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isTaskBeingAdded: false,
};

/** Slice managing task adding on board */
const tasksManagerSlice = createSlice({
    name: 'taskAdding',
    initialState,
    reducers: {
        toggleTaskAddingStatus: state => {
            state.isTaskBeingAdded = !state.isTaskBeingAdded;
        },
    },
});

export const { toggleTaskAddingStatus } = tasksManagerSlice.actions;

export default tasksManagerSlice.reducer;
