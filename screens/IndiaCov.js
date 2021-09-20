import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default class IndiaCov extends Component{
render(){
  return(
    <WebView source={{ uri: 'https://www.covid19india.org/'}} style={{ marginTop: 20 }} />
  )
}
}