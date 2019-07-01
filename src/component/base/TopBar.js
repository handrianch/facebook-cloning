import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import NavHeader from './NavHeader';
import ActionBar from './ActionBar';
import StatusBar from './StatusBar';

class TopBar extends Component {
	render() {
		return (
				<View style={{ borderBottomWidth: 1, borderBottomColor: '#ebebeb' }}>
					<StatusBar color="#2d4778" />
					<NavHeader />
					<ActionBar componentId={this.props.componentId} />
				</View>
		)
	}
}

export default TopBar;