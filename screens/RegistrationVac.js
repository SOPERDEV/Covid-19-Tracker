import React,{Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
export default class RegistrationVac extends Component{
render(){
  return(
      <WebView source={{ uri: 'https://www.cowin.gov.in/home'}} style={{ marginTop: 20 }} />
  )
}
}