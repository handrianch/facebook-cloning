import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import StatusBar from '../component/base/StatusBar';
import TopBar from '../component/base/TopBar';
import CardFriendRequest from '../component/FriendRequests/CardFriendRequest';
import FriendRequestsData from '../data/friendRequests.json';

class FriendRequests extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar color="#2d4778" />
				<TopBar />

				<ScrollView>
					<View style={styles.wrapperTextHeader}>
						<Text style={styles.textTitle}>Friend's Requests</Text>
						<Text style={styles.textCounter}>{FriendRequestsData.length}</Text>
					</View>

					<FlatList
						data={FriendRequestsData}
						renderItem={({item}) => <CardFriendRequest data={item} />}
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
	wrapperTextHeader: { flex: 1, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', padding: 15},
	textTitle: {fontWeight: 'bold', fontSize: 20, color: '#000', marginRight: 5},
	textCounter: {color: "red", fontWeight: 'bold', fontSize: 20, marginRight: 5}
})