import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import StatusBar from '../component/base/StatusBar';
import TopBar from '../component/base/TopBar';
import BannerMore from '../component/more/BannerMore';
import Element from '../component/more/Element';

class More extends Component {
	icons = [
		{
			name: 'marketplace',
			icon: require('../assets/icons/marketplace.png')
		},
		{
			name: 'friends',
			icon: require('../assets/icons/friends.png')
		},
		{
			name: 'groups',
			icon: require('../assets/icons/groups.png')
		},
		{
			name: 'videos',
			icon: require('../assets/icons/videos.png')
		},
		{
			name: 'events',
			icon: require('../assets/icons/events.png')
		},
		{
			name: 'memories',
			icon: require('../assets/icons/memories.png')
		},
		{
			name: 'saved',
			icon: require('../assets/icons/saved.png')
		},
		{
			name: 'messenger',
			icon: require('../assets/icons/messenger.png')
		},
		{
			name: 'pages',
			icon: require('../assets/icons/pages.png')
		},
		{
			name: 'local',
			icon: require('../assets/icons/local.png')
		},
		{
			name: 'recomendations',
			icon: require('../assets/icons/recomendations.png')
		},
		{
			name: 'see-more',
			icon: require('../assets/icons/see-more.png')
		},
	]

	render() {
		return (
			<View style={styles.container}>
				<StatusBar color="#2d4778" />
				<TopBar componentId={this.props.componentId} />

				<ScrollView>
					<BannerMore />
					<FlatList
						data={this.icons}
						renderItem={({item}) => <Element data={item} />}
						keyExtractor={(item) => item.name}
					/>
				</ScrollView>
			</View>
		)
	}
}

export default More;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})