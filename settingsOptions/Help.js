import React,{Component} from 'react';
import {View,Text,TouchableOpacity,TextInput,Image} from 'react-native';
import {Header} from 'react-native-elements';
import * as Linking from 'expo-linking';

export default class Help extends Component{
  link=()=>{
  Linking.openURL('https://www.soperdev.com/concei')
}
render(){
return(
<View>
 <Header
   leftComponent={<TouchableOpacity
    onPress={()=>{this.props.navigation.navigate('SettingScreen')}}
   ><Text>Back</Text></TouchableOpacity>}
  centerComponent={<Text style={{fontSize:50,fontWeight:'bold',fontFamily:'dancing-script'}}>Help</Text>}
    backgroundColor = "gold"
  
    />
    
<View style={{alignItems:'center'}}>
  <Text style={{marginLeft:20,marginRight:20,fontSize:20,marginTop:50}}> Please write your issue to us we will respond as soon as possible :-</Text>
  <TouchableOpacity  style={{ width:"70%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
   borderRadius:10,
   borderColor:'black',
    backgroundColor:"gold",
    shadowColor: "grey",
    borderWidth:1,
    marginTop:20}}
  onPress={()=>{
    this.link()
  }}>
  <Text>Click Here to write</Text>
  </TouchableOpacity>
<Image source={require('../images/logo.png')} style={{height:'50%',width:'50%'}}/>
</View>

</View>
)
}
}