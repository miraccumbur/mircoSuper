import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from '../store';
import {IMyToDoTab} from '../../types/myToDo';
import i18n from 'i18next';


const initialState: IMyToDoTab = {
  id: 'all',
  text: i18n.t('myToDo.tabs.all'),
};

const myToDoTabReducer = createSlice({
  name: 'myToDoTab',
  initialState,
  reducers: {
    setTab(state, action: PayloadAction<IMyToDoTab>) {
      state = action.payload;
      return state
    },
  },
});

export const {setTab} = myToDoTabReducer.actions;
export const toDoList = (state: AppState) => state.myToDoTab;
export default myToDoTabReducer.reducer;
