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
  {
    id: uuid.v4().toString(),
    text: '1.',
  },
  {
    id: uuid.v4().toString(),
    text: '2.',
  },
  {
    id: uuid.v4().toString(),
    text: '3.',
  },
];

const myToDoTabListReducer = createSlice({
  name: 'myToDoTabList',
  initialState,
  reducers: {
    setNewTab(state, action: PayloadAction<IMyToDoTab>) {
      state.push(action.payload);
    },
  },
});

export const {} = myToDoTabListReducer.actions;
export const toDoList = (state: AppState) => state.myToDoTabList;
export default myToDoTabListReducer.reducer;
