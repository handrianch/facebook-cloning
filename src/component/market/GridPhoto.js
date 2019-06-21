import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Photo from './Photo';

class GridPhoto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collection: [],
		}
	}

	renderPhoto = () => {
		return this.props.image.map(data => {
			return (<Photo />)
		})
	}

	render() {
		return (
			<View>
				<View style={[{ flex: 1, flexDirection: 'row', marginTop: 6, flexWrap: 'wrap'}]}>
					<Photo />
					<Photo />
					<Photo />
				</View>
			</View>
		);
	}
}

export default GridPhoto;