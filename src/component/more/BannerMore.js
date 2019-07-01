import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import ThumbnailPhoto from '../small/ThumbnailPhoto';

class BannerMore extends Component {
	constructor() {
		super();
		this.state = {
			wrapperPressed: false,
		}
	}

	bannerPressed = () => this.setState({wrapperPressed: !this.state.wrapperPressed});

	render() {
		return (
			<TouchableWithoutFeedback onPressIn={this.bannerPressed} onPressOut={this.bannerPressed}>
				<View style={[this.state.wrapperPressed ? styles.wrapperPressed : {}, styles.wrapper]}>
					<View style={styles.banner}>
						<View style={styles.wrapperImage}>
							<ThumbnailPhoto image={this.props.avatar} style={styles.image} />
						</View>
						<View style={styles.wrapperText}>
							<Text style={styles.profileName}>{this.props.name}</Text>
							<Text style={styles.info}>View Your Profile</Text>
						</View>
					</View>
					<View style={styles.wrapperBorder}>
						<View style={styles.border} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

export default BannerMore;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	wrapperPressed: {
		backgroundColor: '#ebebeb'
	},
	banner: { flex: 1, flexDirection: 'row' },
	wrapperImage : {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '70%',
		height: '70%',
	},
	wrapperText : { flex: 1, justifyContent: 'center'},
	profileName: { fontSize: 18, color: 'black', textTransform: 'capitalize' },
	info: { fontSize: 12 },
	wrapperBorder : { flex: 1, paddingHorizontal: 15 },
	border: { borderBottomWidth: 1, borderBottomColor: '#ebebeb'  }
})