import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class GridPhoto extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				{/* wrapper text */}
				<View style={{ flex: 1 }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<View style={{ flex: 1, justifyContent: 'center', paddingLeft: 8 }}>
							<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Today's Picks</Text>
						</View>
						<View style={{ flex: 1, height: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
							<Text style={{ color: '#1877f2', fontSize: 16 }}>Tangerang Selatan</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default GridPhoto;