import React from 'react';
import { Image,Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import WorldCov from '../screens/WorldCov';
import IndiaCov from '../screens/IndiaCov';
import Guidelines from '../screens/Guidelines';
import RegistrationVac from '../screens/RegistrationVac';
import Setting from '../screens/Setting';
import Story from '../screens/Story';




export const AppTabNavigator = createMaterialBottomTabNavigator({

  WorldCovScreen : {
    screen: WorldCov,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/globe.png")} style={{width:20, height:20}}/>,
      tabBarLabel : <Text style={{fontSize:11,color:'white'}}>World Covid</Text>,
      tabBarColor:'gold',
    }
  },
  IndiaCovScreen: {
    screen: IndiaCov,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/india.png")} style={{width:20, height:20}}/>,
      tabBarLabel : <Text style={{fontSize:11}}>Covid India</Text>,
      tabBarColor:'orange',
     
    }
  },
  Story: {
    screen: Story,
    navigationOptions :{
     tabBarIcon : <Image source={require("../images/bookimg.png")} style={{width:20, height:20}}/>,
       tabBarLabel : <Text style={{fontSize:11,color:'black'}}>Stories</Text>,
       tabBarColor:'white',
    }
  },
  RegistrationVacScreen: {
    screen: RegistrationVac,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/vaccine.png")} style={{width:20, height:20}}/>,
      tabBarLabel : <Text style={{fontSize:10}}>Take Vaccine</Text>,
      tabBarColor:'red',
    }
  },
  SettingScreen: {
    screen: Setting,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/settings.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Settings",
      tabBarColor:'#00FF00',
      
    }
  },
  
   GuidelineScreen: {
    screen: Guidelines,
    
    navigationOptions :{
     tabBarIcon : <Image source={require("../images/guidelines.jpg")} style={{width:20, height:20}}/>,
       tabBarLabel : "Guidelines",
    }
  },
},
{

}
);
