import React from 'react';
import {Image} from 'react-native';
import { useTranslation } from 'react-i18next';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import { appColors } from '../constants/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Apps"
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({size}) => {
          if (route.name === 'Apps') {
            return (
              <Image
                source={require('../assets/images/logo.png')}
                style={{height: size, width: size}}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Image
                source={require('../assets/images/User/user.png')}
                style={{height: size, width: size, borderRadius: size}}
              />
            );
          }
        },
        tabBarActiveTintColor: appColors.tint,
      })}>
      <Tab.Screen name="Apps" component={HomeScreen} />
      <Tab.Screen
        options={{headerShown: false, tabBarLabel:t('tabs.profile')}}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
