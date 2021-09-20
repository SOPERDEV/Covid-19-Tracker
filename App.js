import React,{Component} from 'react';
import {View} from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Welcome from './screens/Welcome' 
import { AppTabNavigator } from './components/AppTabNavigator';
import {AppNavigator} from './components/AppNavigator';


export default class App extends Component{
  constructor(){
super();
this.state={counter:0}

}
componentDidMount(){
setInterval(this.IncreaseCounter,1000)
console.log('Hello');
}
IncreaseCounter=()=>{
this.setState({counter:this.state.counter+1})
}
render(){
if(this.state.counter < 5){
  return(
    <View style={{flex:1,marginTop:'50%'}}>
<Welcome/>
</View>
  )
} else{
return(
    <View style={{flex:1}}>
   
    <AppContainer/>
    </View>
  )
}
}
}
const switchNavigator = createSwitchNavigator({
 Tab: {screen:AppTabNavigator},
  Switch:{screen:AppNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
