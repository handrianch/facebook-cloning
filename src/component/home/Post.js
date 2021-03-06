import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import TimeAgo from 'react-native-timeago';
import ThumbnailPhoto from '../small/ThumbnailPhoto';
import IconMenuMore from '../small/IconMenuMore';
import config from '../../service/config';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likeButton: false,
			commentButton: false,
			topPart: false,
			bottomPart: false,
			btnMore: false,
			modalMore: false,
			images: {
				savePost: require('../../assets/icons/save-link.png'),
				editPost : require('../../assets/icons/edit-post.png'),
				hide: require('../../assets/icons/hide-from-timeline.png'),
				delete: require('../../assets/icons/delete.png')
			},
		}
	}
	
	topPartPressed 		= () => this.setState({topPart: !this.state.topPart});
	bottomPartPressed 	= () => this.setState({bottomPart: !this.state.bottomPart});
	likePressed 		= () => this.setState({likeButton: !this.state.likeButton});
	commentPressed 		= () => this.setState({commentButton: !this.state.commentButton});
	modalMoreClose 		= () => this.setState({modalMore: false});
	btnMorePressOut 	= () => this.setState({btnMore: !this.state.btnMore});
	btnMorePressIn 		= () => this.setState({btnMore: !this.state.btnMore, modalMore: true});

	closeModal = () => {
		this.modalMoreClose();
		this.props.refreshFeeds();
	}

	render() {
		const { user, posts, createdAt, user_id, id } = this.props.data
		return(
			<View style={styles.container}>
				<Modal
		          animationType="slide"
		          transparent={true}
		          onRequestClose={this.modalMoreClose}
		          visible={this.state.modalMore}>
		          <View style={{ backgroundColor: '#00000090', height: '100%', justifyContent: 'flex-end' }}>
			          <View style={{ height: '70%', backgroundColor: '#FFF', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
			          	<IconMenuMore image={this.state.images.savePost} style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} title="Save post" subtitle="Add this to your saved items" />
				          {
				          	this.props.userId == user_id ? 
				          		<IconMenuMore componentId={this.props.componentId} 
				          		closeModal={this.closeModal} image={this.state.images.editPost} 
				          		typeAction="update" title="Edit post" token={this.props.token} 
				          		userId={this.props.userId} postId={id} />
				          		:
				          		<View />
				          }
				        <IconMenuMore image={this.state.images.hide} title="Hide From Timeline" />
				          {
				          	this.props.userId == user_id ? 
				          		<IconMenuMore componentId={this.props.componentId} 
				          		closeModal={this.closeModal} image={this.state.images.delete} 
				          		typeAction="delete" title="Delete" token={this.props.token} 
				          		userId={this.props.userId} postId={id} />
				          		:
				          		<View />	
				          }
				      </View>
				  </View>
				</Modal>
				<TouchableWithoutFeedback onPressIn={this.topPartPressed} onPressOut={this.topPartPressed}>
					<View style={[styles.wrapperTopPart, this.state.topPart ? {backgroundColor: '#ebebeb'} : {}]}>
						<ThumbnailPhoto image={user.avatar} style={styles.wrapperPhotoProfile} />
						
						<View style={styles.wrapperProfileName}>
							<Text style={styles.profileName}>{user.name}</Text>
							<TimeAgo style={styles.timePost} time={createdAt} interval={20000} formatter="minute"/>
						</View>
						<TouchableWithoutFeedback onPressIn={this.btnMorePressIn} onPressOut={this.btnMorePressOut}>
							<View style={[styles.btnMore, this.state.btnMore ? {backgroundColor: '#ebebeb'} : {}]}>
								<Icon size={20} name='dots-horizontal' type='material-community'/>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>

				<View style={styles.wrapperMiddlePart}>
					<View style={styles.wrapperPost}>
						<Text style={styles.postText}>{posts}</Text>
						<TouchableWithoutFeedback styles={{flex: 1, flexDirection: 'row' }}onPressIn={this.bottomPartPressed} onPressOut={this.bottomPartPressed}>

							<View style={[styles.wrapperInfoPart, {justifyContent: "space-between",flex: 1, flexDirection: 'row'},this.state.bottomPart ? {backgroundColor: '#ebebeb'} : {}]}>

								<View style={[styles.InfoPart, {flexDirection: 'row', flex: 2, padding: 5, alignItems: 'center'}]}>
									<View style={styles.wrapperIcon}>
										<Icon size={15} color="#fff" name='thumb-up' type='material-community'/>
									</View>
											
									<View style={[{ marginLeft: -8 }, styles.wrapperIcon]}>
										<Icon size={15} color="#ff0000" name='heart' type='material-community'/>
									</View>
									
									<Text style={styles.infoText}>19</Text>
								</View>

								<View style={[styles.wrapperComment, {backgroundColor: 'transparent',flexDirection: 'row',flex:1,alignItems:'center', justifyContent: 'flex-end' }]}>
									<Text style={[styles.comment, {marginRight: 5}]}>19 Comments</Text>
								</View>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>

				<View style={styles.wrapperButtonAction}>
					<TouchableWithoutFeedback onPressIn={this.likePressed} onPressOut={this.likePressed}>
						<View style={[styles.wrapperButton, this.state.likeButton ? styles.wrapperButtonPressed : {}]}>
							<Icon size={20} name='thumb-up-outline' type='material-community'/> 
							<Text style={[styles.textButtonLike]}>Like</Text>
						</View>
					</TouchableWithoutFeedback>

					<TouchableWithoutFeedback onPressIn={this.commentPressed} onPressOut={this.commentPressed}>
						<View style={[styles.wrapperButton, this.state.commentButton ? styles.wrapperButtonPressed : {}]}>
							<Icon size={20} name='comment' type='material-community'/> 
							<Text style={styles.textButtonComment}>Comment</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}
}

export default Post;

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', marginBottom: 10 },
	wrapperTopPart: { flex: 1, flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 3},
	wrapperPhotoProfile: { width: 50, height: 50, padding: 5 },
	photoProfile: { width: '100%', height: '100%', borderRadius: 100 },
	wrapperProfileName: { flex: 1, height: 50, marginTop: 5 },
	profileName: { fontSize: 20, color: '#000', fontWeight: 'bold', textTransform: 'capitalize' },
	timePost: { fontSize: 11, textTransform: 'capitalize', marginTop: -2 },
	btnMore: { justifyContent: 'center', alignItems: 'center', width: 40,  height: 50, padding: 5, height: 39, borderRadius: 100},
	wrapperMiddlePart: { 
		borderBottomWidth: 2, 
		borderBottomColor: '#ebebeb', 
		alignItems: 'flex-start',
		flexDirection: 'row' 
	},
	wrapperPost: { flex: 1 },
	postText: { fontSize: 15, color: '#000', marginBottom: 5, paddingHorizontal: 10, paddingBottom: 8  },

	wrapperInfoPart: { },

	infoPart: { flex: 1, flexDirection: 'row' },
	wrapperIcon: { 
		backgroundColor: '#2196f3', 
		padding: 3, 
		borderRadius: 50, 
		flexDirection: 'row', 
		borderWidth: 1, 
		borderColor: '#fff' 
	},
	infoText: { marginLeft: 5, paddingTop:3 },
	wrapperComment: { },
	comment: { marginTop: 5 },
	wrapperButtonAction: { flex: 1, flexDirection: 'row'},
	wrapperButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 },
	textButtonLike: { fontSize: 12, marginLeft: 4, marginTop: 5 },
	textButtonComment: { fontSize: 12, marginLeft: 4 },
	wrapperButtonPressed: {backgroundColor: '#ebebeb'},
})