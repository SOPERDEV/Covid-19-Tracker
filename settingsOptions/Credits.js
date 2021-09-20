import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';

export default class Credits extends Component{
render(){
return(
<View>
 <Header
 style={{height:40}}
   leftComponent={<TouchableOpacity
    onPress={()=>{this.props.navigation.navigate('SettingScreen')}}
   ><Text style={{textAlign:'center'}}>Back</Text></TouchableOpacity>}
  centerComponent={<Text style={{fontSize:50,fontWeight:'bold',fontFamily:'dancing-script'}}>Credits</Text>}
    backgroundColor = "gold"
  />
<View style={{alignItems:'center'}}>
<Text style={{fontSize:20}}>
 *All the websites that are redirected by the app are government authorized and handled by the government.
</Text>
<Text style={{flex:1,marginTop:10,fontSize:20}}>
 *Data provided by the website are correct and refreshed daily.
</Text>

<Image source={require('../images/logo.png')} style={{height:'50%',width:'50%'}}/>
</View>
</View>
)
}
}