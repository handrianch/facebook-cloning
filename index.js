/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './pages/Login';
import Market from './pages/Market';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Market);
