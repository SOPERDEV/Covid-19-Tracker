import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';


export default class Welcome extends Component{
render(){
  return(
    <View style={{alignItems:'center'}}>
    <Image source={require('../images/logo.png')} style={{height:'400%',width:'100%'}}/>
    <Text style={{marginTop:20}}>Loading....</Text>
    </View>
  )
}

}