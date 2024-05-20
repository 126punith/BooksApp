import React, {FC, useEffect} from 'react';
import {
  BackHandler,
  Button,
  LogBox,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import HeaderComp from '../components/HeaderComp';
import {BookViewProps} from '@configs/Types';
import BooksView from '@components/BooksView';
import auth from '@react-native-firebase/auth';

const HomeScreen: FC<BookViewProps> = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const logoutHandler = () => {
      auth()
        .signOut()
        .then(() => {
          console.log('User has been logged out');
          Alert.alert('You have been logged out');
          navigation.navigate('Auth');
        })
        .catch(error => {
          console.error(error);
        });
  };
  return (
    <ParallaxScrollView
      parallaxHeaderHeight={250}
      fadeOutBackground
      renderForeground={() => <SearchBar />}
      stickyHeaderHeight={80}
      renderStickyHeader={() => <HeaderComp height={80} />}
      backgroundSpeed={2}>
      <TouchableOpacity onPress={logoutHandler} style={styles.button}>
        <Text style={styles.btnTxt}>Logout</Text>
      </TouchableOpacity>
      <BooksView navigation={navigation} />
    </ParallaxScrollView>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
  },
  btnTxt: {color: 'white', paddingHorizontal: 8, paddingVertical: 12}

});
export default HomeScreen;
