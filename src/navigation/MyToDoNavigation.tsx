import React, {PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ToDoListScreen from '../screens/MyToDo/MyToDoScreen';
import CreateNewMyToDoTab from '../screens/MyToDo/CreateNewMyToDoTab';

const Stack = createNativeStackNavigator();

const MyToDoNavigation: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index">
      <Stack.Screen
        name="index"
        component={ToDoListScreen}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name="CreateNewMyToDoTab"
        component={CreateNewMyToDoTab}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};
export {MyToDoNavigation};
