// store.js
import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from '../reducer/slice';

const store = configureStore({
    reducer: {
        appState: appStateReducer,
    },
});

export default store;
