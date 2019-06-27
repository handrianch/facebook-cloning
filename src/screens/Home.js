import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, FlatList, Modal, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import axios from 'axios';
import storageData from '../service/storageData';
import StatusBar from '../component/base/StatusBar';
import TopBar from '../component/base/TopBar';
import Story from '../component/home/Story';
import Post from '../component/home/Post';
import dataStory from '../data/story.json';
import status from '../data/status.json';
import ThumbnailPhoto from '../component/small/ThumbnailPhoto';
import config from '../service/config';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			feeds: [],
			profile: {},
			avatar: "https://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg",
			boxStatus: false,
			statusText: '',
			text: '',
			createFeed: false
		}
	}

	componentDidMount() {
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}

	componentWillUnmount() {
		if(this.navigationEventListener) {
			this.navigationEventListener.remove();
		}
	}

	async componentDidAppear() {
		this.loadFeeds()
		const modalDismissedListener = Navigation.events().registerModalDismissedListener(({componentId, modalDismissed}) => {
			this.loadFeeds();
		});
		modalDismissedListener.remove();
	}

	loadFeeds = async () => {
		try {
			let token = await storageData.getKey('id_token');
			this.setState({jwt: token});

			let headers = {headers: {"Authorization": `Bearer ${token}`}}

			let { data: profile } = await axios.get(`${config.host}/profile`, headers)
			let avatar = profile.avatar;
			this.setState({profile, avatar});

			let { data: feeds } = await axios.get(`${config.host}/posts`, headers);
			this.setState({feeds});
		} catch(err) {
			console.log(err);
		}
	}

	boxStatusPressIn = () => {
		this.setState({boxStatus: !this.state.boxStatus})
		Navigation.push(this.props.componentId, {
			component: {
				name: 'fb.createStatus'
			}
		});
	}

	boxStatusPressOut = () => this.setState({boxStatus: !this.state.boxStatus})

	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#dadee1'}}>
				<TopBar componentId={this.props.componentId}/>
				<ScrollView>
					{/*<Text>{this.state.test}</Text>*/}
					<TouchableWithoutFeedback onPressIn={this.boxStatusPressIn} onPressOut={this.boxStatusPressOut}>
						<View style={[styles.wrapperStatus, this.state.boxStatus ? {backgroundColor: '#ebebeb'} : {}]}>
							<ThumbnailPhoto image={this.state.avatar} style={{ width: 40 }} />
							<View style={{ flex: 1, padding: 2, marginLeft: 7}}>
								<View style={styles.statusForm}>
									<Text>What's on your mind?</Text>
								</View>
							</View>
							<View style={styles.wrapperImage}>
								<Image source={require("../assets/icon/attach.png")} style={styles.image} />
							</View>
						</View>
					</TouchableWithoutFeedback>

					<View style={styles.wrapperStory}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 15 }}>
							{ dataStory.map(item => <Story data={item} />) }
						</ScrollView>
					</View>

					<FlatList 
						data={this.state.feeds}
						renderItem={( {item} ) => <Post componentId={this.props.componentId} data={item} refreshFeeds={this.loadFeeds} token={this.state.jwt} userId={this.state.profile.id}/> }
						keyExtractor={(item) => item.id}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default Home;

const styles = StyleSheet.create({
	wrapperStatus: { flex: 1, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', height: 70, padding: 15},
	statusForm: { borderWidth: 1, borderColor: '#a0a0a0', height: '100%', borderRadius: 20, justifyContent: 'center', paddingLeft: 15 },
	wrapperImage: { width: 40, justifyContent: 'center', alignItems: 'center', marginTop: 3},
	image: { width: '52%', height: '55%', marginBottom: 2 },
	wrapperStory: { flex: 1, flexDirection: 'row', backgroundColor: '#fff', marginVertical: 15, height: 220}
})

const stylesModalStatus = StyleSheet.create({
	container: { flex: 1, height: '100%' },
	wrapper: { flex: 1, backgroundColor: '#fff'},
	header: { height: 50, flexDirection: 'row' },
	backBtn: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4167b0' },
	title: { flex: 1, height: 50, justifyContent: 'center', paddingLeft: 5,backgroundColor: '#4167b0'},
	postBtn: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4167b0' }
})