import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import myToDoListReducer from './MyToDo/myToDoListReducer';
import myToDoTabReducer from './MyToDo/myToDoTabReducer';
import myToDoTabListReducer from './MyToDo/myToDoTabListReducer';

const rootReducer = combineReducers({
  // add other reducers here
  myToDoList: myToDoListReducer,
  myToDoTab: myToDoTabReducer,
  myToDoTabList: myToDoTabListReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // or another storage engine
  whitelist: ['myToDoTab','myToDoTabList'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
