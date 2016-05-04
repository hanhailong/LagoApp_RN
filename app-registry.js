/**
 * Created by kenny on 16/3/28.
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    Navigator,
} from 'react-native';

import SplashScreen from './splash';

class LagouApp extends Component {
    render() {
        var defaultName = 'Splash';
        var defaultComponent = SplashScreen;

        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
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
