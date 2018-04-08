/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ART
} from 'react-native';
const {Surface, Shape, Path} = ART;
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
    }


  render() {
    return (
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <Text onPress={()=>{this.props.navigation.navigate('Detail')}}>点击入详情</Text>
        </View>
    );
  }
}

