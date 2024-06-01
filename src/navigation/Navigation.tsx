import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackNavigation} from './StackNavigation';

const Navigation: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
