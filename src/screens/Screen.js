import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Market from './Market';
import Home from './Home';
import DetailPhoto from './DetailPhoto';

export default function registerScreens() {
	Navigation.registerComponent('fb.login', () => Login);
	Navigation.registerComponent('fb.market', () => Market);
	Navigation.registerComponent('fb.home', () => Home);
	Navigation.registerComponent('fb.detailPhoto', () => DetailPhoto);
}

Navigation.setDefaultOptions({
	topBar: {
		visible: false
	}
})