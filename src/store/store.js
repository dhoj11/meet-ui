import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from './reducers/counterReducer';
import { pokemonApi } from '../services/pokemon'

const rootReducer = {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
};

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});


setupListeners(store.dispatch)
export default store;