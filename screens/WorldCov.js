import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default class WorldCov extends Component{
render(){
  return(
     <WebView source={{ uri: 'https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61'}} style={{ marginTop: 20 }} />
  )
}
}