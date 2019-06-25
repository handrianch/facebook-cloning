import React, { Component } from 'react';
import {View, Text, ScrollView, Image, TextInput } from 'react-native';
import GroupItem from './GroupItem';

class ElementGroup extends Component {
	group = [
		{
			image: 'https://ui-avatars.com/api/?name=Group+1',
			title: 'Group 1',
		},
		{
			image: 'https://ui-avatars.com/api/?name=Group+2',
			title: 'Group 2',
		},
		{
			image: 'https://ui-avatars.com/api/?name=Group+3',
			title: 'Group 3',
		},
		{
			image: 'https://ui-avatars.com/api/?name=Group+4',
			title: 'Group 4',
		},
		{
			image: 'https://ui-avatars.com/api/?name=Group+5',
			title: 'Group 5',
		},
		{
			image: 'https://ui-avatars.com/api/?name=Group+6',
			title: 'Group 6',
		},
	];

	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#fff', paddingBottom: 10}}>
				<View style={{ flex: 1, flexDirection: 'row', padding: 10}}>
					<Text style={{ flex: 1, fontSize: 17, fontWeight: 'bold', color: '#000' }}>Your Groups</Text>
					<Text style={{ flex: 1, fontSize: 15, color: '#3584fb', textAlign: 'right' }}>See All</Text>
				</View>
				<View style={{ flex: 1, flexDirection: 'row'}}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: 15 }}>
						{this.group.map(item => <GroupItem data={item} />)}
					</ScrollView>
				</View>
			</View>
		);
	}
}

export default ElementGroup;