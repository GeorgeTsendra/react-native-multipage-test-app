import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Linking} from 'react-native';
//redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthScreenActions from '../../../actions/authActions';

class Footer extends Component {
   state= {
     loginWarning: false,
     loginMessage: 'login or password incorrect',
   }
  
  onPressPopup = ()=>{
    this.props.actions.logoutSuccess()
  } 

  render() {
    
    return (
      <View  style={footerWrapper}>
        <View style={styles.logoutButton}> 
          <Button
              title="Logout"
              color="#000000"
              onPress={this.onPressPopup}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

const styles = StyleSheet.create({
    footerWrapperAndroid: {
      backgroundColor: '#93999d',
      width: '100%',
      height: '8%',
      flexDirection: 'row-reverse',
      alignItems:'center',
    },
    footerWrapper: {
        backgroundColor: '#93999d',
        width: '100%',
        height: '12%',
        flexDirection: 'row-reverse',
        alignItems:'center',
    },
    logoutButton: {
      width: 80, 
      marginRight: 10,
    },
  });
  
  const footerWrapper = Platform.select({
    ios: styles.footerWrapper,
    android: styles.footerWrapperAndroid,
  })