import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

class Photo extends Component {
	constructor() {
		super()
		this.state = {
			overlay: false,
		}
	}

	showOverlay = () => {
		this.setState({ overlay: !this.state.overlay});
	}

	goToDetailPhoto = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'fb.detailPhoto'
			}
		});
	}

	render() {
		return (
			 <View key={this.props.key ? this.props.key : 0} style={{ flex: 1, marginRight: 6 }}>
				<View style={{ width: '100%', height: 170, backgroundColor: '#000000', position: 'relative'}}>
					<Image style={{ width: '100%', height: 170 }} source={require('../../assets/images/anjay.jpg')} onPress={this.goToDetailPhoto}/>
				</View>
			</View>
		);
	}
}

export default Photo;