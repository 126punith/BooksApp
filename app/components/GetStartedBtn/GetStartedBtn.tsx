import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const GetStartedBtn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.mainText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.subTextView}>
        <Text style={styles.subText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
          <Text style={[styles.subText, styles.signInText]}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStartedBtn;
