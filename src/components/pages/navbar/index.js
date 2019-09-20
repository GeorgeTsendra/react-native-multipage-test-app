import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Linking} from 'react-native';
//redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomepageActions from '../../../actions/homepageActions';

import {BITCOINS, BUSINESS, APPLE,TECHCRUNCN, WSTREET } from '../../../constants/tabs';

class Navbar extends Component {

  bitcoinButtonHendler = () => {
    this.props.actions.setActiveNav(BITCOINS)
  }  

  businessButtonHendler = () => {
    this.props.actions.setActiveNav(BUSINESS)
  }  

  appleButtonHendler = () => {
    this.props.actions.setActiveNav(APPLE)
  }  

  techcruncnButtonHendler = () => {
    this.props.actions.setActiveNav(TECHCRUNCN)
  }  

  wStreetButtonHendler = () => {
    this.props.actions.setActiveNav(WSTREET)
  }  

  render() {
    
    return (
        <View style={styles.navbarList}>
            <View style={styles.navbarButton}> 
                <Button
                    style={styles.navbarButton}
                    title="Bitcoin"
                    color="#e3ddd8"
                    onPress={this.bitcoinButtonHendler}
                />
            </View>
            <View style={styles.navbarButton}> 
                <Button
                    title="Business"
                    color="#e3ddd8"
                    onPress={this.businessButtonHendler}
                />
            </View>
            <View style={styles.navbarButton}> 
                <Button
                    title="Apple"
                    color="#e3ddd8"
                    onPress={this.appleButtonHendler}
                />
            </View>
            <View style={styles.navbarButton}> 
                <Button
                    title="TechCrunch"
                    color="#e3ddd8"
                    onPress={this.techcruncnButtonHendler}
                />
            </View>
            <View style={styles.navbarButton}> 
                <Button
                    title="W.Street"
                    color="#e3ddd8"
                    onPress={this.wStreetButtonHendler}
                />
            </View>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(HomepageActions, dispatch),
  }  
}

const mapStateToProps = function(state) {
  return {
    activeTab: state.newsPagesReducer.activeTab,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const styles = StyleSheet.create({
    navbarList: {
        flexDirection: 'row',
        height: '6%',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        alignItems: 'center',
    },
    navbarButton: {
        fontSize: 12,
        textTransform: 'none',
        height: '100%',
    },
  });
  
