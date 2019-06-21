import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';

class Story extends Component {
	constructor() {
		super();
		this.state = {
			overlayShow: false,
		}
	}

	pressed = () => this.setState({overlayShow: !this.state.overlayShow});

	render() {
		return (
			<TouchableWithoutFeedback onPressIn={this.pressed} onPressOut={this.pressed}>
				<View style={styles.wrapperStory}>
					<ImageBackground
						style={styles.imageStory} 
						source={{uri: this.props.data.image}}
						borderRadius={10} style={styles.imageStory}>
						<Image source={{uri: this.props.data.user}} style={styles.user}/>
						<View style={{ flex: 1, justifyContent: 'flex-end' }}>
							<Text style={{ fontSize: 14, color: '#fff', marginLeft: 8, marginBottom: 5 }}>{this.props.data.name}</Text>
						</View>
						{this.state.overlayShow ? <View style={styles.overlay} /> : <View />}
					</ImageBackground>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default Story;

const styles = StyleSheet.create({
	wrapperStory: { height: '100%', width: 100, position: 'relative', marginRight: 7 },
	imageStory: { height: '100%', width: '100%', borderRadius: 10},
	user: {borderRadius: 100, width: 40, height: 40, marginLeft: 5, marginTop: 5, borderWidth: 2, borderColor: '#4167b0' },
	overlay: { width: '100%', height: '100%', position: 'absolute', backgroundColor: '#00000055', borderRadius: 10}

})