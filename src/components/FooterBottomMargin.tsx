import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

const FooterBottomMargin: React.FC<PropsWithChildren<{}>> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 75,
  },
});

export default FooterBottomMargin;
