import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class NavigationBar extends Component<Props> {
  render() {
  	const {titleBar} = styles;
    return (
    	<View style={titleBar}>
	  		<Text>ATM Consultoria</Text>
	  	</View>
    );
  }
}

const styles = StyleSheet.create({
	titleBar: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#CCC'
	}
});
