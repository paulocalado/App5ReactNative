import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import NavigationBar from './NavigationBar.js';
import {StackNavigator} from 'react-navigation';

const logo = require('../../images/logo.png');
const client = require('../../images/menu_cliente.png');
const contact = require('../../images/menu_contato.png');
const company = require('../../images/menu_empresa.png');
const service = require('../../images/menu_servico.png');

type Props = {};
export default class MainScene extends Component<Props> {
  /*
  constructor(props) {
    super(props)
    this.props.navigation.navigate = this.props.navigation.navigate.bind(this);
  }*/

  render() {
    const {logoStyle, menuItems,
           menu, itemsStyle} = styles;
    return (
      <View>
        <NavigationBar></NavigationBar>
        <View style={logoStyle}>
          <Image source={logo} />
        </View>
        <View style={menu}>
          <View style={menuItems}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ClientScene',{})}>
              <Image source={client} style={itemsStyle}/>
            </TouchableOpacity>
            <Image source={contact} style={itemsStyle}/>
          </View>
          <View style={menuItems}>
            <Image source={company} style={itemsStyle}/>
            <Image source={service} style={itemsStyle}/>
          </View>  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logoStyle: {
      marginTop: 30,
      alignSelf: 'center'
    },
    menuItems: {
      flexDirection: 'row'
    },
    menu: {
      marginTop: 15,
      alignItems: 'center'
    },
    itemsStyle: {
      margin: 15
    }
});
