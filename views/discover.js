/**
 * Created by kenny on 16/3/7.
 */
'use strict';

import Swiper from 'react-native-swiper';

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

let _renderPagination = function (index:number, total:number, context) {
    return (
        <Text>111</Text>
    )
};

export default class Discover extends Component {
    state = {
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2})
            .cloneWithRows(this._genRows({}))
    };

    _genRows():Array<string> {
        return ['1', '2', '3'];
    }

    _renderRow(discoverData, sectionID, rowID) {
        return (
            <View />
        );
    }

    _selectDiscover(discover) {
        if (Platform.OS === 'ios') {
            this.props.navigator.push({
                /*title: discover.title,
                 component:DiscoverContent,
                 passProps:{discover}*/
            });
        } else {

        }
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

                <View style={styles.slide}>
                    <Image source={require('../images/job1.jpg')} style={styles.backgroundImage}>
                        <Text style={styles.swipeText}>2016，只愿带你发现更多</Text>
                    </Image>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../images/job2.jpg')} style={styles.backgroundImage}>
                        <Text style={styles.swipeText}>12张图掌握2016互联网职场薪资</Text>
                    </Image>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../images/job3.jpg')} style={styles.backgroundImage}>
                        <Text style={styles.swipeText}>年轻人不能错过这5家“小而美”的公司</Text>
                    </Image>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../images/job4.jpg')} style={styles.backgroundImage}>
                        <Text style={styles.swipeText}>智能硬件行业的5个雇主 最值得你抱大腿</Text>
                    </Image>
                </View>
                {resultList}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        marginTop: 20,
        backgroundColor: '#FFF',
        paddingBottom: 64
    },
    wrapper: {},
    slide: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    swipeText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 120,
        marginLeft: 10,
        width: null,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'transparent',
        resizeMode: 'cover',
    },
    user: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    count: {
        width: 30,
        height: 30,
        borderRadius: 15,
        textAlign: 'center',
        lineHeight: 23,
        backgroundColor: '#FFF',
        opacity: 0.9,
    },
});
