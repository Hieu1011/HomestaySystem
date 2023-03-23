import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import images from '../assets/images';
import colors from '../assets/consts/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
    }
  };
  const LoginIn = async () => {
    navigation.navigate('TabNavigator');
  };
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await AsyncStorage.setItem('isLoggedIn', 'true');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
        <Image
          source={images.logo}
          style={{height: 100, width: 100, marginRight: -10}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: '#878787',
          fontWeight: '300',
          marginBottom: 25,
        }}>
        Wellcome back you've been missed
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="envelope" size={20} marginRight={10} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="lock" size={24} marginRight={10} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Text
        style={{
          color: colors.primary,
          paddingLeft: 230,
          fontSize: 13,
          marginBottom: 10,
        }}>
        Forgot Password ?
      </Text>
      <Button
        mode="contained"
        style={{
          height: 45,
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.dark,
        }}
        onPress={LoginIn}
        disabled={isLoading}>
        {isLoading ? (
          <Text style={styles.buttonText}>Loading...</Text>
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </Button>
      <Text
        style={{color: 'black', fontSize: 15, marginBottom: 10, marginTop: 10}}>
        Or
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 15,
          marginBottom: 120,
        }}>
        <Icon.Button
          name="facebook"
          size={24}
          marginRight={15}
          color="#4267B2"
          backgroundColor="transparent"
          onPress={() => alert('Login face')}
        />
        <Icon.Button
          name="google"
          size={24}
          marginRight={10}
          color="#DB4437"
          backgroundColor="transparent"
          onPress={() => alert('Login Google')}
        />
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15}}>
        <Text style={{color: '#9a9a9a', fontSize: 13, marginRight: 5}}>
          Not a remember?
        </Text>
        <Text style={{color: colors.primary, fontSize: 13}} onPress={LoginIn}>
          Register Now
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    borderRadius: 10,
    paddingTop: 25,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
