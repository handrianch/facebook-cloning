import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

class ThumbnailPhoto extends Component {
	render() {
		return (
			<View style={this.props.style}>
				<ImageBackground borderRadius={100} source={{uri: this.props.image}} style={styles.thumb} />
			</View>
		)
	}
}

export default ThumbnailPhoto;

const styles = StyleSheet.create({
	thumb: { width: '100%', height: '100%'}
})