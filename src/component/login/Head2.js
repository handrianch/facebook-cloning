import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Head2 extends Component {
	render() {
		return (
			<View style={{ height: 130, backgroundColor: '#fff'}}>
				<View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end'  }}>
					<Image source={require('../../assets/images/logo.png')} style={{
						height: 100,
						width: 100,
					}} />
				</View>
			</View>
		)
	}
}

export default Head2;