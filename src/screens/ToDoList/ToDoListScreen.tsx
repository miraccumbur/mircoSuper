import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {appColors} from '../../helpers/colors';

import { useTranslation } from 'react-i18next';

const ToDoListScreen:React.FC = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>TO DO LIST - {t('tabs.profile')}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.unbleachedSilk,
    minHeight: '100%',
    alignItems: 'center',
  },
  content: {
    width: '97%',
    top: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
});

export default ToDoListScreen;
