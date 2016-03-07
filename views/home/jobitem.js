/**
 * Created by kenny on 16/3/6.
 */
'use strict';

import React,{
    Component,
    Navigator,
    Image,
}from 'react-native';

export default class JobItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {jobData} = this.props;
        return (
            <TouchableHighlight
                underlayColor='#F5FCFF'
                onPress={this.props.onSelect}>
                <View style={{backgroundColor:'#FFF'}}>
                    <View style={{padding:0,flexDirection:'row'}}>
                        <Image style={styles.thumb} source={{uri:jobData.logo}}/>
                        <View style={{flex:2,paddingLeft:10}}>
                            <Text style={{fontSize:16}}>{jobData.title}</Text>
                            <Text style={{marginTop:8,marginBottom:8}}>{jobData.company}</Text>
                            <Text style={{color:'#999'}}>{jobData.info}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    thumb: {
        width: 64,
        height: 64,
    },
    separator: {
        height: 1,
        backgroundColor: '#E8E8E8',
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
    },
});
