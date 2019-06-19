import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class Story extends Component {
	render() {
		return (
			<View style={{ height: '100%', width: 100, position: 'relative', marginRight: 7 }}>
				<Image source={require('../../assets/images/anjay.jpg')} style={{ height: '100%', width: '100%', borderRadius: 10}} />
				<View style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', width: 45, height: 45, position: 'absolute', borderRadius: 50, top: 7, left: 7 }}>
					<Text style={{ fontSize: 30, color: "#4167b0" }}>+</Text>
				</View>
			</View>
		);
	}
}

export default Story;