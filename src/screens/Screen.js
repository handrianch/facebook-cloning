import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Market from './Market';

export default function registerScreens() {
	Navigation.registerComponent('fb.login', () => Login);
	Navigation.registerComponent('fb.market', () => Market);
}

Navigation.setDefaultOptions({
	topBar: {
		visible: false
	}
})