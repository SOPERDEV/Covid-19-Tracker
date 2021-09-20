import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';

export default class Feedback extends Component{
render(){
return(
<View>
 <Header
   leftComponent={<TouchableOpacity 
    onPress={()=>{this.props.navigation.navigate('SettingScreen')}}
   ><Text>Back</Text></TouchableOpacity>}
  centerComponent={<Text style={{fontSize:40,fontWeight:'bold',fontFamily:'dancing-script'}}>Feedback</Text>}
    backgroundColor = "gold"
  
    />
<View style={{alignItems:'center'}}>
<Image source={require('../images/logo.png')} style={{height:'50%',width:'50%'}}/>
</View>
</View>
)
}
}