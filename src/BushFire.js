import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { observer } from 'mobx-react';
import { observable, computed, action } from 'mobx';
import { TextInput } from 'react-native-gesture-handler';

@observer
class BushFire extends Component {
    
    @observable fireMessage = 'Have You Seen a BushFire ?'
    @computed get shortFire () {
        return this.fireMessage.substring(0,5)
    }
    @observable temp = 30
    @computed get ferh () {
        return (this.temp * 9/5) + 32
    }
    @action onChangeText = (val) => {
        this.temp = val
    }
    render () {
        return (
            <View style = {styles.container}>
                <StatusBar barStyle = 'light-content' backgroundColor = '#000000'/>
                <Text style = {styles.welcome}>{this.fireMessage}</Text>
                <Text style = {styles.welcome}>{this.shortFire}</Text>
                <Text style = {styles.welcome}>Celsius = {this.temp}</Text>
                <Text style = {styles.welcome}>Faherenheit = {this.ferh}</Text>
                <TextInput 
                    style = {styles.txtInput} 
                    onChangeText = {this.onChangeText} 
                    placeholder = 'Type Any Tempratue in Celsius Here !!'
                    placeholderTextColor = '#000000'
                />
            </View>
        );
    };
};

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F44336',
  },
  welcome: {
    fontSize: 30,
    margin: 10,
    color: '#000000',
    textAlign: 'center',
    padding: 5
  },
  txtInput: {
      backgroundColor: 'yellow',
      padding:10
  }
});

export default BushFire;