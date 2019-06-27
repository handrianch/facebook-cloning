import React, { Component } from 'react';
import { StyleSheet ,View, Image, TouchableWithoutFeedback, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import { Navigation } from 'react-native-navigation';
import ThumbnailPhoto from '../component/small/ThumbnailPhoto';
import StatusBar from '../component/base/StatusBar';
import storageData from '../service/storageData';
import config from '../service/config';

class CreateStatus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backBtn: false,
			postBtn: false,
			avatar: "https://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg",
			name: '',
			dropDownPrivacy: false,
			dropDownAlbum: false,
			statusText: '',
			test: 'debug'
		}
	}

	async componentDidMount() {
		try {
			let token = await storageData.getKey('id_token');
			this.setState({jwt: `Bearer ${token}`});

			let headers = {headers: {"Authorization": this.state.jwt}}

			let { data: profile } = await axios.get(`${config.host}/profile`, headers)
			let avatar = profile.avatar;
			let name = profile.name
			this.setState({name, avatar});

			if(this.props.postId) {
				let { data } = await axios.get(`${config.host}/posts/${this.props.postId}`, headers)
				this.setState({statusText: data.posts});
			}

		} catch(err) {
			console.error(err);
		}
	}

	backBtnHandlerOut 		= () => this.setState({backBtn: false});
	postBtnHandlerOut 		= () => this.setState({postBtn: !this.state.postBtn});
	dropDownPrivacyHandler 	= () => this.setState({dropDownPrivacy: !this.state.dropDownPrivacy});
	dropDownAlbumHandler 	= () => this.setState({dropDownAlbum: !this.state.dropDownAlbum});
	handleStatusText 		= (text) => this.setState({statusText: text});

	backBtnHandlerIn = () => {
		this.setState({backBtn: true})
		Navigation.pop(this.props.componentId);
	}

	postBtnHandler = async () => {
		this.setState({postBtn: !this.state.postBtn});
		let headers = {headers: {"Authorization": `${this.state.jwt}`}}

		axios.post(`${config.host}/posts`, {posts: this.state.statusText}, headers)
		     .then(response => {
		     	this.setState({ statusText: '' });
		     	Navigation.pop(this.props.componentId);
		     })
		     .catch(err => {
		     	console.error(err);
		     });
	}

	updateBtnHandler = async () => {
		this.setState({postBtn: !this.state.postBtn});
		let headers = {headers: {"Authorization": `${this.state.jwt}`}}

		axios.patch(`${config.host}/posts/${this.props.postId}`, {posts: this.state.statusText}, headers)
		     .then(response => {
		     	this.setState({ statusText: '' });
		     	Navigation.pop(this.props.componentId);
		     })
		     .catch(err => {
		     	console.error(err);
		     });
	}

	render() {
		return (
			<View style={stylesModalStatus.container}>
				<StatusBar color="#2d4778" />
	          	<View style={stylesModalStatus.wrapper}>
	          		<View style={stylesModalStatus.header}>
	          			<TouchableWithoutFeedback onPressIn={this.backBtnHandlerIn} onPressOut={this.backBtnHandlerOut}>
		          			<View style={[stylesModalStatus.backBtn, this.state.backBtn ? stylesModalStatus.bgHighlightBlue : {}]}>
			          			<Icon
								  name='arrow-left-bold-outline'
								  type='material-community'
								  color="#fff"
								/>
			          		</View>
			          	</TouchableWithoutFeedback>
		          		<View style={stylesModalStatus.title}>
		          			<Text style={stylesModalStatus.textTitle}>Create Post</Text>
		          		</View>
		          		<TouchableWithoutFeedback onPressIn={this.props.postId ? this.updateBtnHandler : this.postBtnHandler} onPressOut={this.postBtnHandlerOut}>
			          		<View style={[stylesModalStatus.postBtn, this.state.postBtn ? stylesModalStatus.bgHighlightBlue : {}]}>
			          			{
			          				this.props.postId ? 
					          			<Text style={stylesModalStatus.btnPost}>Update</Text>
					          			:
					          			<Text style={stylesModalStatus.btnPost}>POST</Text>
			          			}
			          		</View>
		          		</TouchableWithoutFeedback>
		          	</View>
		          	<View style={[stylesModalStatus.wrapperForm, {padding: 10}]}>
		          		<View style={{ height: 60, flexDirection: 'row'}}>
			          		<View style={{  width: 55, marginRight: 8}}>
				          		<ThumbnailPhoto image={this.state.avatar} style={{ width: 55, height: 55 }} />
				          	</View>
				          	<View style={{ flex: 1 }}>
				          		<Text style={stylesModalStatus.profileName}>
				          			{this.state.name}
				          		</Text>
				          		<View style={stylesModalStatus.wrapperBtnAct}>
				          			<TouchableWithoutFeedback onPressIn={this.dropDownPrivacyHandler} onPressOut={this.dropDownPrivacyHandler}>
				          				<View style={[stylesModalStatus.wrapperBtn, this.state.dropDownPrivacy ? stylesModalStatus.bgLightGrey : {}]}>
					          				<View style={{width: 15}}>
						          				<Icon size={12} name='lock' color='#8c959e' type="material-community" />
						          			</View>
					          				<Text style={{ flex: 1, fontSize: 12 }}>Only Me</Text>
					          				<View style={{width: 15}}>
						          				<Icon size={12} name='menu-down' color='#8c959e' type="material-community" />
						          			</View>
					          			</View>
					          		</TouchableWithoutFeedback>

					          		<TouchableWithoutFeedback onPressIn={this.dropDownAlbumHandler} onPressOut={this.dropDownAlbumHandler}>
				          				<View style={[stylesModalStatus.wrapperBtn, { marginLeft: 5 }, this.state.dropDownAlbum ? stylesModalStatus.bgLightGrey : {}]}>
					          				<View style={{width: 15}}>
						          				<Icon size={12} name='plus' color='#8c959e' type="material-community" />
						          			</View>
					          				<Text style={{ flex: 1, fontSize: 12 }}>Album</Text>
					          				<View style={{width: 15}}>
						          				<Icon size={12} name='menu-down' color='#8c959e' type="material-community" />
						          			</View>
					          			</View>
					          		</TouchableWithoutFeedback>
				          		</View>
				          	</View>
			          	</View>
			          	<View style={{ height: '100%', flexWrap: 'wrap'}}>
			          		<TextInput style={{ color: "#0e1111", height: '50%',  fontSize: 25, textAlignVertical: 'top'}}
			          		multiline={true}
			          		numberOfLines={4}
			          		onChangeText={this.handleStatusText}
			          		value={this.state.statusText}
			          		placeholder="What's on your mind?"/>
			          	</View>
		          	</View>
	          	</View>
            </View>
		)
	}
}

export default CreateStatus;

const stylesModalStatus = StyleSheet.create({
	container: { flex: 1, height: '100%' },
	wrapper: { flex: 1, backgroundColor: '#fff'},
	header: { height: 50, flexDirection: 'row' },
	backBtn: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4167b0' },
	title: { flex: 1, height: 50, justifyContent: 'center', paddingLeft: 5,backgroundColor: '#4167b0'},
	textTitle: { fontSize: 18, color: '#fff' },
	postBtn: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4167b0' },
	bgHighlightBlue: {backgroundColor: '#2d4778'},
	btnPost: { fontSize: 12, color: '#9eaecf' },
	wrapperFrom: { width: '100%', height: 65, padding: 10 },
	profileName: { fontWeight: 'bold', color: '#0e1111', fontSize: 18, textTransform: 'capitalize' },
	wrapperBtnAct: { flex: 1, flexDirection: 'row', marginTop: 2},
	wrapperBtn: { width: 80, height: 25, flexDirection: 'row', borderWidth: 1, borderColor:'#8c959e', borderRadius: 5, padding: 4 },
	bgLightGrey: {backgroundColor: '#ebebeb'},
})