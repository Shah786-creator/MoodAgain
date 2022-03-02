import { View, Text, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Forms from '../../atomic/Forms/Forms';
import Buttons from '../../atomic/Buttons/Buttons';
import HomeScreen from '../HomeScreen/HomeScreen';

const GlobalArray:any = [];


const SignUpScreen = (props:any) => {
const [name,setname] = useState('');
const [email,setemail] = useState('');
const [age,setage] = useState('');
const [pass,setpass] = useState('');
const OnclickHandler = () =>{

  const obj1 ={
    username : name,
    userage:age,
    useremail:email,
    userpass:pass,
  }
  GlobalArray.push(obj1);
  console.log(GlobalArray, 'SignUpScreen Data');
  setname('');
  setemail('');
  setage('');
  setpass('');
  props.navigation.navigate('HomeScreen', {parames:GlobalArray});
}
  return (
    <View style={Styles.root}>
      <View style={Styles.innerBox}>
        <Forms Placeholder='Username' value={name} onchangetext={(name:any)=>setname(name)}/>
        <Forms Placeholder='Email' value={email} onchangetext={(email:any)=>setemail(email)}/>
        <Forms Placeholder='age' value={age} onchangetext={(age:any)=>setage(age)} keyboardtype='numeric'/>
        <Forms Placeholder='Password' value={pass} onchangetext={(pass:any)=>setpass(pass)} secureTextEntry={true}/>
        <View style={Styles.submitnowBtn}>
          <Buttons btn="Submit Now" onpress={OnclickHandler}/>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const Styles= StyleSheet.create({
  root:{
    backgroundColor:'#082032',
    maxHeight:'100%',
    height:'100%',
    width:'100%',
    maxWidth:'100%',
    flex:1,
    alignContent:'space-between',
    alignSelf:'center',
  },
  innerBox:{
    paddingTop:100,
    paddingLeft:20,
    paddingRight:20,
  },
  submitnowBtn:{
    marginTop:100,
    width:300,
    alignSelf:'center',
  }
})