import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {pickTextColorBasedOnBgColorAdvanced} from '../helpers/colors';

const AppButton: React.FC<
  PropsWithChildren<{
    text: string;
    onPress: () => void;
    image: string;
    color: string;
  }>
> = ({text, onPress, image, color}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      {image && (
        <Image
          style={[
            styles.image,
            {tintColor: pickTextColorBasedOnBgColorAdvanced(color)},
          ]}
          source={image as never}
        />
      )}
      <Text
        style={[
          styles.text,
          {color: pickTextColorBasedOnBgColorAdvanced(color)},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '49.5%',
    height: 100,
    borderRadius: 15,
    paddingVertical: '1%',
    paddingHorizontal: '1%',
    flexDirection: 'row',
    marginBottom: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
});

export default AppButton;
