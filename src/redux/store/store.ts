import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import {pokemonApi} from '../../services/pokemon/pokomen';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Optional, but highly recommended for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
