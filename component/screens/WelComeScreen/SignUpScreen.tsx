import { View, Text, Alert, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Forms from '../../atomic/Forms/Forms';
import Buttons from '../../atomic/Buttons/Buttons';
import HomeScreen from '../HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import LoginScreen from '../Login/LoginScreen';

// import {} from 'react-native-gesture-handler';
// const GlobalArray:any = [];

const SignUpScreen = (props:any) => {

  // const [name,setname] = useState('');
// const [email,setemail] = useState('');
// const [age,setage] = useState('');
// const [pass,setpass] = useState('');
// const OnclickHandler = () =>{

//   const obj1 ={
//     username : name,
//     userage:age,
//     useremail:email,
//     userpass:pass,
//   }
//   GlobalArray.push(obj1);
//   console.log(GlobalArray, 'SignUpScreen Data');
//   setname('');
//   setemail('');
//   setage('');
//   setpass('');
//   props.navigation.navigate('HomeScreen', {parames:GlobalArray});
// }

  const [SignUpData, setSignUpData] = useState({
    'user_name' : '',
    'email': '',
    'password' : '',
  })

  async function SubmiteData() {
    let DataSubmite = await fetch('http://192.168.0.101:8000/api/signup',{
      method:'POST',
      headers:{
        "content-type" : "application/json",
        "Accept":  'application/json'
      },
      body:JSON.stringify(SignUpData)
    });
      
    DataSubmite = await DataSubmite.json();
    console.log(DataSubmite, 'Data Submitted Succesfully')
  }
  console.log(SignUpData, 'This is User SignIn Data')










  return (
    <ScrollView>
    <View style={Styles.root}>
      <Text style={Styles.TopText}>Create an Account</Text>
      <View style={Styles.innerBox}>



      <Forms  text='Full Name' onchangetext={(e:string)=>setSignUpData ( {...SignUpData, user_name:e} ) }/>
      <Forms  text='Email'  onchangetext={ (e:string)=> setSignUpData( {...SignUpData,email:e} ) }/>
      <Forms  text='Password' onchangetext={ (e:any)=>setSignUpData( {...SignUpData, password:e} ) } />


      {/* onpress={()=>props.navigation.navigate(HomeScreen)} */}
      <Buttons btn='Next' onpress={SubmiteData}></Buttons>
      </View>
      <Text style={{textAlign:'center', flexDirection:'row'}}>Have an Account
        <TouchableOpacity onPress={()=>props.navigation.navigate(LoginScreen)}>
            <Text style={{color:'#F0A500',fontWeight:'bold'}}> Login Now </Text>
        </TouchableOpacity>
        </Text>
    </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const Styles= StyleSheet.create({
  TopText:{
    fontSize:25,
    textAlign:'center',
    marginVertical:50,
    fontWeight:'900',
    color:'#000',
    fontFamily:'san-serif',
  },
  root:{
    // margin:20,
    backgroundColor:'#f2f2f2', 
    maxHeight:'100%', 
    height:'100%', 
    width:'100%', 
    maxWidth:'100%', 
    flex:1,
    alignContent:'space-between',
    alignSelf:'center',
  },
  innerBox:{
    margin:20,
    marginVertical:20,
  }
})





































// import { View, Text, Button, Alert, StyleSheet, Image} from 'react-native';
// import React from 'react';
// import HomeScreen from '../HomeScreen/HomeScreen';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Buttons from '../../atomic/Buttons/Buttons';
// import SignUpScreen from '../SignUpScreen/SignUpScreen';


// const WelcomeScreen = (props:any) => {
//   return (
// <>
//     <View style={styles.root}>
//       <Image source={require('../../../assets/images/welcome.png')} style={styles.imagestyle}/>
//       <View style={styles.btnStyle}>
//       <Buttons btn='Get Started' onpress={()=>props.navigation.navigate('HomeScreen')}></Buttons>
//       </View>
//     </View>
//      </>
//   );
// };

// export default WelcomeScreen;


// //  Welcome screen comments goes here
// const styles = StyleSheet.create({
//   root:{
//     backgroundColor:'#082032',
//     maxHeight:'100%',
//     height:'100%',
//     width:'100%',
//     maxWidth:'100%',
//     flex:1,
//     alignContent:'space-between',
//     alignSelf:'center',
//   },
//   imagestyle:{
//     top:'15%',
//     width:'100%',
//     height:'50%',
//   },
//   btnStyle:{
//     marginTop:200,
//     padding:50,
//   }
// })