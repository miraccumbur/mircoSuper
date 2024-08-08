import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appColors} from '../../constants/Colors';
import {useTranslation} from 'react-i18next';
import {AppDispatch} from '../../redux/store';
import {useAppDispatch, useAppSelector} from '../../hooks/state';
import {IMyToDoTab} from '../../types/myToDo';
import {
  setNewTab,
  updateTab,
  setReset,
} from '../../redux/MyToDo/myToDoTabListReducer';
import uuid from 'react-native-uuid';

const CreateNewMyToDoTab = () => {
  const {t} = useTranslation();
  const dispatch: AppDispatch = useAppDispatch();
  const tabList: Array<IMyToDoTab> = useAppSelector(
    state => state.myToDoTabList,
  );

  const [rezList, setRezList] = useState<Array<IMyToDoTab>>([]);

  useEffect(() => {
    setRezList([]);
    setRezList([...tabList]);
  }, []);

  const handleEdit: (tab: IMyToDoTab) => void = tab => {
    dispatch(updateTab(tab));
  };

  const handleCreateNew: () => void = () => {
    const data = {
      id: uuid.v4().toString(),
      text: `${rezList.length}. ${t('myToDo.tabs.newTabBaseText')}`,
    };
    setRezList(prev => [...prev, data]);
    dispatch(setNewTab(data));
  };

  const handleReset = () => {
    dispatch(setReset());
    setRezList([
      {
        id: 'all',
        text: t('myToDo.tabs.all'),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{t('myToDo.tabs.title')}</Text>
        <View style={styles.tabInfoField}>
          {rezList.map((tab, index) => {
            if (index > 0)
              return (
                <View style={styles.tabInfo} key={tab.id}>
                  <TextInput
                    placeholder={t('myToDo.tabs.placeholder')}
                    style={styles.input}
                    value={tab.text}
                    onChangeText={text =>
                      setRezList(prev =>
                        prev.map(rl =>
                          rl.id === tab.id ? {text: text, id: rl.id} : rl,
                        ),
                      )
                    }
                  />
                  <TouchableOpacity
                    style={[
                      styles.tabInfoSave,
                      (tabList[index].text === tab.text ||
                        tab.text.length < 1) &&
                        styles.tabInfoSaveDisabled,
                    ]}
                    disabled={
                      tabList[index].text === tab.text || tab.text.length < 1
                    }
                    onPress={() => handleEdit(tab)}>
                    <Image
                      source={require('../../assets/images/check.png')}
                      style={[
                        styles.tabInfoSaveImage,
                        (tabList[index].text === tab.text ||
                          tab.text.length < 1) &&
                          styles.tabInfoSaveImageDisabled,
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              );
          })}

          <TouchableOpacity style={styles.newButton} onPress={handleCreateNew}>
            <Text style={styles.newButtonText}>
              {t('myToDo.tabs.newButton')}
            </Text>
            <Image
              style={styles.newButtonImage}
              source={require('../../assets/images/plus.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleReset}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNewMyToDoTab;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: appColors.purple.c10,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: appColors.purple.c1,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    width: '100%',
    textAlign: 'left',
    marginBottom: 15,
  },
  tabInfoField: {
    width: '100%',
  },
  tabInfo: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: appColors.purple.c8,
    marginBottom: 10,
    paddingBottom: 35,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    color: appColors.purple.c1,
    fontWeight: 'bold',
    height: 30,
    marginRight: 10,
  },
  tabInfoSave: {
    width: 30,
    height: 30,
    backgroundColor: appColors.purple.c7,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabInfoSaveDisabled: {
    backgroundColor: appColors.purple.c8,
  },
  tabInfoSaveImage: {
    width: 15,
    height: 15,
    tintColor: appColors.purple.c1,
  },
  tabInfoSaveImageDisabled: {
    tintColor: appColors.purple.c6,
  },
  newButton: {
    backgroundColor: appColors.purple.c7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});
