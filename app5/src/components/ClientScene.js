import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import NavigationBar from './NavigationBar.js';

const clients = require('../../images/detalhe_cliente.png');
const sys = require('../../images/cliente1.png');
const rsm = require('../../images/cliente2.png');


type Props = {};
export default class ClientScene extends Component<Props> {
  render() {
   
    return (
      <View>
        <NavigationBar></NavigationBar>
        <Image source={clients}/>
       	<Image source={sys}/>
       	<Image source={rsm}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   
});
