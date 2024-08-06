import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../constants/Colors';
import {useTranslation} from 'react-i18next';
import Input from './components/Input';

const CreateNewMyToDoTab = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.infoText}>{t('myToDo.tabs.createNewTabText')}</Text>
      <Input style={styles.input}/>
    </SafeAreaView>
  );
};

export default CreateNewMyToDoTab;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: appColors.purple.c10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText:{
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 1.1,
    color: appColors.purple.c1,
    marginBottom: 15
  },
  input:{
    width: '80%',
    height: 40,
    paddingVertical:5,
    paddingHorizontal: 10
  }
});
