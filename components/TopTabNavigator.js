import React,{Component} from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'; 
import WorldCov from '../screens/WorldCov';
import IndiaCov from '../screens/IndiaCov';
import Guidelines from '../screens/Guidelines';
import RegistrationVac from '../screens/RegistrationVac';
import Setting from '../screens/Setting';

export const TopTabNavigator = createMaterialTopTabNavigator({
  WorldCovScreen : {
    screen: WorldCov,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/globe.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "World Covid",
    }
  },
  IndiaCovScreen: {
    screen: IndiaCov,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/india.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Covid-19 India",
    }
  },
  GuidelinesScreen: {
    screen: Guidelines,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/guidelines.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Guidelines",
    }
  },
  RegistrationVacScreen: {
    screen: RegistrationVac,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/vaccine.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Take Vaccine",
    }
  },
  SettingScreen: {
    screen: Setting,
    navigationOptions :{
      tabBarIcon : <Image source={require("../images/settings.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Settings",
    }
  }

});
