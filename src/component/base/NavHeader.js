import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';

class NavHeader extends Component {
	render() {
		return (
			<View style={{ height: 60, backgroundColor: '#4066b2'}}>
				<View style={{ flex: 1, flexDirection: 'row', padding: 5}}>
					<View style={{ width: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
						<Image source={require('../../assets/icon/camera.png')} style={{ width: '60%', height: '60%'}} />
					</View>
					<View style={{ flex: 1, marginHorizontal: 3 }}>
						<View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#e3e3e355', marginBottom: 10}}>
							<View style={{ width: 30, height: '20%', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
								<Image source={require('../../assets/icon/search.png')} style={{ width: 19, height: 19}}  />	
							</View>
							<View style={{ flex: 1 }}>
								<TextInput placeholder="Search Marketplace" style={{ fontSize: 15, color: '#fff' }} />
							</View>
						</View>
					</View>
					<View style={{ width: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
						<Image source={require('../../assets/icon/messenger.png')} style={{ width: '50%', height: '50%'}} />
					</View>
				</View>
			</View>
		);
	}
}

export default NavHeader;