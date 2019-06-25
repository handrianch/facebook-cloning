import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import TagItem from '../small/TagItem';

class Tag extends Component {
	tagItem = [
		"Sell", "Vechiles", "Local", "Rentals", "More"
	];
	
	render() {
		return (
			<View style={styles.wrapper}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true}>
					<View style={{ flex: 1, flexDirection: 'row'}}>
						<View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6, marginLeft: 20}}>
							<View style={{ backgroundColor: '#e3e3e3', borderRadius: 50, padding: 7 }}>
								<Image source={require('../../assets/icon/user.png')} style={{ width: 20, height: 20 }} />
							</View>
						</View>

						{
							this.tagItem.map(item => (<TagItem text={item} />))
						}
						
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default Tag;

const styles = StyleSheet.create({
	wrapper: { height: 70, borderBottomWidth: 2, borderBottomColor: '#e3e3e3', flex: 1 }
})