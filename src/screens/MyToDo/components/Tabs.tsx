import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {appColors} from '../../../constants/Colors';
import { IMyToDoTab } from '../../../types/myToDo';

const Tabs: React.FC<
  PropsWithChildren<{
    value: IMyToDoTab;
    setValue: React.Dispatch<React.SetStateAction<IMyToDoTab>>;
    list:Array<IMyToDoTab>
  }>
> = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.activeButton]}>
        <Text style={[styles.buttonText, styles.activeButtonText]}>Tümü</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme 2</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    width: '100%',
    maxHeight: 25,
  },
  button: {
    marginRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: appColors.purple.c6,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: appColors.purple.c6,
  },
  activeButton: {
    borderBottomColor: appColors.purple.c1,
  },
  activeButtonText: {
    color: appColors.purple.c1,
  },
});
