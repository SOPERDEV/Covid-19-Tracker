import React,{Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Story extends Component{
render(){
  return(
      <WebView source={{ uri: 'https://covapp.blogspot.com/2021/04/stories.html'}} style={{ marginTop: 20 }} />
  )
}
}