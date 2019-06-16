import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, ScrollView, StatusBar, TouchableWithoutFeedback, Modal, BackHandler } from 'react-native';
import Head1 from '../component/login/Head1';
import Head2 from '../component/login/Head2';
import stylesHead1 from '../style/login/styleHead1';
import stylesBody from '../style/login/styleBody';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			morePressed: false,
			modalVisible: false,
			cancelBtnVisible: false,
			changeHeader: false,
			btnRegister: false,
		}
	}

	changeUsernameIn = () => {
		this.setState({inputUsername: !this.state.inputUsername, changeHeader: true})
	}

	changeUsernameOut = () => {
		this.setState({inputUsername: !this.state.inputUsername})
	}

	changePasswordIn = () => {
		if(!this.state.changeHeader) {
			this.setState({changeHeader: true});
		}
		this.setState({inputPassword: !this.state.inputPassword})
	}

	changePasswordOut = () => {
		this.setState({inputPassword: !this.state.inputPassword})
	}
	
	renderHead = () => {
		if(this.state.changeHeader) {
			return <Head2 />;
		} else {
			return <Head1 />;
		}
	}

	btnRegisPressed = () => {
		this.setState({btnRegister : !this.state.btnRegister})
		// this.setState({btnRegister : !this.state.btnRegister})
	}

	btnRegisUnPressed = () => {
		this.setState({btnRegister : !this.state.btnRegister})
	}

	renderPartials = () => {
		if(this.state.changeHeader) {
			return (
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 3}}>
					<TouchableWithoutFeedback onPressIn={this.btnRegisPressed} onPressOut={this.btnRegisUnPressed}>
						<Text style={[ this.state.btnRegister ? {backgroundColor: '#ebebeb'} : {}, { fontWeight: 'bold', color: "#222", fontSize: 15, paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5 }]}>Crete New Facebook Account</Text>
					</TouchableWithoutFeedback>
				</View>
			)
		} else {
			return (
				<View>
					<View style={stylesBody.wrapperForgotPassword}>
						<Text style={stylesBody.forgotPassword}>Forgot Password ?</Text>
					</View>

					<View style={{ flex: 1, flexDirection: 'row', marginBottom: 40}}>
						<View style={stylesBody.wrapperLine}>
							<View style={stylesBody.line} />
						</View>
						<View style={stylesBody.wrapperOrText}>
							<Text style={stylesBody.orText}>{'or'.toUpperCase()}</Text>
						</View>
						<View style={stylesBody.wrapperLine}>
							<View style={stylesBody.line} />
						</View>
					</View>

					<View style={stylesBody.wrapperBtnRegis}>
						<View style={stylesBody.btnRegis}>
							<Button title="Create New Facebook Account" color="#07A007" />
						</View>
					</View>
				</View>
			);
		}
	}

	render() {
		return (
			<View style={[{backgroundColor: '#fff'}, stylesMain.container]}>
				{/* Bagian Body */}
				{ this.renderHead() }
				<View style={stylesBody.body}>
					{/* wrapper main konten*/}
					<View style={stylesBody.wrapperKonten}>
						<View>
							<View>
								<TextInput placeholder="Phone or Email" 
								onFocus={this.changeUsernameIn} 
								onBlur={this.changeUsernameOut} 
								style={[stylesBody.form, this.state.inputUsername ? { borderBottomColor: '#3B5998', borderBottomWidth: 2 } : {}]}/>
								
								<TextInput placeholder="Password" secureTextEntry={true} 
								onFocus={this.changePasswordIn} 
								onBlur={this.changePasswordOut} 
								style={[stylesBody.form, this.state.inputPassword ? { borderBottomColor: '#3B5998', borderBottomWidth: 2 } : {}]}/>
							</View>

							<View style={stylesBody.wrapperBtnLogin}>
								<Button title="Login" color="#3B5998" />
							</View>

							{this.renderPartials()}
						</View>
					</View>
				</View>
			</View>
		)
	}
}

export default Login;

const stylesMain = StyleSheet.create({ 
	flex: 1
});