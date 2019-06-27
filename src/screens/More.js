import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import StatusBar from '../component/base/StatusBar';
import TopBar from '../component/base/TopBar';
import BannerMore from '../component/more/BannerMore';
import Element from '../component/more/Element';
import storageData from '../service/storageData';
import config from '../service/config';

class More extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jwt: '',
			avatar: "https://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg",
			name: '',
		}
	}

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

	async componentDidMount() {
		try {
			let token = await storageData.getKey('id_token');
			this.setState({jwt: `Bearer ${token}`});

			let headers = {headers: {"Authorization": this.state.jwt}}

			let { data: profile } = await axios.get(`${config.host}/profile`, headers)
			let avatar = profile.avatar;
			let name = profile.name
			this.setState({name, avatar});

			if(this.props.postId) {
				let { data } = await axios.get(`${config.host}/posts/${this.props.postId}`, headers)
				this.setState({statusText: data.posts});
			}

		} catch(err) {
			console.error(err);
		}
	}


	render() {
		return (
			<View style={styles.container}>
				<StatusBar color="#2d4778" />
				<TopBar componentId={this.props.componentId} />

				<ScrollView>
					<BannerMore name={this.state.name} avatar={this.state.avatar} />
					<FlatList
						data={this.icons}
						renderItem={({item}) => <Element data={item} />}
						keyExtractor={(item) => item.name}
					/>
					
					<Element componentId={this.props.componentId} data={{icon: require('../assets/icons/logout.png'), name: 'Logout'}} typeAction="logout" />
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