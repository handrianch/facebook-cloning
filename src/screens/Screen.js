import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Home from './Home';
import Groups from './Groups';
import FriendRequests from './FriendRequests';
import Notification from './Notification';
import More from './More';
import Market from './Market';
import SplashScreen from './SplashScreen';
import CreateStatus from './CreateStatus';
import Chat from './Chat';

export default function registerScreens() {
	Navigation.registerComponent('fb.login', () => Login);
	Navigation.registerComponent('fb.home', () => Home);
	Navigation.registerComponent('fb.friendRequest', () => FriendRequests);
	Navigation.registerComponent('fb.notification', () => Notification);
	Navigation.registerComponent('fb.more', () => More);
	Navigation.registerComponent('fb.groups', () => Groups);
	Navigation.registerComponent('fb.market', () => Market);
	Navigation.registerComponent('fb.splashscreen', () => SplashScreen);
	Navigation.registerComponent('fb.createStatus', () => CreateStatus);
	Navigation.registerComponent('chat', () => Chat);
}

Navigation.setDefaultOptions({
	topBar: {
		visible: false
	}
})