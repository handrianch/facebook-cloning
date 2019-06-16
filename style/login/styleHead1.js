import {StyleSheet} from 'react-native';

const stylesHead1 = StyleSheet.create({
	head: {
		height: 260,
	},
	bannerImage: {
		height: 230,
		width: '100%',
	},
	bannerBahasa: {
		flex: 1,
		paddingVertical: 5,
		alignItems: 'center',
	},
	textBahasa: { 
		marginHorizontal: 7,
		color: '#3B5998',
		paddingHorizontal: 4,
		paddingBottom: 2
	},
	textBahasaTitik : {
		fontWeight: 'bold', 
		fontSize: 20, 
		position: 'absolute',
	},
	morePressed: {
		backgroundColor: '#dfe4ea', 
		borderRadius: 8,
	}
});

export default stylesHead1;