import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TitleNotification extends React.PureComponent {
	render() {
		return (
			<View style={styles.wrapperTextHeader}>
				<Text style={styles.textTitle}>{this.props.title}</Text>
			</View>
		)
	}
}

export default TitleNotification;

const styles = StyleSheet.create({
	wrapperTextHeader: { flex: 1, backgroundColor: '#fff', flexDirection: 'row', padding: 10, marginLeft: 5},
	textTitle: {fontWeight: 'bold', fontSize: 13, color: '#000', marginRight: 5, textTransform: 'capitalize'}
})