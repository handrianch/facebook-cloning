import React, { Component } from 'react';
import { View, 
	     Text, 
	     TextInput, 
	     Button, 
	     FlatList, 
	     ScrollView, 
	     TouchableWithoutFeedback, 
	     StyleSheet, 
	     Keyboard, 
	     Alert 
	 } from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
import { Navigation } from 'react-native-navigation';
import axios from 'axios';
import storageData from '../service/storageData';
import config from '../service/config';
import TimeAgo from 'react-native-timeago';
import { Icon } from 'react-native-elements';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chats: [],
			jwt: '',
			chat: '',
			test:'ok',
			type: 'post',
			chat_id: null,
			profile: {
				username: ''
			},
			logoutPressed: false,
			keyboardToggle: false
		}
	}
	
	async componentDidMount() {
		setInterval(() => this.loadChats(), 1000);
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',this._keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',this._keyboardDidHide);
		
		try {
			let token = await storageData.getKey('id_token');
			this.setState({jwt: token});
		}catch(e) {
			console.error(e);
		}

		let options = {headers: {"Authorization": `Bearer ${this.state.jwt}`}}

		axios.get(`${config.host}/users/profile`, options)
		     .then(response => {
		     	this.setState({profile: response.data});
		     })
		     .catch(err => {
		     	console.error(err);
		     });
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
	    this.keyboardDidHideListener.remove();
	}

	_keyboardDidShow = () => {
		this.setState({keyboardToggle: true});
	}

	_keyboardDidHide = () => {
		this.setState({keyboardToggle: false});
	}

	loadChats = async () => {
		try {
			let headers = {headers: {"Authorization": `Bearer ${this.state.jwt}`}}

			let { data } = await axios.get(`${config.host}/chats`, headers);
			this.setState({chats: data})
		} catch(err) {
			this.setState({test: this.state.jwt})
		}
	}

	logout = () => {
		this.setState({logoutPressed: true});
		storageData.removeKey('id_token')
		           .then(res => {
						Navigation.popToRoot(this.props.componentId);
		           })
		           .catch(err => {
		           	console.error(err);
		           });
	}

	editMessage = () => {
		let headers = {headers: {"Authorization": `Bearer ${this.state.jwt}`}}
		
		let payload = {
			chat: this.state.chat
		}

		axios.patch(`${config.host}/chats/${this.state.chat_id}`, payload, headers)
		     .then(response => {
		     	this.setState({chat: ''})
		     })
		     .catch(err => {
		     	this.setState({test: 'error mang'});
		     });
	}

	sendMessage = () => {
		let payload = {
			chat: this.state.chat
		}

		let headers = {headers: {"Authorization": `Bearer ${this.state.jwt}`}}

		axios.post(`${config.host}/chats`, payload, headers)
		     .then(response => {
		     	this.loadChats();
		     	this.setState({chat: ''})
		     })
		     .catch(err => {
		     	this.setState({test: 'error mang'});
		     });
	}

	changeText = text => this.setState({chat: text});

	editHandler = (text, type, id) => {
		this.setState({chat: text, type, chat_id: id});
	}

	handlerSendingMessage = () => {
		if(this.state.type == 'patch') {
			this.editMessage();
		} else {
			this.sendMessage();
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ height: 50, flexDirection: 'row', backgroundColor: '#7efff5', borderBottomWidth: 1, borderBottomColor: '#DDD' }}>
					<View style={{ width: '85%', justifyContent: 'center', paddingLeft: 10 }}>
						<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0e1111', textTransform: 'capitalize' }}>{this.state.profile.username}</Text>
					</View>

					<View style={{ width: '15%'}}>
						<TouchableWithoutFeedback onPressIn={this.logout} onPressOut={() => this.setState({logoutPressed: false})}>
							<View style={[
								{ justifyContent: 'center', alignItems: 'center', height: '100%'}, 
								this.state.logoutPressed ? {backgroundColor: '#ebebeb'} : {}]}>
								<Icon name="power-settings" color="#000" type="material-community"/>
								<Text>Logout</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
				<View style={[{ height: '80%', padding: 5, paddingTop: 0 }, this.state.keyboardToggle ? {height: '48%'} : {}]}>
					<ScrollView>
						<ReversedFlatList
						data={this.state.chats}
						renderItem={({item}) => <Buble onEditPressed={this.editHandler} token={this.state.jwt} data={item} profile={this.state.profile} />}
						/>
					</ScrollView>
				</View>
				<View style={{ height: '20%', flexDirection: 'row'}}>
					<View style={{ width: '80%', marginRight: 5, marginBottom: 50, padding: 5, justifyContent: 'center' }}>
						<TextInput style={{ height: 40, borderWidth: 1, backgroundColor: '#f8f8f8', borderColor: '#dcdcdc', borderRadius: 25, paddingLeft: 10 }} value={this.state.chat} onChangeText={this.changeText} placeholder="type here..." />
					</View>
					<View style={{ flex: 1, justifyContent: 'center', marginBottom: 50, marginRight: 5 }}>
						<Button title="send" color="green" onPress={this.handlerSendingMessage}/>
					</View>
				</View>
			</View>
		)
	}
}

