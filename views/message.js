/**
 * Created by kenny on 16/3/6.
 */
'use strict';

import React,{
    AlertIOS,
    Component,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image,
    Text,
    View
} from 'react-native';

let TYPE_MESSAGE_STATUS1 = 1;
let TYPE_MESSAGE_STATUS2 = 2;
let TYPE_MESSAGE_STATUS3 = 3;

export default class Message extends Component {
    _itemPress() {
        AlertIOS.alert('coming soon', null, [{text: 'OK', onPress: (text)=>console.log('确定'), type: 'default'}])
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    thumb: {
        width: 50,
        height: 50,
    },
    separator: {
        height: 1,
        backgroundColor: '#E8E8E8'
    },
})

