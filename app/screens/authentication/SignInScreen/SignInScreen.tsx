import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CircleGeoShape from '@assets/shared/circle-geo-shape.svg';
import XGeoShape from '@assets/shared/X-geo-shape.svg';
import SideGeoShapes from '@assets/shared/side-geo-shapes.svg';
import {TextInput} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

type Props = {};

const SignInScreen = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const signUpHandler = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert('User account created & signed in!');
        props?.navigation.navigate('Main');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const signingInHandler = () => {
    
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert('signed in!');
        props?.navigation.navigate('Main');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <CircleGeoShape />
      <XGeoShape style={styles.XGeoShape} />
      <View style={styles.appTitleView}>
        <TextInput
          onChangeText={e => setEmail(e)}
          style={styles.inputStyle}
          placeholder="Enter you mail ID"
          placeholderTextColor="#0006"
        />
      </View>
      <View style={styles.appTitleView}>
        <TextInput
          onChangeText={e => setPassword(e)}
          style={styles.inputStyle}
          placeholder="Enter your Password"
          placeholderTextColor="#0006"
        />
      </View>
      <TouchableOpacity onPress={signUpHandler} style={styles.button}>
        <Text style={styles.btnTxt}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signingInHandler} style={styles.button}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      <SideGeoShapes style={styles.sideGeoShapes} />
    </View>
  );
};

export default SignInScreen;
