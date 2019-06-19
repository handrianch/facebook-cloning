import React, { Component } from 'react';
import { View } from 'react-native';
import NavHeader from './NavHeader';
import ActionBar from './ActionBar';

class TopBar extends Component {
	render() {
		return (
			<View>
				<NavHeader />
				<ActionBar />
			</View>
		)
	}
}

export default TopBar;