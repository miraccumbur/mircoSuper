import {Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {useTranslation} from 'react-i18next';
import {appColors} from '../../constants/Colors';

const ToDoListScreen: React.FC = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My To Do</Text>
        <TouchableOpacity style={styles.newButton}>
          <Text style={styles.newButtonText}>New</Text>
          <Image
            style={styles.newButtonImage}
            source={require('../../assets/images/plus.png')}
          />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer:{
    flex: 1,
    backgroundColor: appColors.purple.c10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.purple.c1,
  },
  newButton: {
    backgroundColor: appColors.purple.c7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 100,
    height: 30,
  },
  newButtonText: {
    color: appColors.purple.c1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  newButtonImage: {
    width: 14,
    aspectRatio: 1,
    tintColor: appColors.purple.c1,
  }
});

export default ToDoListScreen;
