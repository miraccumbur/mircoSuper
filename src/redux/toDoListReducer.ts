import {createSlice} from '@reduxjs/toolkit';
import {AppState} from './store';

const initialState = {
  value: [],
};

const toDoListReducer = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    // reducer functions here
  },
});

export const {} = toDoListReducer.actions;
export const toDoList = (state: AppState) => state.toDoList.value;
export default toDoListReducer.reducer;
