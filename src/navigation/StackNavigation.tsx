import React, {PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import { MyToDoNavigation } from './MyToDoNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tabs">
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen
        name="MyToDo"
        component={MyToDoNavigation}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export {StackNavigation};
