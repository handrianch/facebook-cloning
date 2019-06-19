import React, { Component } from 'react';
import {View, Text, ScrollView, Image, TextInput } from 'react-native';
import TopBar from '../component/base/TopBar';
import StatusBar from '../component/base/StatusBar';
import Tag from '../component/base/Tag';
import Category from '../component/market/Category';

class Market extends Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: '#fff' }}>
				<StatusBar color="#2d4778" />
				<View style={{flex: 1, backgroundColor: '#fff'}}>
					<TopBar />
					<Tag />
						
					<Category title="Today's Picks" location="Tangerang Selatan" image={[1, 2, 3]} 
					style={{ marginBottom: 10}} />

					<Category title="Mobile Phones" image={[1, 2, 3]} 
					style={{ marginBottom: 10}} />
				</View>
			</ScrollView>
		);
	}
}

export default Market;