import React, {Component} from 'react';
import {Platform,StyleSheet, Text, View, TextInput, Button, Linking,Image} from 'react-native';
//redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthScreenActions from '../../../actions/authActions';


class Header extends Component {
   state= {
     popupIsOpen: false,
   }

   onPressPopup = ()=>{
       this.setState({
           popupIsOpen: !this.state.popupIsOpen,
       })
   } 

  render() {
    
    const {
        popupIsOpen
    } = this.state

    return (
      <View  style={headerWrapper}>
        <Text style={styles.headerWelcomeTitle}> React-native news app </Text>
        <View style={styles.headerButtonWrapper}>
          <Image
            style={{width: 45, height: 40}}
            source={require('../../../img/header_logo.png')}
          />
        </View>
        

         <View style={popupIsOpen ? styles.headerMenuPopup :  styles.headerMenuPopupHide}> 

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const styles = StyleSheet.create({
    navbarList:{
      width: '100%',

    },
    headerMenuPopupHide: {
        position: 'absolute',
        top: 65,
        right: -350,
        width: 350,
        height: 500,
        backgroundColor: '#9a9a9a',
        borderWidth: 1,
        zIndex: 99,
    },
    headerMenuPopup: {
        position: 'absolute',
        top: 65,
        right: 0,
        width: 350,
        height: 500,
        backgroundColor: '#000000',
        borderWidth: 1,
        zIndex: 99,
        opacity: 1,
      
    },
    headerWrapperAndroid: {
      position: 'relative',
      height: '10%',
      backgroundColor: '#93999d',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerWrapper: {
        position: 'relative',
        paddingTop: '5%',
        height: '10%',
        backgroundColor: '#93999d',
        width: '100%',
        flexDirection: 'row',
    },
    headerButtonWrapper: {
        flex: 1,
        marginRight: 10,
    },
    headerWelcomeTitle: {
        flex: 4,
        fontSize: 24,
        color: '#ffffff',
        marginLeft: 5,
    }
  });
  
  const headerWrapper = Platform.select({
    ios: styles.headerWrapper,
    android: styles.headerWrapperAndroid,
  })