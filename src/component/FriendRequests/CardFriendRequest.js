import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import ThumbnailPhoto from '../small/ThumbnailPhoto';
import CustomButton from '../small/CustomButton';

class CardFriendRequest extends Component {
	constructor() {
		super();
		this.state = {
			cardPressed: false,
		}
	}

	pressed = () => this.setState({cardPressed: !this.state.cardPressed})
	
	render() {
		return (
			<TouchableWithoutFeedback onPressIn={this.pressed} onPressOut={this.pressed}>
				<View style={[styles.wrapper, this.state.cardPressed ? styles.wrapperPresed : {}]}>
				<View style={styles.wrapperImage}>
					<ThumbnailPhoto image={this.props.data.image} style={styles.photoProfile} />
				</View>
				<View style={styles.wrapperInfo}>
					<View style={styles.wrapperText}>
						<Text style={styles.textName}>
							{this.props.data.name}
						</Text>
						<Text style={styles.addFrom}>{this.props.data.addFrom}</Text>
					</View>
					<View>
						<Text style={styles.textMutualFriend}>
							{this.props.data.mutualFriends} mutual {this.props.data.mutualFriends > 1 ? 'friends' : 'friend'}
						</Text>
					</View>
					<View style={styles.wrapperBtn}>
						<CustomButton 
							styleWrapper={{ marginRight: 3 }} 
							styleButton={{backgroundColor: '#1777f0', }} 
							styleTextButton={{color: '#fff'}}
							title="Confirm" />

						<CustomButton 
							styleWrapper={{ marginLeft: 3 }} 
							styleButton={{backgroundColor: '#e9edee', }} 
							styleTextButton={{color: '#000'}}
							title="Delete" />
					</View>
				</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default CardFriendRequest;

const styles = StyleSheet.create({
	wrapper: {flex: 1, flexDirection: 'row', backgroundColor: '#fff', padding: 10},
	wrapperPresed: {backgroundColor: '#ebebeb'},
	wrapperInfo: {flex: 1},
	wrapperText: { flexDirection: 'row' },
	textName: {flex: 1, fontSize: 24, color: '#000', textTransform: 'capitalize'},
	textMutualFriend: {fontSize: 14},
	photoProfile: { width: 100, height: 100},
	wrapperImage: {marginRight: 8},
	addFrom: { fontSize: 13, flex: 1, textAlign: 'right' },
	wrapperBtn: {flex: 1, flexDirection: 'row', alignItems: 'flex-end', paddingVertical: 8 }
})