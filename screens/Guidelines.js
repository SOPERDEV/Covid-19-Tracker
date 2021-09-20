import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Guidelines extends Component{
render(){
  return(
    <WebView source={{ uri: 'https://ncdc.gov.in/index1.php?lang=1&level=1&sublinkid=703&lid=550' }} style={{ marginTop: 20 }} />
  )
}
}