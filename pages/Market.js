import React, { Component } from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

class Market extends Component {
	render() {
		return (
			// 0 wrapper -> pake scrollview
			<ScrollView style={{ backgroundColor: '#fff' }}>
				<View style={{flex: 1, backgroundColor: '#fff'}}>
					{/* bagian top bar */}
					<View style={{ height: 55, backgroundColor: '#3B5AA8' }}>
						{/* 3 bagian kamera, search, messangger*/}
						<View>
							<View>
								<Image source={require('../assets/icon/camera.svg')} />
							</View>
							<View></View>
							<View></View>
						</View>
					</View>
					<View style={{ height: 55, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#bbb'}}></View>
					<View style={{ height: 70, borderBottomWidth: 2, borderBottomColor: '#e3e3e3' }}></View>
					<View></View>
				</View>
			</ScrollView>
			
			// 2 menu -> 4 bagian home, watch, market, notif, menu
			// 3 tag -> 6 pake scrollview
			// 4 konten -> 
		);
	}
}

export default Market;