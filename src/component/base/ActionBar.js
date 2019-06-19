import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import ActionMenu from '../small/ActionMenu';
import data from '../../data/IconMenu.json';

class ActionBar extends Component {
	constructor() {
		super();
		this.state = {
			showOverlay : false,
		}
	}

	triggerOverlay = () => {
		this.setState({showOverlay: !this.state.showOverlay});
	}

	pressHandler = () => {
		this.triggerOverlay()
		this.movePage()
	}

	movePage = (page) => {
		Navigation.push(this.props.componentId, {
			component: {
				name: page
			}
		});
	}

	render() {
		return (
			<View style={styles.wrapperActionMenu}>
				{
					data.map((item, index) => {
						return (
							<ActionMenu key={index} image={item.name} style={item.style}/>
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
		height: 55, 
		backgroundColor: '#ffffff',
		flexDirection: 'row'
	}
})