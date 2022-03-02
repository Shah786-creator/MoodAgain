import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import React from 'react';
import BlockBtn from '../../atomic/Buttons/BlockBtn'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfileScreen = (props:any) => {


  async function Logout (){


    
    const Token =  await AsyncStorage.getItem('TokenStoree')
    let LogoutScreen = await fetch('http://192.168.0.101:8000/api/logout',
    {  
    method:'POST',
      headers:{
        "content-type" : "application/json",
        "Accept":  'application/json',
        "Authorization" : "Bearer " + Token,
      },    
    });
    const myData = await LogoutScreen.json()
    console.log(myData)
    if(myData.result === 'success')
    {
      props.navigation.navigate('LoginScreen');
    }
    else{
      Alert.alert('Unable to logout')
    }
  }
  return (
    <View>
      <View style={{padding:15, flexDirection:'row',width:'100%',height:60,backgroundColor:'#555'}}>
        <Text style={{color:'#fff',width:'50%'}}>Profile</Text>
        <TouchableOpacity onPress={Logout}>
          <Text style={{color:'#fff',paddingLeft:120,alignSelf:'center'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  ImageStyle:{
    width:300,
    alignContent:'center',
    alignSelf:'center',
    height:300,
  }
})