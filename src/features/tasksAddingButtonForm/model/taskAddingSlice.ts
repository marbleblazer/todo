import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isTaskBeingAdded: false,
};

/** Slice managing task adding on board */
const taskAddingSlice = createSlice({
    name: 'taskAdding',
    initialState,
    reducers: {
        toggleTaskAddingStatus: state => {
            state.isTaskBeingAdded = !state.isTaskBeingAdded;
        },
    },
});

export const { toggleTaskAddingStatus } = taskAddingSlice.actions;

export default taskAddingSlice.reducer;
