import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class CustomButton extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			btnPressed: false,
		}
	}

	btnPress = () => {
		this.setState({btnPressed: !this.state.btnPressed});
	}

	render() {
		return (
			<TouchableWithoutFeedback onPressIn={this.btnPress} onPressOut={this.btnPress}>
				<View style={[styles.wrapperButton, this.props.styleWrapper, {}]}>
					<View style={[styles.button, this.props.styleButton, this.state.btnPressed ? {width: '90%', height: '90%'} : {}]}>
						<Text style={[styles.textButton, this.props.styleTextButton, {fontSize: 13}]}>
							{this.props.title}
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

export default CustomButton;

const styles = StyleSheet.create({
	wrapperButton: { flex: 1, marginRight: 3, height: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'},
	button : { 
		width: '100%', 
		height: '100%', 
		borderRadius: 5, 
		alignItems: 'center', 
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000000'
	},
	textButton: { color: '#fff', fontWeight: 'bold' }
})