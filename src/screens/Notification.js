import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import StatusBar from '../component/base/StatusBar';
import TopBar from '../component/base/TopBar';
import CardNotification from '../component/notification/CardNotification';
import TitleNotification from '../component/notification/TitleNotification';
import Notification from '../data/notification.json';

class FriendRequests extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar color="#2d4778" />
				<TopBar componentId={this.props.componentId} />

				<ScrollView style={{ backgroundColor: '#fff' }}>
					<TitleNotification title="earlier" />

					<FlatList
						data={Notification}
						renderItem={({item}) => <CardNotification data={item} />}
						keyExtractor={(item) => item.id}
					/>
				</ScrollView>
			</View>
		)
	}
}

export default FriendRequests;

const styles = StyleSheet.create({
	container: {flex: 1},
	textTitle: {fontWeight: 'bold', fontSize: 20, color: '#000', marginRight: 5},
	textCounter: {color: "red", fontWeight: 'bold', fontSize: 20, marginRight: 5}
})