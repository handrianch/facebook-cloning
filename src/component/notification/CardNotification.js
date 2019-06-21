import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import ThumbnailPhoto from '../small/ThumbnailPhoto';
import CustomButton from '../small/CustomButton';

class CardNotification extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.wrapperImage}>
					<ThumbnailPhoto style={styles.photoProfile} />
				</View>
				<View style={styles.wrapperInfo}>
					<View style={styles.wrapperText}>
						<View style={{ flex: 1 }}>
							<View>
								<Text style={ styles.textName }>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, similique.
								</Text>
							</View>
							<View>
								<Text style={ styles.pastTimeText }>
									5 hours ago
								</Text>
							</View>
						</View>
						<View style={styles.btnMore}>
							<Icon size={20} name='dots-horizontal' type='material-community'/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default CardNotification;

const styles = StyleSheet.create({
	wrapper: {flex: 1, flexDirection: 'row', backgroundColor: '#e4f2fd', padding: 10},
	wrapperInfo: {flex: 1, justifyContent: 'center'},
	wrapperText: { flexDirection: 'row' },
	textName: {flex: 6, fontSize: 14, color: '#000' },
	pastTimeText: {fontSize: 11, color: "#3478e3" },
	photoProfile: { width: 60, height: 60},
	wrapperImage: {marginRight: 8},
	addFrom: { fontSize: 13, flex: 1, textAlign: 'right'},
	btnMore: { justifyContent: 'center', alignItems: 'center', width: 35,  height: 50, padding: 5},
})