import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Navigation } from 'react-native-navigation';
import storageData from '../../service/storageData';

class Element extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			wrapperPressed: false,
		}
	}

	movePage = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'fb.market'
			}
		});
	}

	logout = async () => {
		await storageData.removeKey("id_token");
		Navigation.popToRoot(this.props.componentId);
	}

	toCapitalize = text => text.slice(0, 1).toUpperCase() + text.slice(1)

	backgroundPresed = () => {
		this.setState({wrapperPressed: !this.state.wrapperPressed})

		if(this.props.typeAction == "logout") {
			this.logout();
		}

		this.movePage();
	}

	render() {
		return (
			<TouchableWithoutFeedback onPressIn={this.backgroundPresed} onPressOut={this.backgroundPresed}>
				<View style={[this.state.wrapperPressed ? styles.wrapperPressed : {}, styles.wrapper]}>
					<View style={styles.wrapperIcon}>
						<Image source={this.props.data.icon} style={styles.icon}/>
					</View>

					<View style={styles.wrapperTitle}>
						<Text style={styles.title}>{this.toCapitalize(this.props.data.name)}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default Element;

const styles = StyleSheet.create({
	wrapper: { flex: 1, flexDirection: 'row', padding: 10},
	wrapperPressed: {backgroundColor: '#ebebeb'},
	wrapperIcon: {width: 50, justifyContent: 'center', alignItems: 'center' },
	icon: { width: 38, height: 38 },
	wrapperTitle: {flex: 1, justifyContent: 'center', paddingLeft: 10},
	title: { fontSize: 17, color: '#000' }
})