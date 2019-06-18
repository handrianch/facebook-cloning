/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './pages/Login';
import Market from './pages/Market';
import Category from './component/market/Category';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Market);
// AppRegistry.registerComponent(appName, () => Login);