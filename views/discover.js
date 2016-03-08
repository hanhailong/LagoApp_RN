/**
 * Created by kenny on 16/3/7.
 */
'use strict';

import React,{
    Component,
    StyleSheet,
    ScrollView,
    ListView,
    Platform,
    Image,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';
import DiscoverCell  from './discover/discover-cell';
import DiscoverDetail from './discover/discover-detail';
import DiscoverData from './discover/discover-data';

let _renderPagination = function (index, total, context) {
    return (
        <View style={styles.pagination_wrapper}>
            <Text style={styles.count}>
                <Text>{Math.floor(index + 1)}</Text>/{total}
            </Text>
        </View>
    )
};

export default class Discover extends Component {
    state = {
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2})
            .cloneWithRows(this._genRows({}))
    };

    _selectDiscover(discover) {
        if (Platform.OS === 'ios') {
            this.props.navigator.push({
                title: discover.title,
                component: DiscoverDetail,
                passProps: {discover}
            });
        } else {
            //Android
        }
    }

    _renderRow(discoverData) {
        return (
            <DiscoverCell
                onSelect={() => {
                this._selectDiscover(discoverData);}}
                discoverData={discoverData} />
        );
    }

    _genRows():Array<string> {
        return DiscoverData;
    }

    render() {
        let resultList =
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                style={styles.listView}>
            </ListView>;


        return (
            <ScrollView style={{backgroundColor:'#EEE'}}>
                <Swiper
                    horizontal={true}
                    height={180}
                    autoplayTimeout={3}
                    autoplay={true}
                    index={0}
                    renderPagination={_renderPagination}>
                    <View style={styles.slide}>
                        <Image source={require('../images/job1.jpg')} style={styles.backgroundImage}>
                            <Text style={styles.swipeText}>2016，只愿带你发现更多</Text>
                        </Image>
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../images/job2.jpg')} style={styles.backgroundImage}>
                            <Text style={styles.swipeText}>12张图掌握2016最好玩的景点</Text>
                        </Image>
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../images/job3.jpg')} style={styles.backgroundImage}>
                            <Text style={styles.swipeText}>年轻人不能错过这5家“小而美”的酒店</Text>
                        </Image>
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../images/job4.jpg')} style={styles.backgroundImage}>
                            <Text style={styles.swipeText}>智能硬件行业的5个酒店 最值得你抱大腿</Text>
                        </Image>
                    </View>
                </Swiper>
                {resultList}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    pagination_wrapper: {
        position: 'absolute',
        bottom: 20,
        right: 10
    },
    listView: {
        marginTop: 20,
        paddingBottom: 64,
        backgroundColor: '#FFF'
    },
    slide: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    swipeText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 120,
        marginLeft: 10,
        width: null,
        lineHeight: 24,
        fontWeight: 'bold'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'transparent',
        resizeMode: 'cover'
    },
    user: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    count: {
        width: 30,
        height: 30,
        borderRadius: 15,
        textAlign: 'center',
        lineHeight: 23,
        backgroundColor: '#FFF',
        opacity: 0.9
    }
});
