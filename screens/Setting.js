import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ImageBackground,Image} from 'react-native';
import {Header} from 'react-native-elements';
import {AppNavigator} from '../components/AppNavigator';
export default class Setting extends Component{
render(){
  return(
    <View style={{flex:1}}>
    
    <Header
    centerComponent={<Text style={{fontWeight:'bold',fontSize:30,color:'white',textAlign:'center'}}>Settings</Text>}
    backgroundColor='grey'
    />
    
    <View style={{flex:1,alignItems:'center',marginTop:50}}>
    
     <TouchableOpacity style={styles.button}
     onPress={()=>{this.props.navigation.navigate('HelpScreen')}}>
    <Text style={{fontSize:20}}>Help</Text>
    </TouchableOpacity>
     <TouchableOpacity style={styles.button}
     onPress={()=>{this.props.navigation.navigate('TermsOfUseScreen')}}>
    <Text style={{fontSize:20}}>Terms Of Use</Text>
    </TouchableOpacity>
     <TouchableOpacity style={styles.button}
      onPress={()=>{this.props.navigation.navigate('CreditsScreen')}}>
    <Text style={{fontSize:20}}>Credits</Text>
    </TouchableOpacity>
     <TouchableOpacity style={styles.button}
     onPress={()=>{this.props.navigation.navigate('FeedbackScreen')}}>
    <Text style={{fontSize:20}}>Feedback</Text>
    </TouchableOpacity>
    <Image source={require('../images/logo.png')} style={{height:'50%',width:'100%'}}/>
    </View>
   
    </View>
  )
}
}
const styles = StyleSheet.create({
 button:{
    width:"70%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
   borderRadius:10,
   borderColor:'black',
    backgroundColor:"gold",
    shadowColor: "grey",
    borderWidth:1,
    marginBottom:10
   
    }
})