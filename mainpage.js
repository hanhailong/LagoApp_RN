/**
 * Created by kenny on 16/3/4.
 */
'use strict';

import React,{
    Component,
    View,
    StyleSheet,
    Image,
    Text,
    TabBarIOS,
    Navigator,
    NavigatorIOS,
} from 'react-native';

import RouteHome from './routehome';
import Message from  './views/message';
import Discover from  './views/discover';
import RouteMe from './routeme';

let HOME_TAB = 'homeTab';
let MESSAGE_TAB = 'messageTab';
let DISCOVER_TAB = 'discoverTab';
let ME_TAB = 'meTab';

export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: ME_TAB,
            notifCount: 1,
            presses: 0,
        };
    };

    _setTab(tabId) {
        this.setState({selectedTab: tabId})
        console.log(tabId);
    }

    _addNavigator(component, title) {
        let data = null;
        if (title === '首页') {
            data = this.state.data;
        }
        return (<NavigatorIOS
            style={{flex:1}}
            barTintColor='#FFF'
            titleTextColor="#666"
            tintColor="#666"
            translucent={false}
            initialRoute={{component:component,title:title,passProps:{data:data}}}
        />);
    };

    _renderContent(pageName:string, num:number) {
        let renderView;
        switch (pageName) {
            case HOME_TAB:
                renderView = <RouteHome />;
                break;
            case MESSAGE_TAB:
                renderView = <Message />;
                break;
            case DISCOVER_TAB:
                renderView = <Discover />;
                break;
            case ME_TAB:
                renderView = <RouteMe />;
                break;
            default:
                break;
        }

        return (<View style={styles.pageView}>{renderView}</View>)
    };

    render() {
        return (
            <View style={styles.container}>
                <TabBarIOS
                    tintColor='#11a984'
                    barTintColor='#FFF'>
                    <TabBarIOS.Item
                        title="首页"
                        icon={require('./images/icon_home_nor.png')}
                        selected={this.state.selectedTab === HOME_TAB}
                        onPress={() => this._setTab(HOME_TAB)}>
                        {this._renderContent(HOME_TAB)}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="消息"
                        icon={require('./images/icon_message_nor.png')}
                        badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                        selected={this.state.selectedTab === MESSAGE_TAB}
                        onPress={() => this._setTab(MESSAGE_TAB)}>
                        {this._addNavigator(Message, '消息列表')}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="发现"
                        icon={require('./images/icon_find_nor.png')}
                        selected={this.state.selectedTab===DISCOVER_TAB}
                        onPress={()=>this._setTab(DISCOVER_TAB)}>
                        {this._addNavigator(Discover, '发现')}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title='我的'
                        selected={this.state.selectedTab===ME_TAB}
                        onPress={()=>this._setTab(ME_TAB)}
                        icon={require('./images/icon_user_nor.png')}>
                        {this._renderContent(ME_TAB)}
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageView: {
        flex: 1,
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        margin: 50,
    }
});