import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './authSlice/slice';
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
import { testimonialsReducer } from './testimonialsSlice/slice';
import { followersReducer } from './followersSlice/slice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    areas: areasReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    testimonials: testimonialsReducer,
    followers: followersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
