/**
 * Created by kenny on 16/3/4.
 */
'use strict';

import React,{
    Component,
    Platform,
    StyleSheet,
    Image,
} from 'react-native';

import MainPage from './mainpage';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        var {navigator} = props;
        setTimeout(()=> {
            navigator.replace({name: 'MainPage', component: MainPage})
        }, 1000);
    }

    render() {
        return (
            <Image source={require('./images/hello_page_bg.png')} style={styles.backgroundImage}/>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});