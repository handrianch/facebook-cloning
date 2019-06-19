import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import GridPhoto from './GridPhoto';
import Photo from './Photo';
import Title from './Title';

class Category extends Component {
	render() {
		return (
			<View style={[{ flex: 1}, this.props.style]}>
				<Title title={this.props.title} location={this.props.location} />

				<View>
					<GridPhoto image={this.props.image} />
				</View>
			</View>
		);
	}
}

export default Category;