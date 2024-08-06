import {createSlice} from '@reduxjs/toolkit';
import {AppState} from '../store';

const initialState = {
  value: [],
};

const myToDoListReducer = createSlice({
  name: 'myToDoList',
  initialState,
  reducers: {
    // reducer functions here
  },
});

export const {} = myToDoListReducer.actions;
export const toDoList = (state: AppState) => state.myToDoList.value;
export default myToDoListReducer.reducer;
