import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Modal, Alert } from 'react-native';
import axios from 'axios';
import StatusBar from '../component/base/StatusBar';
import { Navigation } from 'react-native-navigation';
import storageData from '../service/storageData';
import Head1 from './../component/login/Head1';
import Head2 from './../component/login/Head2';
import stylesHead1 from './../style/login/styleHead1';
import stylesBody from './../style/login/styleBody';
import { AsyncStorage } from 'react-native';
import config from '../service/config';

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			morePressed: false,
			modalVisible: false,
			cancelBtnVisible: false,
			changeHeader: false,
			btnRegister: false,
			email: '',
			password: '',
			loginFailed: false,
			test: config.host,
		}
	}

	componentDidMount() {
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}

	componentWillUnmount() {
		if(this.navigationEventListener) {
			this.navigationEventListener.remove();
		}
	}

	async componentDidAppear() {
		try {
			let token = await storageData.getKey('id_token');
			if(token) {
	   			this._navigate('home')
	   			return;
	   		}	
		} catch (err) {
			console.error(err);
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
	}

	btnRegisUnPressed = () => {
		this.setState({btnRegister : !this.state.btnRegister})
	}

	goToAuth = () => {
		axios.post(`${config.host}/auth`, {
			email: this.state.email,
			password: this.state.password
		})
		.then(response => {
			this.setState({loginFailed: false})
			storageData.saveKey("id_token", response.data.token);
			Navigation.setStackRoot(this.props.componentId, [
				{
					component: {
						name: 'fb.home'
					}
				}
			]);
		})
		.catch(err => {
			this.setState({loginFailed: true})
		})
	}

	_navigate = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'fb.home'
			}
		});
	}

	handleEmail = (text) => {
		this.setState({email: text})
	}

	handlePassword = (text) => {
		this.setState({password: text})
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
				<StatusBar color="#2d4778" />
				<Modal animation="fade" transparent={true} visible={false}>
					<View style={{ flex: 1, backgroundColor: '#00000099' }}>
						<View style={{ flex: 1, backgroundColor: '#fff', marginHorizontal: 30, marginTop: 50, marginBottom: 30, borderRadius: 5 }}>
							<View style={{ flex: 1 }}></View>
							<View style={{ height: 70, borderTopWidth: 1, borderTopColor: '#ebebeb',  borderBottomLeftRadius: 5, borderBottomRightRadius: 5, alignItems: 'flex-end', paddingRight: 20, paddingVertical: 8 }}>
								<TouchableWithoutFeedback>
									<View style={{ width: '40%', backgroundColor: '#ebebeb', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
										<Text style={{ color: '#000', fontSize: 15}}>Cancel</Text>
									</View>
								</TouchableWithoutFeedback>
							</View>
						</View>
					</View>
				</Modal>
				{/* Bagian Body */}
				{ this.renderHead() }
				<View style={stylesBody.body}>
					{/* wrapper main konten*/}
					<View style={stylesBody.wrapperKonten}>
						<View>
							{this.state.loginFailed ? 
								Alert.alert('Login Failed', 'Please check again your credentials', [
									{
										text: 'OK', onPress: () => this.setState({loginFailed: false})
									}
								])
								: 
								<View />
							}
							<View>
								<TextInput placeholder="Phone or Email" 
								value={this.state.email}
								onChangeText={text => this.handleEmail(text)}
								onFocus={this.changeUsernameIn} 
								onBlur={this.changeUsernameOut} 
								style={[stylesBody.form, this.state.inputUsername ? { borderBottomColor: '#3B5998', borderBottomWidth: 2 } : {}]}/>
								
								<TextInput placeholder="Password" secureTextEntry={true}
								value={this.state.password}
								onChangeText={text => this.handlePassword(text)}
								onFocus={this.changePasswordIn} 
								onBlur={this.changePasswordOut} 
								style={[stylesBody.form, this.state.inputPassword ? { borderBottomColor: '#3B5998', borderBottomWidth: 2 } : {}]}/>
							</View>

							<View style={stylesBody.wrapperBtnLogin}>
								<Button title="Login" color="#3B5998" onPress={this.goToAuth}/>
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