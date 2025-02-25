'use client'

import { configureStore } from '@reduxjs/toolkit';
import ToggleSlice from './features/toggle/toggleSlice';

export const store = configureStore({
    reducer: {
        toggleReducer: ToggleSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;