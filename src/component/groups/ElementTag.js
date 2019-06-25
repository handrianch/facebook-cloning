import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class ElementTag extends Component {	
	render() {
		return (
			<View style={styles.wrapper}>
				<Icon name={this.props.data.icon} type="material-community" />
				<Text style={{ textAlign: 'center', marginLeft: 5 }}>{ this.props.data.title }</Text>
			</View>
		);
	}
}

export default ElementTag;

const styles = StyleSheet.create({
	wrapper: { 
		flexDirection: 'row', 
		padding: 5, 
		backgroundColor: '#ebebeb',
		borderRadius: 10, 
		width: 90,
		marginRight: 10, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	wrapperTextBtn: { flex: 1, flexDirection: 'row'},
	wrapperElement: { flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6, marginLeft: 20},
	wrapperIcon: { backgroundColor: '#e3e3e3', borderRadius: 50, padding: 7 },
})