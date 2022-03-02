import { View, Text, Button, Alert, Image } from 'react-native'
import React, { useState } from 'react'
// import ImagePicker from 'react-native-image-picker'
// import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import { launchCamera } from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';
const MoodsScreen = () => {

  const [imagee, setimagee] = useState()
  const Upload = () =>{

    // Alert.alert('lets see what happened')

    const options = {
      selectionLimit : 1,
      mediaType : 'photo'
    }
    ImagePicker.launchCamera(options, response => {
      console.log(response, "lets do this")
    })
  //   console.log(imagee, "kzcdkjskfkjkjn")
  // ImagePicker.openPicker({
  //   width: 300,
  //   height: 400,
  //   mediaType:'any',
  //   // multiple: true,
  //   cropping: true
  // }).then(image => {
  //   // console.log(image);
  //   setimagee(image.path)
  // });
  }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button title='Upload Image' onPress={Upload}></Button>
      <Image style={{height:400,width:400}}
      source={{uri: imagee}}
      />
  </View>
  )
}

export default MoodsScreen;