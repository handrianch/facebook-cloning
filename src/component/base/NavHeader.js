import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class NavHeader extends Component {
	constructor() {
		super();
		this.state = {
			camera: false,
			messenger: false,
		}
	}

	cameraPressed = () => this.setState({camera: !this.state.camera});
	messengerPressed = () => this.setState({messenger: !this.state.messenger});

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.wrapper}>
					<TouchableWithoutFeedback onPressIn={this.cameraPressed} onPressOut={this.cameraPressed}>
						<View style={[styles.wrapperCamera, this.state.camera ? {backgroundColor: '#2d4778'} : {} ]}>
							<Image source={require('../../assets/icons/camera-light.png')} style={styles.camera} />
						</View>
					</TouchableWithoutFeedback>
					<View style={styles.wrapperSearch}>
						<View style={styles.search}>
							<View style={styles.wrapperIconSearch}>
								<Image source={require('../../assets/icon/search.png')} style={styles.iconSearch}  />	
							</View>
							<View style={styles.wrapperTextInput}>
								<TextInput placeholder="Search Marketplace" style={styles.textInput} />
							</View>
						</View>
					</View>
					<TouchableWithoutFeedback onPressIn={this.messengerPressed} onPressOut={this.messengerPressed}>
						<View style={[styles.wrapperMessenger, this.state.messenger ? {backgroundColor: '#2d4778'} : {} ]}>
							<Image source={require('../../assets/icons/messenger-light.png')} style={[styles.messenger]} />
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}
}

export default NavHeader;

const styles = StyleSheet.create({
	container: { height: 60, backgroundColor: '#4066b2'},
	wrapper: { flex: 1, flexDirection: 'row', padding: 5},
	wrapperCamera: { width: 50, justifyContent: 'center', alignItems: 'center'},
	camera: { width: '70%', height: '70%'},
	wrapperSearch: { flex: 1, marginHorizontal: 3 },
	search: { flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#e3e3e355', marginBottom: 10},
	wrapperIconSearch: { width: 30, height: '20%', justifyContent: 'center', alignItems: 'center', marginTop: 15},
	iconSearch: { width: 19, height: 19},
	wrapperTextInput: { flex: 1 },
	textInput: { fontSize: 15, color: '#fff' },
	wrapperMessenger: { width: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 5},
	messenger: { width: '70%', height: '70%'}
})