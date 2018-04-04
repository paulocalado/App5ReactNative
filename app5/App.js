/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';


import {StackNavigator} from 'react-navigation';
import MainScene from './src/components/MainScene.js';
import ClientScene from './src/components/ClientScene.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainScene navigation={}/>
    );
  }
}

const AppNavigator = StackNavigator({
  MainScene: {screen: MainScene},
  ClientScene: {screen: ClientScene}
});

const styles = StyleSheet.create({

});
