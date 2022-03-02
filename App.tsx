import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './component/screens/HomeScreen/HomeScreen';
import ProfileScreen from './component/screens/ProfileScreen/ProfileScreen';
import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import MoodsScreen from './component/screens/Moods/MoodsScreen';
import LoginScreen from './component/screens/Login/LoginScreen';
import SignUpScreen from './component/screens/WelComeScreen/SignUpScreen';
import CreateProject from './component/screens/CreateProject/CreateProject';
// import { Button, Menu, Divider, Provider } from 'react-native-paper';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


//  First Tab
const FirstStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='he' component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name='CreateProject' component={CreateProject} />
    </Stack.Navigator>
  )
}

// Second Tab
const SecondStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='MoodScreen' component={MoodsScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}


const TabStack = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen  name='FirstStack' component={FirstStack} options={{headerShown:false}}/>
      <Tab.Screen  name='SecondStack' component={SecondStack} options={{headerShown:false}}/>
    </Tab.Navigator>

  )
}



const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name='HomeScreen' component={TabStack} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
);
};
export default MyStack;
















    // <NavigationContainer>
    //   {/* <Stack.Navigator initialRouteName='LoginScreen'>
    //     <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
    //       headerTitleAlign: 'center',
    //       headerStyle: {
    //         backgroundColor: '#555'
    //       },
    //       headerShown: false,
    //       headerTintColor: '#fff'
    //     }}
    //     />
    //     <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{
    //       headerTitleAlign: 'center',
    //       headerStyle: {
    //         backgroundColor: '#555'
    //       },
    //       headerShown: false,
    //       headerTintColor: '#fff'
    //     }}
    //     />
    //     {/* welcome Header Styling End */}
    //     <Stack.Screen name="HomeScreen" component={TabStack} options={{ headerShown: false }} />
    //   </Stack.Navigator> */}
    // </NavigationContainer>
  

// const TabStack = () => {
//   return (
//     <Tab.Navigator initialRouteName='SignUpScreen'>
//       {/* <Tab.Screen name="SignUpScreen" component={SignUpScreen} /> */}

//       {/*  Feed Screen */}
//       <Tab.Screen name='Feed' component={HomeScreen} options={{
//         title: 'Feed', headerTitleAlign: 'center',
//         tabBarIcon: ({ size }) => {
//           return (
//             <Image source={require('./assets/images/home.png')} style={{ width: size, height: size }} />
//           )
//         }, headerTintColor: '#f2f2f2',
//         headerStyle: {
//           backgroundColor: '#555555',
//         }
//       }}
//       />
//       {/* Map Screen Is started */}
//       <Tab.Screen name='MapScreen' component={MapScreen} options={{
//         title: 'map', headerTitleAlign: 'center',
//         tabBarIcon: ({ size }) => {
//           return (
//             <Image source={require('./assets/images/location.png')} style={{ width: size, height: size }} />
//           )
//         }
//         , headerTintColor: '#f2f2f2',
//         headerStyle: {
//           backgroundColor: '#555555',
//         }
//       }}
//       />
//       {/* New User Screen is... */}
//       <Tab.Screen name='Add' component={AddScreen} options={{
//         title: 'Add ', headerTitleAlign: 'center',
//         tabBarIcon: ({ size }) => {
//           return (
//             <Image source={require('./assets/images/add.png')} style={{ width: size, height: size }} />
//           )
//         }
//         , headerTintColor: '#f2f2f2',
//         headerStyle: {
//           backgroundColor: '#555555',
//         }
//       }}
//       />

//       {/* New Mood Screen Is Here */}
//       <Tab.Screen name='Moods' component={MoodsScree} options={{
//         title: 'Feed', headerTitleAlign: 'center',
//         tabBarIcon: ({ size }) => {
//           return (
//             <Image source={require('./assets/images/m.png')} style={{ width: size, height: size }} />
//           )
//         }
//         , headerTintColor: '#f2f2f2',
//         headerStyle: {
//           backgroundColor: '#555555',
//         }
//       }}
//       />

//       {/* Profile Screen || Options Screen */}
//       <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
//         title: 'Profile', headerTitleAlign: 'center', headerShown:false,
//         tabBarIcon: ({ size }: any) => {
//           return (
//             <Image source={require('./assets/images/user.png')} style={{ width: size, height: size }} />
//           )
//         },
//         headerRight: () => {
//           return (
//             <TouchableOpacity>
//               {/* <Image source={require('./assets/images/home.png')} style={{ width: 20, height: 20, marginLeft: 15 }} /> */}
//               <Text style={{ color: '#fff', marginRight: 30, fontSize:18, fontWeight:'bold'}}>Log Out</Text>
//             </TouchableOpacity>
//           )
//         },
//         headerTintColor: '#f2f2f2',
//         headerStyle: {
//           backgroundColor: '#334756'
//         }
//       }} />
//     </Tab.Navigator>
//   )
// }
