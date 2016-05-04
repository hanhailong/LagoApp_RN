/**
 * Created by kenny on 16/3/4.
 */
'use strict';

import React,{
    Component,
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';

import FramePage from './framepage';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        var {navigator} = props;
        setTimeout(()=> {
            navigator.push({name: 'FramePage', component: FramePage})
        }, 1000);
    }

    render() {
        return (
            // <View style={{flex:1,justifyContent:'center'}}>
            //     <Text style={styles.text}>
            //     欢迎来到拉钩
            // </Text>
            // </View>
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
        resizeMode: 'cover'
    },
    text: {
        // flex:1,        
        // flexDirection:'column',
        // backgroundColor:'red',
        // justifyContent:'center',
        textAlign:'center',
        textAlignVertical:'center',
        // alignSelf:'center'
        fontSize:30,
    }
});