/**
 * Created by kenny on 16/3/8.
 */
'use strict';
import React,{
    Component,
    StyleSheet,
    View,
    Platform,
    TouchableHighlight,
    Text,
    Image,
} from 'react-native';

export default class DiscoverCell extends Component {
    render() {
        let discoverData = this.props.discoverData;
        let cellView;
        if (discoverData.fullScreen) {
            cellView = <View style={{padding:10}}>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.discoverTitle}>{discoverData.title}</Text>
                        <Text style={{fontSize:12,color: '#999', textAlign:'right'}}>{discoverData.date}</Text>
                    </View>
                    <View style={{height:150,marginTop:8}}>
                        <Image style={styles.fullScreenImage} source={{uri: discoverData.logo}}/>
                    </View>
                    <Text style={{marginTop:7,marginBottom:12,lineHeight:18}}>{discoverData.infoTitle}</Text>
                    <Text style={styles.dateInfo}>{discoverData.info}</Text>
                </View>
            </View>
        } else {
            cellView = <View style={{padding:10,flexDirection:'row'}}>
                <Image style={styles.thumb} source={{uri: discoverData.logo}}/>
                <View style={{paddingLeft:10,flex:1}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.discoverTitle}>{discoverData.title}</Text>
                        <Text style={{flex:1,fontSize:12,textAlign:'right'}}>{discoverData.title}</Text>
                    </View>
                    <Text style={{marginTop:7,marginBottom:8,height:38,lineHeight:18}}>{discoverData.infoTitle}</Text>
                    <Text style={styles.dateInfo}>{discoverData.info}</Text>
                </View>
            </View>
        }

        return (
            <TouchableHighlight
                onPress={this.props.onSelect}
                underlayColor='#F5FCFF'>
                <View>
                    {cellView}
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        )
    };

}

const styles = StyleSheet.create({
    discoverTitle: {
        flex: 1, fontSize: 12, color: '#999'
    },
    dateInfo: {
        fontSize: 12, color: '#999'
    },
    separator: {
        height: 1,
        backgroundColor: '#E8E8E8'
    },
    thumb: {
        width: 120,
        height: 80
    },
    fullScreenImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: Platform.OS === 'android' ? null : 'transparent',
        resizeMode: 'cover'
    },
    companyTag: {
        color: '#999',
        fontSize: 12,
        marginLeft: 5,
        marginRight: 5,
        height: 20,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#E8E8E8'
    }
});