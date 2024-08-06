import {
  Keyboard,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {appColors} from '../../../constants/Colors';

const Input: React.FC<PropsWithChildren<{style?: StyleProp<TextStyle>}>> = ({
  style,
}) => {
  return <TextInput style={[styles.input, style]} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: appColors.purple.c8,
    color: appColors.purple.c1,
    borderRadius: 100,

    shadowColor: appColors.purple.c1,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
    textAlign: 'center',
  },
});
