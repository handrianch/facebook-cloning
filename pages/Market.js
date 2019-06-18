import React, { Component } from 'react';
import {View, Text, ScrollView, Image, TextInput, StatusBar} from 'react-native';
import Category from '../component/market/Category';

class Market extends Component {
	render() {
		return (
			// 0 wrapper -> pake scrollview
			<ScrollView style={{ backgroundColor: '#fff' }}>
				<StatusBar barStyle="light-content" backgroundColor='#4066b2'/>
				<View style={{flex: 1, backgroundColor: '#fff'}}>
					{/* bagian top bar */}
					<View style={{ height: 60, backgroundColor: '#4066b2'}}>
						{/* 3 bagian kamera, search, messangger*/}
						<View style={{ flex: 1, flexDirection: 'row', padding: 5}}>
							<View style={{ width: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
								<Image source={require('../assets/icon/camera.png')} style={{ width: '60%', height: '60%'}} />
							</View>
							<View style={{ flex: 1, marginHorizontal: 3 }}>
								<View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#e3e3e355', marginBottom: 10}}>
									<View style={{ width: 30, height: '20%', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
										<Image source={require('../assets/icon/search.png')} style={{ width: 19, height: 19}}  />	
									</View>
									<View style={{ flex: 1 }}>
										<TextInput placeholder="Search Marketplace" style={{ fontSize: 15, color: '#fff' }} />
									</View>
								</View>
							</View>
							<View style={{ width: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
								<Image source={require('../assets/icon/messenger.png')} style={{ width: '50%', height: '50%'}} />
							</View>
						</View>
					</View>

					<View style={{ height: 55, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#bbb', flexDirection: 'row'}}>
						
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{width: '40%', height: '40%'}} source={require('../assets/icon/credit-card.png')} />
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{width: '40%', height: '40%'}} source={require('../assets/icon/brand.png')} />
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{width: '40%', height: '50%'}} source={require('../assets/icon/store.png')} />
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{width: '40%', height: '50%'}} source={require('../assets/icon/notification.png')} />
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{width: '40%', height: '40%'}} source={require('../assets/icon/menu.png')} />
						</View>
					</View>
					<View style={{ height: 70, borderBottomWidth: 2, borderBottomColor: '#e3e3e3', flex: 1 }}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true}>
							<View style={{ flex: 1, flexDirection: 'row'}}>
								<View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6, marginLeft: 20}}>
									<View style={{ backgroundColor: '#e3e3e3', borderRadius: 50, padding: 7 }}>
										<Image source={require('../assets/icon/user.png')} style={{ width: 20, height: 20 }} />
									</View>
								</View>

								<View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6}}>
									<Text style={{ backgroundColor: '#e3e3e3', borderRadius: 50, padding: 10 }}>Sell</Text>
								</View>

								<View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6}}>
									<Text style={{ backgroundColor: '#e3e3e3', borderRadius: 50, padding: 10 }}>Vechiles</Text>
								</View>

								<View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6}}>
									<Text style={{ backgroundColor: '#e3e3e3', borderRadius: 50, padding: 10 }}>Local</Text>
								</View>

								<View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6}}>
									<Text style={{ backgroundColor: '#e3e3e3', borderRadius: 50, padding: 10 }}>Rentals</Text>
								</View>

								<View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', marginHorizontal: 6}}>
									<Text style={{ backgroundColor: '#e3e3e3', borderRadius: 50, padding: 10 }}>More</Text>
								</View>
							</View>
						</ScrollView>
						</View>
					<View>
						<Category category="Today's Picks" location="Tangerang Selatan" image={[1, 2, 3]} style={{ marginBottom: 20}} />
					</View>
				</View>
			</ScrollView>
			
			// 2 menu -> 4 bagian home, watch, market, notif, menu
			// 3 tag -> 6 pake scrollview
			// 4 konten -> 
		);
	}
}

export default Market;