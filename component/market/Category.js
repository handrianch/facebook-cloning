import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import GridPhoto from './GridPhoto';
import Photo from './Photo';

class Category extends Component {
	render() {
		return (
			<View style={[{ flex: 1, backgroundColor: 'yellow'}, this.props.style]}>
				<View style={{ flex: 1 }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 }}>
						<View style={{ flex: 1, justifyContent: 'center', paddingLeft: 15 }}>
							<Text style={{ fontWeight: 'bold', fontSize: 18, color: "black" }}>{this.props.category}</Text>
						</View>
						<View style={{ flex: 1, height: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 15 }}>

							{this.props.location ? <Text style={{ color: '#1877f2', fontSize: 14 }}>Tangerang Selatan</Text> : <Text></Text> }
						</View>
					</View>
				</View>

				<GridPhoto />
				<GridPhoto />
			</View>
		);
	}
}

export default Category;