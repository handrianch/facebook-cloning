import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import stylesHead1 from '../../style/login/styleHead1';

class Head1 extends Component {
	constructor() {
		super();
		this.state = {
			morePressed: false,
			inputUsername: false,
			inputPassword: false,
		}
	}

	morePressIn = () => {
		this.setState({morePressed: !this.state.morePressed, modalVisible: true});
	}
	
	morePressOut = () => {
		this.setState({morePressed: !this.state.morePressed});	
	}

	cancelPressedIn = () => {
		this.setState({cancelBtnVisible: !this.state.morePressed});		
	}

	cancelPressedOut = () => {
		this.setState({cancelBtnVisible: !this.state.morePressed});
	}

	render() {
		return (
			<View style={stylesHead1.head}>
				{/* Bagian Banner */}
				<View>
					<Image style={stylesHead1.bannerImage} source={require('../../assets/images/banner-fb.png')} />
				</View>
				{/* Bagian bahasa*/}
				<View style={stylesHead1.bannerBahasa}>
					<View style={{ flex: 1, flexDirection: 'row', position: 'relative'}}>
						<Text style={[stylesHead1.textBahasa, {color: 'grey'}]}>Bahasa Indonesia</Text>
						<Text style={[stylesHead1.textBahasaTitik, { bottom: 4, left: 114}]}>.</Text>
						<Text style={stylesHead1.textBahasa}>Espanol</Text>
						<Text style={[stylesHead1.textBahasaTitik, { bottom: 4, left: 179}]}>.</Text>
						<TouchableWithoutFeedback onPressIn={this.morePressIn} onPressOut={this.morePressOut}>
							<Text style={[stylesHead1.textBahasa, this.state.morePressed ? stylesHead1.morePressed : {}]}>
								More...
							</Text>
						</TouchableWithoutFeedback>
					</View>
				</View>
			</View>
		)
	}
}

export default Head1;