import React, { Component } from 'react';
import { View } from 'react-native';

class Photo extends Component {
	render() {
		return (
			<View style={{ width: '50%', marginRight: 3 }}>
				<View style={{ width: '100%', height: 170, backgroundColor: '#000000'}}></View>
			</View>
		);
	}
}

export default Photo;