import React, { Component } from 'react';
import {Navigation} from 'react-native-navigation';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

class ActionMenu extends Component {
	constructor() {
		super();
		this.state = {
			menuPressed: false,
		}
	}

	boxPressed = () => {
		this.setState({menuPressed: !this.state.menuPressed});
	}

	render() {
		return (
			<TouchableWithoutFeedback onPressIn={this.boxPressed} onPressOut={this.boxPressed}>
				<View style={[styles.wrapperIcon, this.state.menuPressed ? styles.menuPressedIn : {}]}>
					<Icon size={25} 
					color={this.state.iconActive ? "#1777f0" : this.state.menuPressed ? "blue" : "#6f6f6f"} 
					name={this.props.image} type='material-community'/>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

export default ActionMenu;

const styles = StyleSheet.create({
	wrapperIcon: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
	},
	icon : {
		width: '40%', 
		height: '40%',
		backgroundColor: '#000000'
	},
	menuPressedIn: {
		backgroundColor: '#ebebeb'
	},
	menuPressedIn: {
		backgroundColor: '#fff'
	}
})