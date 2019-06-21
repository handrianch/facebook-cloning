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
			<TouchableWithoutFeedback onPressIn={this.btnPress} OnPressOut={this.btnPress}>
				<View style={[this.state.btnPressed ? {padding: 3} : {padding: 0}, styles.wrapperButton, this.props.styleWrapper]}>
					<View style={[styles.button, this.props.styleButton]}>
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