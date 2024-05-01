import { configureStore } from '@reduxjs/toolkit';

import tasksManagerSlice from 'features/tasksAdding/model/tasksManagerSlice';

export const store = configureStore({
    reducer: {
        taskAdding: tasksManagerSlice,
    },

    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         immutableCheck: false,
    //         serializableCheck: false,
    //     }).concat([]),
});

/** {@link https://redux.js.org/usage/us\age-with-typescript} */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
