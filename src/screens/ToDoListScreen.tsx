import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {appColors} from '../helpers/colors';

const ToDoListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>TO DO LIST</Text>
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
  },
});

export default ToDoListScreen;
