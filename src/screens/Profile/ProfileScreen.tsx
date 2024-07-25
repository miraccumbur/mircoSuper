import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
import React, {type PropsWithChildren} from 'react';
import FooterBottomMargin from '../../components/FooterBottomMargin';
import {appColors} from '../../helpers/colors';
// import {useNavigation} from '@react-navigation/native';
// import {useNavigation, useRoute} from '@react-navigation/native';

const ProfileScreen: React.FC<PropsWithChildren<{}>> = () => {
  // const navigation = useNavigation();
  //   const route = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View style={styles.photoAndNameView}>
          <Image
            style={styles.userImage}
            source={require('../../assets/images/User/user.png')}
          />
          <View>
            <Text style={styles.titleBigText}>Miraç Cumbur</Text>
            <Text style={styles.secondryText}>Junior Frontend Developer</Text>
          </View>
        </View>
        <Text style={styles.description}>
          In my more than a year of working experience in frontend development,
          I have gained experience working with frontend frameworks such as
          React and Vue. I am aware that being up to date is the key to success
          so I continue to improve myself and increase my potential. I consider
          myself as a team player, being a team player is my strong side. I am
          also an energetic person because I find joy in what I do, I do not
          feel working when I do my job.
        </Text>
        <FooterBottomMargin />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    marginBottom: 100,
    backgroundColor: appColors.white,
    position: 'relative',
  },
  userImage: {
    width: '30%',
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 150,
    marginRight: 15,
  },
  photoAndNameView: {
    width: '95%',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  titleBigText: {
    fontSize: 36,
    fontWeight: '700',
  },
  secondryText: {
    fontSize: 12,
    color: '#626262',
  },
  description: {
    fontSize: 12,
    width: '95%',
    top: 20,
    textAlign: 'justify',
    fontWeight: '300',
  },
});

export default ProfileScreen;
