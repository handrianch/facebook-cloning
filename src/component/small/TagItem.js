import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TagItem extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6}}>
				<Text style={{ backgroundColor: '#e3e3e3', borderRadius: 50, padding: 10 }}>{this.props.text}</Text>
			</View>
		)
	}
}

export default TagItem;