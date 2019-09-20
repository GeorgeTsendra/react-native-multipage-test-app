import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
//components
import MainRouteComponent from './components'
//nav
// import {createStackNavigator, createAppContainer} from 'react-navigation';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  ),
);
// const MainNavigator = createStackNavigator({
//   Homepage: {screen: Homepage},
//   AuthScreen: {screen: AuthScreen},
//   },
//   {
//     initialRouteName: 'Homepage'
//   });
// const AppMainNavigator = createAppContainer(MainNavigator);

export default class App extends Component {

 render() {
    return (
      <Provider store={store}> 
        <MainRouteComponent/>
      </Provider> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
