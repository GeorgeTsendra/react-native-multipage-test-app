import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
//redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthScreenActions from '../actions/authActions';
//components
import AuthScreen from './auth/authentication'
import Homepage from './pages/homepage/index'


 class MainRouteComponent extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.userIsLogined != this.props.userIsLogined
    } 

    render() {
        const {
            userIsLogined
        } = this.props
        
        if(userIsLogined){
            return <Homepage/>
        }else{
            return <AuthScreen/>
        }
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AuthScreenActions, dispatch),
    }  
  }
  
const mapStateToProps = function(state) {
    return {
      userIsLogined: state.homepageReducer.userIsLogined,
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(MainRouteComponent);
