/**
 * Created by kenny on 16/3/7.
 */
'use strict';

import React,{
    Component,
    Platform,
    StyleSheet,
    ScrollView,
    ListView,
    Image,
    Text,
    View
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import DiscoverCell  from './discover/discover-cell';
import DiscoverDetail from './discover/discover-detail';
import DiscoverData from './discover/discover-data';

let BANNER_IMGS = [
    require('../images/job1.jpg'),
    require('../images/job2.jpg'),
    require('../images/job3.jpg'),
    require('../images/job4.jpg')
];

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
    constructor(props) {
        super(props);
        this.state = {
            listSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2})
                .cloneWithRows(this._genRows({})),
            pagerSource: new ViewPager.DataSource({pageHasChanged: (p1, p2)=>p1 !== p2})
                .cloneWithPages(BANNER_IMGS)
        };
    }

    _selectDiscover(discover) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                title: discover.title,
                component: DiscoverDetail,
                passProps: {discover}
            });
        }
    }

    _renderRow(discoverData) {
        return (
            <DiscoverCell onSelect={() => this._selectDiscover(discoverData)} discoverData={discoverData}/>
        );
    }

    _genRows():Array<string> {
        return DiscoverData;
    }

    _renderPage(data){
        return(<Image source={data} style={styles.page} />)
    }

    render() {
        let resultList =
            <ListView
                dataSource={this.state.listSource}
                renderRow={this._renderRow}
                style={styles.listView}>
            </ListView>;

        return (
            <ScrollView style={styles.container}>
                <ViewPager
                    style={{height:130}}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}
                    dataSource={this.state.pagerSource}/>
                {resultList}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: Platform.OS === 'android' ? 0 : 20,
        flex: 1,
        backgroundColor: '#EEE'
    },
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
