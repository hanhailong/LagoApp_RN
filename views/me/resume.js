/**
 * Created by kenny on 16/3/7.
 */
'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {title: null};
    }

    componentWillMount() {
        if (React.Platform.OS === 'android') {
            React.BackAndroid.addEventListener('hardwareBackPress', ()=>this._pressButton());
        }
    }

    componentWillUnmount() {
        if (React.Platform.OS === 'android') {
            React.BackAndroid.removeEventListener('hardwareBackPress', ()=>this._pressButton());
        }
    }

    _pressButton() {
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log(routers);
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.caption_wrapper}>
                    <TouchableOpacity onPress={() => this._pressButton()}>
                        <Image source={require('../../images/icon_back.png')} style={styles.back_img}/>
                    </TouchableOpacity>
                    <Text style={styles.caption_text}>{this.props.title}</Text>
                </View>
                <View style={{padding:15}}>
                    <Text>{this.props.title} 等待添加</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    caption_wrapper: {
        padding: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    caption_text: {
        fontSize: 17,
        flex: 1,
        textAlign: 'center',
        marginRight: 30
    },
    back_img: {
        width: 30,
        height: 30
    }
});