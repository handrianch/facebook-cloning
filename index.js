import { Navigation } from 'react-native-navigation';
import Login from './src/screens/Login';
import Market from './src/screens/Market';
import ScreenRegister from './src/screens/Screen';

ScreenRegister();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
      	children : [
      		{
      			component: {
      				name: 'fb.splashscreen'
      			}
      		}
      	]
      }
    }
  });
});