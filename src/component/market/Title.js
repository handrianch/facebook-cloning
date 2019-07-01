import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Title extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 }}>
					<View style={{ flex: 1, justifyContent: 'center', paddingLeft: 15 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 18, color: "black" }}>{this.props.title}</Text>
					</View>
					<View style={{ flex: 1, height: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 15 }}>

						{this.props.location ? <Text style={{ color: '#1877f2', fontSize: 14 }}>Tangerang Selatan</Text> : <Text></Text> }
					</View>
				</View>
			</View>
		)
	}
}

export default Title;