import {StyleSheet} from 'react-native';

const stylesBody = StyleSheet.create({
	body: { 
		height: '100%',
	},
	wrapperKonten: {
		margin: 40
	},
	wrapperBtnLogin: {
		marginBottom: 20 
	},
	form : {
		marginBottom: 15,
		height: 40,
		borderColor: '#ebebeb', 
		borderBottomWidth: 1, 
		paddingLeft: 5, 
		paddingRight: 30, 
		fontSize: 15
	},
	wrapperForgotPassword: {
		marginBottom: 25
	},
	forgotPassword: {
		fontWeight: 'bold', 
		color: '#3B5998', 
		textAlign: 'center'
	},
	wrapperLine: {
		width: '45%'
	},
	line : {
		marginTop: 8,
		borderWidth: 1,
		borderColor: '#e3e3e3'
	},
	wrapperOrText: {
		width: '10%',
	},
	orText: {
		textAlign: 'center'
	},
	wrapperBtnRegis: {
		justifyContent: 'center', 
		alignItems: 'center'
	},
	btnRegis: { 
		width: '85%' 
	}
});

export default stylesBody;