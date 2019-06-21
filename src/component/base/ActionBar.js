import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, StyleSheet, Text, ScrollView } from 'react-native';
import Navigation from 'react-native-navigation';
import ActionMenu from '../small/ActionMenu';
import data from '../../data/IconMenu.json';

class ActionBar extends Component {
	
	icon = {
		home: {
			active: require('../../assets/icons/home-active.png'),
			unactive: require('../../assets/icons/home.png'),
			page: 'fb.home'
		},
		friendRequest: {
			active: require('../../assets/icons/friend-requests-active.png'),
			unactive: require('../../assets/icons/friend-requests.png'),
			page: 'fb.friendRequest'
		},
		group: {
			active: require('../../assets/icons/group-active.png'),
			unactive: require('../../assets/icons/group.png'),
			page: 'fb.home'
		},
		profile: {
			active: require('../../assets/icons/profile-active.png'),
			unactive: require('../../assets/icons/profile.png'),
			page: 'fb.home'
		},
		notification: {
			active: require('../../assets/icons/notification-active.png'),
			unactive: require('../../assets/icons/notification.png'),
			page: 'fb.notifikasi'
		},
		more: {
			active: require('../../assets/icons/more-active.png'),
			unactive: require('../../assets/icons/more.png'),
			page: 'fb.more'
		}
	}

	render() {
		return (
			<View style={styles.wrapperActionMenu}>
				{
					data.map((item, index) => {
						return (
							<ActionMenu 
								componentId={this.props.componentId} 
								key={index} 
								page={item.page} 
								image={item.image}
								pageActive={this.props.pageActive}
							/>
						)
					})
				}
			</View>
		);
	}
}

export default ActionBar;

const styles = StyleSheet.create({
	wrapperActionMenu: { 
		height: 60, 
		backgroundColor: '#ffffff',
		flexDirection: 'row'
	}
})