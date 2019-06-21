import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import NavHeader from './NavHeader';
import ActionBar from './ActionBar';

class TopBar extends Component {
	render() {
		return (
				<View style={{ borderBottomWidth: 1, borderBottomColor: '#ebebeb' }}>
					<NavHeader />
					<ActionBar componentId={this.props.componentId} />
				</View>
		)
	}
}

export default TopBar;