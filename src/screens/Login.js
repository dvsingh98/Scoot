import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Firebase from '../../config/Firebase';
import {HelperText} from 'react-native-paper';

export default class Login extends React.Component {
  state = {
    email: 'john@email.com',
    password: 'john1234',
    errorMessage: '',
    user: '',
  };

  constructor(props) {
    super(props);
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  async handleLogin() {
    const {email, password} = this.state;
    await Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        this.setState({user: user});
        this.props.navigation.navigate('App');
      })
      .catch((error) => {
        console.log(error);
        this.setState({errorMessage: error});
      });
  }
  setErrorMessageTF = () => {
    if (this.state.errorMessage.toString().length === 0) {
      return false;
    }
    return true;
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>scoot</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <HelperText
          style={styles.errorText}
          type="error"
          visible={this.setErrorMessageTF()}>
          {this.state.errorMessage.toString()}
        </HelperText>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.handleLogin()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e62ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffcb2e',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#7588b4',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ffcb2e',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  errorText: {
    fontSize: 15,
    color: 'white',
  },
});
