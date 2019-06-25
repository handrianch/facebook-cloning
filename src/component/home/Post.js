import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import ThumbnailPhoto from '../small/ThumbnailPhoto';

class Post extends Component {
	constructor() {
		super();
		this.state = {
			likeButton: false,
			commentButton: false,
			topPart: false,
			bottomPart: false,
			btnMore: false
		}
	}

	img = {
		'saitama'	: require('../../assets/images/526887.jpg'),
		'sonic'		: require('../../assets/images/anjay.jpg'),
		'fang'		: require('../../assets/images/minion.jpg'),
		'king'		: require('../../assets/images/op.jpg'),
	}
	
	topPartPressed 		= () => this.setState({topPart: !this.state.topPart});
	bottomPartPressed 	= () => this.setState({bottomPart: !this.state.bottomPart});
	likePressed 		= () => this.setState({likeButton: !this.state.likeButton});
	commentPressed 		= () => this.setState({commentButton: !this.state.commentButton});
	btnMorePressed 		= () => this.setState({btnMore: !this.state.btnMore});

	render() {
		const { user, posts, createdAt } = this.props.data
		return(
			<View style={styles.container}>
				<TouchableWithoutFeedback onPressIn={this.topPartPressed} onPressOut={this.topPartPressed}>
					<View style={[styles.wrapperTopPart, this.state.topPart ? {backgroundColor: '#ebebeb'} : {}]}>
						<ThumbnailPhoto image={user.avatar} style={styles.wrapperPhotoProfile} />
						
						<View style={styles.wrapperProfileName}>
							<Text style={styles.profileName}>{user.name}</Text>
							<Text style={styles.timePost}>{this.props.data.minute}</Text>
						</View>
						<TouchableWithoutFeedback onPressIn={this.btnMorePressed} onPressOut={this.btnMorePressed}>
							<View style={[styles.btnMore, this.state.btnMore ? {backgroundColor: '#ebebeb'} : {}]}>
								<Icon size={20} name='dots-horizontal' type='material-community'/>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>

				<View style={styles.wrapperMiddlePart}>
					<View style={styles.wrapperPost}>
						<Text style={styles.postText}>{posts}</Text>
						<TouchableWithoutFeedback onPressIn={this.bottomPartPressed} onPressOut={this.bottomPartPressed}>
							<View style={[styles.wrapperInfoPart, this.state.bottomPart ? {backgroundColor: '#ebebeb'} : {}]}>
							<View style={[styles.InfoPart, {flexDirection: 'row'}]}>
								{
									this.props.data.like && this.props.data.like != 0 ?
										<View style={styles.wrapperIcon}>
											<Icon size={15} color="#fff" name='thumb-up' type='material-community'/>
										</View>
										:
										<View style={styles.wrapperIcon} />
								}

								{
									this.props.data.love ? 
										<View style={[{ marginLeft: -8 }, styles.wrapperIcon]}>
											<Icon size={15} color="#ff0000" name='heart' type='material-community'/>
										</View>
										:
										<View style={[{ marginLeft: -8 }, styles.wrapperIcon]} />
								}
								
								<Text style={styles.infoText}>{this.props.data.like } 
								{this.props.data.like  && !this.props.data.love ? " orang menyukai" : "" }</Text>
							</View>

							<View style={styles.wrapperComment}>
								<Text style={styles.comment}>
								{this.props.data.comments} {this.props.data.comments > 1 ? "Comments" : "Comment" }</Text>
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
	timePost: { fontSize: 10, marginTop: -2 },
	btnMore: { justifyContent: 'center', alignItems: 'center', width: 40,  height: 50, padding: 5, height: 39, borderRadius: 100},
	wrapperMiddlePart: { 
		borderBottomWidth: 2, 
		borderBottomColor: '#ebebeb', 
		alignItems: 'flex-start'
	},
	wrapperPost: { flex: 1 },
	postText: { fontSize: 15, color: '#000', marginBottom: 5, paddingHorizontal: 10, paddingBottom: 8  },
	wrapperInfoPart: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 8 },
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
	wrapperComment: { flex: 1, alignItems: 'flex-end' },
	comment: { marginTop: 5 },
	wrapperButtonAction: { flex: 1, flexDirection: 'row'},
	wrapperButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 },
	textButtonLike: { fontSize: 12, marginLeft: 4, marginTop: 5 },
	textButtonComment: { fontSize: 12, marginLeft: 4 },
	wrapperButtonPressed: {backgroundColor: '#ebebeb'},
})