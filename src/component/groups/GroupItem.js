import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';

class GroupItem extends Component {
	render() {
		return (
			<View style={{ width: 100, height: 150, marginRight: 10 }}>
				<Image source={require("../../assets/images/anjay.jpg")} style={{ width: '100%', height: '65%', borderRadius: 10, marginBottom: 5}} />
				<Text style={{ color: '#777', marginHorizontal: 5 }}>Title Here hskfskdfhskadfhkasfjkhk</Text>
			</View>
		)
	}
}

export default GroupItem;