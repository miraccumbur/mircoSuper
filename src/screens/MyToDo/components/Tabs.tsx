import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';
import {appColors} from '../../../constants/Colors';
import {IMyToDoTab} from '../../../types/myToDo';
import {useAppDispatch, useAppSelector} from '../../../hooks/state';
import {setTab} from '../../../redux/MyToDo/myToDoTabReducer';
import {AppDispatch} from '../../../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Tabs: React.FC<PropsWithChildren<{}>> = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();

  const currentTab: IMyToDoTab = useAppSelector(state => state.myToDoTab);
  const tabList: Array<IMyToDoTab> = useAppSelector(
    state => state.myToDoTabList,
  );

  const handleTabPress: (tab: IMyToDoTab) => void = tab => {
    dispatch(setTab(tab));
  };

  const handleCreateNewTabPress: () => void = () => {
    navigation.navigate('CreateNewMyToDoTab' as never)
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {tabList.map(tab => {
          return (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.button,
                tab.id === currentTab.id && styles.activeButton,
              ]}
              onPress={() => handleTabPress(tab)}>
              <Text style={[styles.buttonText, styles.activeButtonText]}>
                {tab.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity onPress={handleCreateNewTabPress} style={styles.newTab}>
        <Image
          source={require('../../../assets/images/plus.png')}
          style={styles.newTabImg}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    maxWidth: '90%',
    width: '100%',
    maxHeight: 25,
    alignSelf: 'center',
  },
  button: {
    marginRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: appColors.purple.c6,
    minWidth: 30,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: appColors.purple.c6,
    textAlign: 'center',
  },
  activeButton: {
    borderBottomColor: appColors.purple.c1,
  },
  activeButtonText: {
    color: appColors.purple.c1,
  },
  newTab: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: appColors.purple.c7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newTabImg: {
    tintColor: appColors.purple.c1,
    width: '50%',
    aspectRatio: 1,
    height: 'auto',
  },
});
