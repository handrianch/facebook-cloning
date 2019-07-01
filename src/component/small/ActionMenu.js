import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

class ActionMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuPressed: false,
		}
	}

	icon = {
		home: {
			active: require('../../assets/icons/home-active.png'),
			unactive: require('../../assets/icons/home.png')
		},
		friendRequest: {
			active: require('../../assets/icons/friend-requests-active.png'),
			unactive: require('../../assets/icons/friend-requests.png')
		},
		group: {
			active: require('../../assets/icons/group-active.png'),
			unactive: require('../../assets/icons/group.png')
		},
		profile: {
			active: require('../../assets/icons/profile-active.png'),
			unactive: require('../../assets/icons/profile.png')
		},
		notification: {
			active: require('../../assets/icons/notification-active.png'),
			unactive: require('../../assets/icons/notification.png')
		},
		more: {
			active: require('../../assets/icons/more-active.png'),
			unactive: require('../../assets/icons/more.png')
		}
	}

	boxPressed = () => {
		this.setState({menuPressed: !this.state.menuPressed});
		this.movePage();
	}

	movePage = () => {
		Navigation.push(this.props.componentId, {
		  component: {
		    name: this.props.data.page
		  }
		});
	}

	render() {
		return (
			<TouchableWithoutFeedback onPressIn={this.boxPressed} onPressOut={this.boxPressed}>
				<View style={[styles.wrapperIcon, this.state.menuPressed ? {backgroundColor: '#ebebeb'} : {}]}>
					<Image source={this.state.menuPressed ? this.props.data.active : this.props.data.unactive}
					style={this.state.menuPressed ? { width: '60%', height: '60%'} : { width: '70%', height: '70%'}} />
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
		width: '35%', 
		height: '35%',
		backgroundColor: '#000000'
	},
	menuPressedIn: {
		backgroundColor: '#ebebeb'
	},
	menuPressedIn: {
		backgroundColor: '#fff'
	}
})