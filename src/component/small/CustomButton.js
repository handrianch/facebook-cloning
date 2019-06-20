import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CustomButton extends React.PureComponent {
	render() {
		return (
			<View style={[styles.wrapperButton, this.props.styleWrapper]}>
				<View style={[styles.button, this.props.styleButton]}>
					<Text style={[styles.textButton, this.props.styleTextButton]}>{this.props.title}</Text>
				</View>
			</View>
		)
	}
}

export default CustomButton;

const styles = StyleSheet.create({
	wrapperButton: { flex: 1, marginRight: 3 },
	button : { 
		width: '100%', 
		height: '100%', 
		borderRadius: 5, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	textButton: { color: '#fff', fontWeight: 'bold' }
})