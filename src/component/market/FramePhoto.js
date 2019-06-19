import React, { Component } from 'react';
import { View } from 'react-native';
import Photo from './Photo';

class FramePhoto extends Component {
	render() {
		return (
			<View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }]}>
				{this.props.images.map(e => <Photo />)}
			</View>
		)
	}
}

export default FramePhoto;