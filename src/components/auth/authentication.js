import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Linking} from 'react-native';
import data from '../../data/authenticationData';
//redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthScreenActions from '../../actions/authActions';

 class AuthScreen extends Component {
   state= {
     loginWarning: false,
     loginMessage: 'login or password incorrect',
   }

  loginButtonOnClickHendler = () => {
    const{
      loginUsername,
      loginPassword,
    } = this.props;

    let loginIsPossible = false
    
    data.users.forEach(value => {
      if(value.name === loginUsername && value.password === loginPassword){
        loginIsPossible = true
      }
    })
    
    if(loginIsPossible){
      this.setState({
        loginWarning: false,
        loginMessage: 'login or password incorrect'
      })
        this.props.actions.loginSuccess()
      }else{
      this.setState({
        loginWarning: true,
        loginMessage: 'login or password incorrect'
      })
    }
  }


  render() {

    const { 
      loginUsername,
      loginPassword,
    } = this.props;

    const {
      loginWarning,
      loginMessage,
    } = this.state;
    
    return (
      <View style={styles.container}>
        <Text style={styles.loginTitle}>Welcome</Text>
        <View style={styles.authInputsWrapper}> 
            <TextInput
                style={styles.authInputs}
                placeholder={'Username'}
                onChangeText={(value)=>this.props.actions.setAuthUsername(value)}
                value={loginUsername}
            />
            <TextInput
                style={styles.authInputs}
                placeholder={'Password'}
                value={loginPassword}
                onChangeText={(value)=>this.props.actions.setAuthPass(value)}
            />
            <Text style={loginWarning ? styles.loginMessageShow : styles.loginMessageHide }>{loginMessage}</Text>
             <View  style={styles.authButtonWrapper}>
              <Button
                  style={styles.authButton}
                  title="Login"
                  color="#d52027"
                  onPress={this.loginButtonOnClickHendler}
              />
            </View> 

        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(AuthScreenActions, dispatch),
  }  
}

const mapStateToProps = function(state) {
  return {
    loginUsername: state.AuthScreenReducer.loginUsername,
    loginPassword: state.AuthScreenReducer.loginPassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

const styles = StyleSheet.create({
  authButtonWrapper:{
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '70%',
  },
  loginMessageHide:{
    color: "#FFFFFF",
  },
  loginMessageShow:{
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    color: "#d52027",
  },
  loginTitle: {
    fontSize: 34,
    textAlign: 'center',
    margin: 10,
  },
  authButton: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#d52027',
    borderRadius: 3,
    width: '40%',
  },
  authInputs: {
    borderWidth: 2,
    width: '70%',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderColor: '#9a9a9a',
    borderRadius: 3,
    height: 50,
    fontSize: 14,
    padding: 10,
  },
  authInputsWrapper: {
    textAlign: 'center',
    width: '100%',
    height: '30%',
    justifyContent: 'space-around',
    flexDirection: 'column',
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
