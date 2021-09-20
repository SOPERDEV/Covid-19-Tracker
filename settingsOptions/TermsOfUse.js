import React,{Component} from 'react';
import {View,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import {Header} from 'react-native-elements';
import * as Linking from 'expo-linking';
export default class TermsOfUse extends Component{
  link=()=>{
  Linking.openURL('https://www.privacypolicies.com/live/e70cc1e7-6fca-4eab-935c-50d699f74128')
}
render(){
return(
  
<View>
 <Header
   leftComponent={<TouchableOpacity
    onPress={()=>{this.props.navigation.navigate('SettingScreen')}}
   ><Text>Back</Text></TouchableOpacity>}
  centerComponent={<Text style={{fontSize:30,fontWeight:'bold',fontFamily:'dancing-script'}}>Terms Of Use</Text>}
    backgroundColor = "gold"
  
    />
    
<View style={{alignItems:'center'}}>

<TouchableOpacity onPress={()=>{this.link()}}
style={{ width:"70%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
   borderRadius:10,
   borderColor:'black',
    backgroundColor:"gold",
    shadowColor: "grey",
    borderWidth:1,
    marginTop:50}}

><Text>Open Privacy Policy</Text></TouchableOpacity>

<Image source={require('../images/logo.png')} style={{height:'50%',width:'50%'}}/>

</View>

</View>

)
}
}