export default Chat;

class Buble extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showBtn: false,
			test: '',
			editPressed: false,
			deletePressed: false,
		}
	}
	
	longPressHandler = () => {
		if(this.props.data.user_id == this.props.profile.id) {
			this.setState({showBtn: true});
		}
	}

	deleteChat = () => {
		let headers = {headers: {"Authorization": `Bearer ${this.props.token}`}}
		axios.delete(`${config.host}/chats/${this.props.data.id}`, headers)
		     .then(response => {
		     	this.setState({showBtn: false});
		     });
	}

	editChat = () => {
		this.setState({editPressed: true});
		this.setState({showBtn: false});
		this.props.onEditPressed(this.props.data.chat, 'patch', this.props.data.id);
	}

	render() {
		return (
			<TouchableWithoutFeedback onLongPress={this.longPressHandler} onPress={() => this.setState({showBtn: false})} onBlur={() => this.setState({showBtn: false})}>
				<View style={[bubleStyles.container, this.props.profile.id == this.props.data.user.id ? bubleStyles.containerRight : {}]}>
					<View style={bubleStyles.wrapper}>
						<Text style={bubleStyles.ch}>
							{this.props.data.user.username} :
						</Text>
						<View style={{ flex: 1 }}>
							<Text style={{ flex: 1, fontSize: 15 }}>{this.props.data.chat}</Text>
							<TimeAgo style={{ flex: 0.5, fontSize: 10 }} time={this.props.data.createdAt} interval={20000} formatter="minute"/>
						</View>
					</View>
					{
						this.state.showBtn ?
						<View style={{ width: '40%', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 5}}>
							<TouchableWithoutFeedback onPressIn={this.editChat} onPressOut={() => this.setState({editPressed: false})}>
								<View style={[{ width: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 15}, this.state.editPressed ? {backgroundColor: '#ebebeb'} : {}]}>
									<Icon name="pencil" type="material-community" color="red" />
								</View>
							</TouchableWithoutFeedback>

							<TouchableWithoutFeedback onPressIn={this.deleteChat} onPressOut={() => this.setState({deletePressed: false})}>
								<View style={[{ width: '20%', alignItems: 'center', justifyContent: 'center'}, this.state.deletePressed ? {backgroundColor: '#ebebeb'} : {}]}>
									<Icon name="delete-forever" type="material-community" color="red" />
								</View>
							</TouchableWithoutFeedback>
						</View>
						:
						<View />
					}
					
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

class AlertConfirm extends Component {
	render() {
		return (
			Alert.alert(this.props.title, this.props.message,
			  [
			    {text: 'Oke', onPress: () => console.log('Ask me later pressed')},
			    {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
			    {text: 'OK', onPress: () => console.log('OK Pressed')},
			  ]
			)
		)
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
})

const bubleStyles = StyleSheet.create({
	container : { flexDirection: 'row' },
	containerRight: {justifyContent: 'flex-end'},
	wrapper: { 
		width: '60%', 
		marginRight: 8, 
		padding: 5, 
		backgroundColor: '#DADADA', 
		marginBottom: 5, 
		width: '50%', 
		borderRadius: 5, 
		flexDirection: 'row'
	}
})