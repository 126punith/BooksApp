import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CircleGeoShape from '@assets/shared/circle-geo-shape.svg';
import XGeoShape from '@assets/shared/X-geo-shape.svg';
import SideGeoShapes from '@assets/shared/side-geo-shapes.svg';
import {TextInput} from 'react-native-gesture-handler';
type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <CircleGeoShape />
      <XGeoShape style={styles.XGeoShape} />
      <View style={styles.appTitleView}>
        <TextInput
          // onChangeText={e => handleInput(e)}
          style={styles.inputStyle}
          placeholder="Enter you mail ID"
          placeholderTextColor="#0006"
        />
      </View>
      <View style={styles.appTitleView}>
        <TextInput
          // onChangeText={e => handleInput(e)}
          style={styles.inputStyle}
          placeholder="Enter your Password"
          placeholderTextColor="#0006"
        />
      </View>
      <TouchableOpacity
        onPress={() => props?.navigation.navigate('Main')}
        style={styles.button}>
        <Text style={styles.btnTxt}>Submit</Text>
      </TouchableOpacity>
      <SideGeoShapes style={styles.sideGeoShapes} />
    </View>
  );
};

export default SignInScreen;
