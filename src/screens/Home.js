import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import StatusBar from '../component/base/StatusBar';
import TopBar from '../component/base/TopBar';
import Story from '../component/home/Story';
import dataStory from '../data/story.json';

class Home extends Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: '#dadee1' }}>
				<StatusBar />
				<View style={{flex: 1, backgroundColor: '#dadee1'}}>
					<TopBar />

					<View style={{ flex: 1, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', height: 70, padding: 15}}>
						<View style={{ width: 40 }}>
							<Image source={require("../assets/images/anjay.jpg")} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
						</View>
						<View style={{ flex: 1, padding: 2, marginLeft: 7}}>
							<TextInput placeholder="What's on your mind?" style={{ paddingLeft: 20, paddingTop: 12, paddingRight: 40, borderWidth: 1, borderRadius: 20, borderColor: '#ebebeb'}} />
						</View>
						<View style={{ width: 40, justifyContent: 'center', alignItems: 'center', marginTop: 3}}>
							<Image source={require("../assets/icon/attach.png")} style={{ width: '52%', height: '55%', marginBottom: 2 }} />
						</View>
					</View>

					<View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff', marginVertical: 15, height: 220}}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 20 }}>
							{
								dataStory.map(item => (<Story />))
							}
						</ScrollView>
					</View>

					<View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff', marginBotom: 15, paddingHorizontal: 5, paddingTop: 3}}>
						<View style={{ width: 60, backgroundColor: '#000000', backgroundColor: 'yellow', height: 60, padding: 5}}>
							<Image source={require("../assets/images/anjay.jpg")} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
						</View>
						<View style={{ flex: 1, height: 60, backgroundColor: 'blue' }}>
							<Text style={{ fontSize: 22 }}>Saitama</Text>
							<Text>ditempat</Text>
						</View>
						<View style={{ width: 40, backgroundColor: '#000000', backgroundColor: 'yellow', height: 60, padding: 5}}>
							<Image source={require("../assets/images/anjay.jpg")} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

export default Home;