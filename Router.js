/**
 * Created by zhangzuohua on 2018/4/8.
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from './App';
import Detail from './Detail'
export default StackNavigator({
    Home: {
        screen: App,
    },
    Detail: {
        screen: Detail,
    },
},
   {
    initialRouteName: 'Home',
   }

);