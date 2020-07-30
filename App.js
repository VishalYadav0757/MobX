import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BushFire from './src/BushFire';
import { Provider } from 'mobx-react';
import AppStore from './src/store';

const AppNavigator = createStackNavigator(
  {
    BushFire: {
      screen: BushFire,
      navigationOptions: {
        headerShown: false,
      }
    }    
  },
);
 
export default createAppContainer(AppNavigator);