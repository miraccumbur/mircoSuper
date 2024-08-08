import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from '../store';
import {IMyToDoTab} from '../../types/myToDo';
import uuid from 'react-native-uuid';
import i18n from 'i18next';

const initialState: Array<IMyToDoTab> = [
  {
    id: 'all',
    text: i18n.t('myToDo.tabs.all'),
  },
];

const myToDoTabListReducer = createSlice({
  name: 'myToDoTabList',
  initialState,
  reducers: {
    setNewTab(state, action: PayloadAction<IMyToDoTab>) {
      state.push(action.payload);
    },
    updateTabs(state, action: PayloadAction<Array<IMyToDoTab>>) {
      return action.payload;
    },
    updateTab(state, action: PayloadAction<IMyToDoTab>) {
      state = state.map(s => (s.id === action.payload.id ? action.payload : s));
      return state;
    },
    setReset() {
      return initialState;
    },
  },
});

export const {setNewTab, updateTabs, updateTab, setReset} =
  myToDoTabListReducer.actions;
export const toDoList = (state: AppState) => state.myToDoTabList;
export default myToDoTabListReducer.reducer;
