/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    Navigator,
} from 'react-native';

import SplashScreen from './splash';
import MainPage from './mainpage';

class LagouApp extends Component {
    render() {
        var defaultName = 'Splash';
        var defaultComponent = SplashScreen;

        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        );
    }
}

AppRegistry.registerComponent('LagouApp', () => LagouApp);
