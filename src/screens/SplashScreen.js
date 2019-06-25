import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { AsyncStorage } from 'react-native';
import storageData from '../service/storageData';

class SplashScreen extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			token: 'token bre',
		}

		let promiseToken = storageData.getKey('id_token');
	    
	    promiseToken.then(token => {
	   		if(token) {
	   			this._navigate('home')
	   			return;
	   		}
	   		this._navigate('login')
	   	})
	   .catch(err => {
	   		console.error(err);
	   });
	   
	}

	_navigate = (page) => {
		Navigation.push(this.props.componentId, {
			component: {
				name: `fb.${page}`
			}
		});
	}

	render() {
		return (
			<View style={ styles.wrapper }>
				<Image source={require('../assets/icons/logo-facebook.png')} style={styles.image} />
			</View>
		)
	}
}

export default SplashScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f6fa'
	},
	image: {
		width: 100,
		height: 100
	}
})