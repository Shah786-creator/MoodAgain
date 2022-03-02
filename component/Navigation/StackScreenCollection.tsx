import { View, Text, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Unblock from '../screens/Unblock/Unblock';
const StackScreenCollection = () => {
 
const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator>
      <Tab.Screen name='ProfileScreen' component={ProfileScreen}  options={{headerShown:false, headerRight:()=>{
        return(
          <View>
            <Text style={{fontSize:40}}>Hello</Text>
          </View>
        )
      }}}/>
        <Tab.Screen name='UnblockScreen' component={Unblock} />
      </Tab.Navigator>
  );
};

export default StackScreenCollection;
