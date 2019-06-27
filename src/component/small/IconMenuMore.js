import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Navigation } from 'react-native-navigation';
import axios from 'axios';
import config from '../../service/config';


class IconMenuMore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItem: false,
		}
	}

	deletePost = () => {
		let headers = {headers: {"Authorization": `Bearer ${this.props.token}`}}
		axios.delete(`${config.host}/posts/${this.props.postId}`, headers);
		this.props.closeModal();
	}

	updatePost = () => {
		this.props.closeModal();
		Navigation.push(this.props.componentId, {
			component: {
				name: 'fb.createStatus',
				passProps: {
					token: this.props.token,
					postId: this.props.postId
				}
			}
		});
	}

	menuPressed = () => {
		if(this.props.typeAction == 'delete') {
			this.deletePost();
		} else if(this.props.typeAction == 'update') {
			this.updatePost();
		}

		this.setState({menuItem: !this.state.menuItem})
	}

	render() {
		return (
			<TouchableWithoutFeedback onPressIn={this.menuPressed} onPressOut={this.menuPressed}>
				<View style={[styles.wrapper, this.props.style, this.state.menuItem ? {backgroundColor: '#ebebeb'} : {}]}>
		          	<View style={styles.wrapperIcon}>
		          		<Image style={styles.icon} source={this.props.image} />
		          	</View>
		          	<View style={styles.wrapperTitle}>
		          		<Text style={[styles.title, this.props.subtitle ? {} : {marginTop: 16}]}>{this.props.title}</Text>
		          		{
		          			this.props.subtitle ? 
		          				<Text style={{ fontSize: 10, color: "#414a4c" }}>{this.props.subtitle}</Text>
		          				:
		          				<Text />
		          		}
		          	</View>
	            </View>
	        </TouchableWithoutFeedback>
		)
	}
}

export default IconMenuMore;

const styles = StyleSheet.create({
	wrapper: { flexDirection: 'row' },
	wrapperIcon: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
	icon: { width: 30, height: 30},
	wrapperTitle: { flex: 1, justifyContent: 'center' },
	title: { fontSize: 15, color: "#0e1111"}
})