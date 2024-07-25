import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import React, {type PropsWithChildren} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AppButton from '../../components/AppButton';
import { appColors } from '../../constants/Colors';

const HomeScreen: React.FC<PropsWithChildren<{}>> = () => {
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  // const route: RouteProp<ParamListBase> = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          minWidth: '100%',
          alignItems: 'center',
        }}>
        <View style={styles.appButtonField}>
          <AppButton
            text="My To Do"
            onPress={() => navigation.navigate('MyToDo' as never)}
            image={require('../../assets/images/MyToDo/checklist.png')}
            color={appColors.purple.c1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  button: {
    width: '25%',
    height: 30,
    backgroundColor: appColors.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: appColors.white,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    width: '95%',
  },
  seperator: {
    width: '95%',
    height: 1,
    backgroundColor: appColors.purple.c1,
    borderRadius: 1,
    marginVertical: 5,
  },
  appButtonField: {
    width: '95%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default HomeScreen;
