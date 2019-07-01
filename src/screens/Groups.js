import React, { Component } from 'react';
import {View, Text, ScrollView, Image, TextInput, FlatList } from 'react-native';
import TopBar from '../component/base/TopBar';
import StatusBar from '../component/base/StatusBar';
import ElementTag from '../component/groups/ElementTag';
import ElementGroup from '../component/groups/ElementGroup';
import { Icon } from 'react-native-elements';
import status from '../data/status.json';

class Groups extends Component {
	tag = [
		{
			title: 'Create',
			icon: 'plus'
		},
		{
			title: 'Discover',
			icon: 'eye'
		},
		{
			title: 'Settings',
			icon: 'settings'
		}
	]

	render() {
		return (
			<ScrollView style={{ backgroundColor: '#ebebeb' }}>
				<StatusBar color="#2d4778" />
				<View style={{flex: 1, backgroundColor: '#fff'}}>
					<TopBar componentId={this.props.componentId} />
					<View style={{ flexDirection: 'row', marginHorizontal: 10, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#ebebeb' }} >
						{ this.tag.map(data => <ElementTag data={data} />) }
					</View>
					<View style={{ flex: 1 }}>
						<View style={{ flex: 1 }}>
							<ElementGroup />
						</View>
					</View>

					<View>

					</View>
				</View>
			</ScrollView>
		);
	}
}

export default Groups;