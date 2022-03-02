import { View, Text, Image,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'
const ImageCard = ({UserImage,UserName,props,onpress}:any) => {
  return (
    <View style={{width:'33.33%'}}>
        <TouchableOpacity onPress={onpress}>
        <Image source={UserImage} style={{height:150,width:150,alignSelf:'center'}}/>
        <Text style={{textAlign:'center'}}>{UserName}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ImageCard;