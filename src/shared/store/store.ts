import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {},

    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         immutableCheck: false,
    //         serializableCheck: false,
    //     }).concat([]),
});

/** {@link https://redux.js.org/usage/usage-with-typescript} */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
