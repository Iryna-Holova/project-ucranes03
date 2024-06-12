import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice/slice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { areasReducer } from './areasSlice/slice';
import { categoriesReducer } from './categoriesSlice/slice';
import { ingredientsReducer } from './ingredientsSlice/slice';
import { recipesReducer } from './recipesSlice/slice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    areas: areasReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    recipes: recipesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
