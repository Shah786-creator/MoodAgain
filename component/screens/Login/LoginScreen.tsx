import { View, Text, Button, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Forms from '../../atomic/Forms/Forms'
import Buttons from '../../atomic/Buttons/Buttons'
import SignUpScreen from '../WelComeScreen/SignUpScreen'
import HomeScreen from '../HomeScreen/HomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { rootURL, endPoint } from '../../services/endpoint'
// import { login } from '../../services/apis'
import { BASEURL, endPoint, HEADER } from '../../services/Services'
const LoginScreen = (props: any) => {
    // const
    const [collection, setcollection] = useState<any>({
        'email': '',
        'password': '',
    })

    const OnClickSubmit = () => {
        const url = BASEURL + endPoint.Login
        fetch(url, {
            method: 'POST',
            headers: HEADER,
            body: JSON.stringify(
                {
                    email: collection.email,
                    password: collection.password
                })
        }
        )
            .then((response) => response.json())
            .then((json) => {
              if(json.token){
                 AsyncStorage.setItem('createdbyID',JSON.stringify(json.created_by))
                  props.navigation.navigate(HomeScreen);
              }
              else{
                  props.navigation.navigate(SignUpScreen);
              }
            })
    }
    return (
        <ScrollView>
            <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
                {/* User Login Image */}
                <Image source={require('../../../assets/images/user.png')} style={{ height: 200, width: 200, alignSelf: 'center' }} />
                {/* Login Forms */}
                {/* (e:string)=>setcollection ({...collection, email:e}) 
        (e:any)=>setcollection({...collection, password:e})
        */}
                <Forms Placeholder="Email" onchangetext={(e: string) => setcollection({ ...collection, email: e })} />
                <Forms Placeholder="Password" onchangetext={(e: any) => setcollection({ ...collection, password: e })} />
                <Buttons btn="Login Now" onpress={OnClickSubmit} />
                {/* Have an Account Statement */}
                <Text style={{ textAlign: 'center', flexDirection: 'row' }}>Don't have an Account?
                    <TouchableOpacity onPress={() => props.navigation.navigate(SignUpScreen)}>
                        <Text style={{ color: '#F0A500', fontWeight: 'bold' }}> Sign Up </Text>
                    </TouchableOpacity>
                </Text>
                {/* have an Account Statement Ends */}
            </View>
        </ScrollView>
    )
}
export default LoginScreen