/**
 * Created by kenny on 16/3/6.
 */
'use strict';

import React,{
    Alert,
    Component,
    Platform,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image,
    Text,
    View
} from 'react-native';

export default class Message extends Component {
    _itemPress() {
        Alert.alert( '提示', '正在开发中...', [ {text: '确定', onPress: () => console.log('OK Pressed!')} ])
    }

    render() {
        let UNDERLAY_COLOR = '#E8E8E8';
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableHighlight
                        onPress={() => this._itemPress()}
                        underlayColor={UNDERLAY_COLOR}>
                        <View>
                            <View style={styles.item_container}>
                                <Image style={styles.thumb} source={require('../images/icon_user_info_name.png')}/>
                                <View style={styles.item_text_zone}>
                                    <Text style={styles.item_caption}>谁看过我</Text>
                                    <Text style={styles.no_msg_txt}>暂无新消息</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={UNDERLAY_COLOR}
                        onPress={() => this._itemPress()}>
                        <View>
                            <View style={styles.item_container}>
                                <Image style={styles.thumb} source={require('../images/icon_user_info_mail.png')}/>
                                <View style={styles.item_text_zone}>
                                    <Text style={styles.item_caption}>简历状态通知</Text>
                                    <Text style={styles.no_msg_txt}>暂无新消息</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={UNDERLAY_COLOR}
                        onPress={() => this._itemPress()}>
                        <View>
                            <View style={styles.item_container}>
                                <Image style={styles.thumb} source={require('../images/icon_user_info_work.png')}/>
                                <View style={styles.item_text_zone}>
                                    <Text style={styles.item_caption}>职位邀请通知</Text>
                                    <Text style={styles.no_msg_txt}>暂无新消息</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: Platform.OS === 'android' ? 0 : 20,
        flex: 1,
        backgroundColor: '#EEE'
    },
    thumb: {
        width: 50,
        height: 50
    },
    item_container: {
        padding: 10,
        flexDirection: 'row'
    },
    item_text_zone: {
        flex: 2,
        paddingLeft: 10
    },
    item_caption: {
        fontSize: 16,
        marginBottom: 15
    },
    no_msg_txt: {
        fontSize: 14,
        color: '#999'
    },
    separator: {
        marginLeft: 64,
        height: 1,
        backgroundColor: '#E8E8E8'
    }
});

