/**
 * Created by kenny on 16/3/5.
 */
'use strict';

import React,{
    AppRegistry,
    Component,
    StyleSheet,
    ListView,
    Image,
    Text,
    View
} from 'react-native';

class SearchBar extends Component {
    render() {
        return (<View style={styles.searchBar}>
            <Text style={{color:'#FFF',fontSize:20}}>拉勾</Text>
            <View style={styles.searchInput}>
                <Image style={{width:15,height:15,marginRight:8}}
                       source={require('../images/icon_search.png')}/>
                <Text style={{color:'#14BA91',fontSize:13}}>输入职位或公司名</Text>
            </View>
        </View>)
    }
}

export default class Home extends Component {
    //构造函数可以没有参数
    constructor() {
        super();
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2})
                .cloneWithRows(this._genRows({}))
        };
        // 必须绑定，否则onPress报错
        this._renderRow = this._renderRow.bind(this);
    }

    _selectJob(job:Object) {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>home home home home home home home home home home home </Text>
                <SearchBar />
            </View>
        );
    }

    _genRows():Array<string> {
        return ['a', 'b', 'c'];
        //return JobList;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#EEE',
        paddingBottom: 48,
    },
    searchBar: {
        backgroundColor: '#11a984',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        borderRadius: 15,
        backgroundColor: '#0f9574',
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },

});