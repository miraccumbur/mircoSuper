import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import i18n from "../core/localization/i18n"

import {StackNavigation} from './StackNavigation';

const Navigation: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </I18nextProvider>
  );
};

export default Navigation;
