import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import StatusBar from '../component/base/StatusBar';
import TopBar from '../component/base/TopBar';
import Story from '../component/home/Story';
import Post from '../component/home/Post';
import dataStory from '../data/story.json';
import status from '../data/status.json';
import ThumbnailPhoto from '../component/small/ThumbnailPhoto'

class Home extends Component {
	constructor() {
		super();
		this.sate = {
			page: 'home'
		}
	}

	render() {
		return (
			<ScrollView style={{ backgroundColor: '#dadee1' }}>
				<StatusBar />
				<View style={{flex: 1, backgroundColor: '#dadee1'}}>
					<TopBar componentId={this.props.componentId} pageActive="home" />

					<View style={{ flex: 1, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', height: 70, padding: 15}}>
						<ThumbnailPhoto style={{ width: 40 }} />
						<View style={{ flex: 1, padding: 2, marginLeft: 7}}>
							<TextInput placeholder="What's on your mind?" style={{ paddingLeft: 20, paddingTop: 12, paddingRight: 40, borderWidth: 1, borderRadius: 20, borderColor: '#ebebeb'}} />
						</View>
						<View style={{ width: 40, justifyContent: 'center', alignItems: 'center', marginTop: 3}}>
							<Image source={require("../assets/icon/attach.png")} style={{ width: '52%', height: '55%', marginBottom: 2 }} />
						</View>
					</View>

					<View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff', marginVertical: 15, height: 220}}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 20 }}>
							{ dataStory.map(e => <Story />) }
						</ScrollView>
					</View>

					<FlatList 
						data={status}
						renderItem={( {item} ) => <Post data={item}/> }
						keyExtractor={(item) => item.id}
					/>
				</View>
			</ScrollView>
		);
	}
}

export default Home;