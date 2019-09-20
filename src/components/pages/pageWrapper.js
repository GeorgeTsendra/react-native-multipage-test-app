import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Linking} from 'react-native';

import Header from './header';
import Footer from './footer';
import Navbar from './navbar';

const PageTemplate = ({ children=[], header=true, footer=true, }) => {
  
  return (
    <View  style={styles.templeteWrapper}>
      <Header />
      <Navbar/>
      {children}
 
     <Footer />
    </View>
  );
}

export default PageTemplate;

const styles = StyleSheet.create({
  templeteWrapper: {
    width: '100%',
    height: '100%',
  }
});

