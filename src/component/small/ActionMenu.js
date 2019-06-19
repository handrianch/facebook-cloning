import React, { Component } from 'react';
import {Navigation} from 'react-native-navigation';
import { View, Image, StyleSheet } from 'react-native';

class ActionMenu extends Component {
	iconName = {
		home: require('../../assets/icon/credit-card.png'),
		profile: require('../../assets/icon/brand.png'),
		store: require('../../assets/icon/store.png'),
		notification: require('../../assets/icon/notification.png'),
		more: require('../../assets/icon/menu.png'),
	}

	render() {
		return (
			<View style={[styles.wrapperIcon, this.props.showOverlay ? styles.wrapperIconPressIn : styles.wrapperIconPressOut]}>
				<Image style={[styles.icon, this.props.style]} source={this.iconName[this.props.image]} />
			</View>
		)
	}
}

export default ActionMenu;

const styles = StyleSheet.create({
	wrapperIcon: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapperIconPressIn: {
		backgroundColor: '#ebebeb'
	},
	wrapperIconPressOut: {
		backgroundColor: '#ffffff'
	},
	icon : {
		width: '40%', 
		height: '40%'
	}
})