/**
 * Created by zhangzuohua on 2018/4/8.
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
export default class Detail extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            rate:0,
        };
    }
    componentDidMount() {
        this.rate = 66;
    }
    componentWillUnmount(){
        clearInterval(this.value);
    }
    renderCell = (r,rate)=>{
        var x0 = 0;
        var y0 = 0;
        var ang = 0;
        var r1 = r - 10;
        var x00 = 0;
        var y00 = 0;
        var gArr = [];
        for (var index = 0; index < 60; index++) {
            ang = -90  +  360 / 60 * index;
            var x1 = x0 + r * Math.cos(ang * Math.PI / 180);
            var y1 = y0 + r * Math.sin(ang * Math.PI / 180);
            var x01 = x00 + r1 * Math.cos(ang * Math.PI / 180);
            var y01 = y00 + r1 * Math.sin(ang * Math.PI / 180);
            //  console.log(x01 + "," + y01 + "," +  x1 + "," + y1);
            var line = Path();
            line.moveTo(x1, y1).lineTo(x01, y01);
                var count = rate/100 * 60;
                if (index < count){
                    gArr.push(<Shape d={line} stroke="#dde0e3" strokeWidth={3} x={2*r -r1} y={2*r -r1} key={index}></Shape>);
                }else{
                    gArr.push(<Shape d={line} stroke="#0094ff" strokeWidth={3} x={2*r -r1} y={2*r -r1} key={index}></Shape>);
                }
        }
        return gArr;
    }
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Surface width={200} height={200}>
                    {this.renderCell(90,this.state.rate)}
                </Surface>
                <View style={{position:'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0}}>
                    <Text onPress={()=> { this.value = setInterval(()=>{this.setState((prevState,props)=>{return {rate:prevState.rate + 1 >= this.rate ? this.rate:prevState.rate + 1}})},10);}}>{'已进行进度' + this.state.rate + '%'}</Text>
                </View>
            </View>
        );
    }
}

