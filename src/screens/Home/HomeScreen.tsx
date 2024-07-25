import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import React, {type PropsWithChildren} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {appColors} from '../../helpers/colors';
import AppButton from '../../components/AppButton';

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
            text="To Do List"
            onPress={() => navigation.navigate('ToDoList' as never)}
            image={require('../../assets/images/ToDoList/checklist.png')}
            color={appColors.unbleachedSilk}
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
    backgroundColor: appColors.purple,
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
