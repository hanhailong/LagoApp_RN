/**
 * Created by kenny on 16/3/7.
 */
'use strict';

import React,{
    Component,
    Platform,
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableHighlight,
} from 'react-native';

import Resume from './me/resume';

export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton(title) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'Resume',
                component: Resume,
                params: {
                    title: title,
                },
            });
        }
    }

    render() {
        let UNDERLAY_COLOR = '#E8E8E8';
        return (
            <ScrollView style={styles.container}>
                <View style={{height:150}}>
                    <Image source={require('../images/avatar_bg.png')}
                           style={styles.backgroundImage}>
                        <Image source={require('../images/avatar.png')} style={styles.avatar}/>
                        <Text style={styles.name}>Kenny</Text>
                    </Image>
                </View>
                <TouchableHighlight
                    underlayColor={UNDERLAY_COLOR}
                    onPress={this._pressButton.bind(this,'我的简历')}>
                    <View>
                        <View style={styles.icon_container}>
                            <Image source={require('../images/icon_user_resume.png')} style={styles.thumb}/>
                            <Text style={styles.icon_text}>简历</Text>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={UNDERLAY_COLOR}>
                    <View>
                        <View style={styles.icon_container}>
                            <Image source={require('../images/icon_forget_password.png')} style={styles.thumb}/>
                            <View style={{flex:2,flexDirection:'row'}}>
                                <Text style={[{flex:1},styles.icon_text]}>PLUS</Text>
                                <Text style={[{color: '#999',textAlign:'right',marginTop:8}]}>已开启</Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={UNDERLAY_COLOR} onPress={this._pressButton.bind(this, '我的收藏')}>
                    <View>
                        <View style={{padding:10, flexDirection:'row'}}>
                            <Image style={styles.thumb} source={require('../images/icon_user_collect.png')}/>
                            <Text style={styles.icon_text}>收藏</Text>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={UNDERLAY_COLOR} onPress={this._pressButton.bind(this, '意见反馈')}>
                    <View>
                        <View style={styles.icon_container}>
                            <Image style={styles.thumb} source={require('../images/icon_user_feedback.png')}/>
                            <Text style={styles.icon_text}>反馈</Text>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={UNDERLAY_COLOR} onPress={this._pressButton.bind(this, '应用设置')}>
                    <View>
                        <View style={styles.icon_container}>
                            <Image style={styles.thumb} source={require('../images/icon_user_setting.png')}/>
                            <Text style={styles.icon_text}>设置</Text>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        top: Platform.OS === 'android' ? 0 : 20,
        flex: 1,
        backgroundColor: '#EEE'
    },
    icon_container: {
        padding: 10,
        flexDirection: 'row'
    },
    icon_text: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 6
    },
    thumb: {
        width: 30,
        height: 30
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    name: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 20
    },
    separator: {
        height: 1,
        backgroundColor: '#E8E8E8'
    },
    backgroundImage: {
        alignItems: 'center',
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }
});
