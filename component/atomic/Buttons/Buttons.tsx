import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
const Buttons = ({btn,onpress,GlobalbtnStyle}:any) => {
  return (
    <View>
    <TouchableOpacity   onPress={onpress} style={Styles.GlobalbtnStyle} >
      <Text style={{textAlign:'center',fontWeight:'bold',color:'#fff',fontSize:18,}}>{btn}</Text>
    </TouchableOpacity>
    </View>

  );
};
export default Buttons;
const Styles = StyleSheet.create({
  GlobalbtnStyle:{
    backgroundColor:'#F0A500',
    textAlign:'center',
    padding:13,
    width:290,
    alignSelf:'center',
    borderRadius:500,
    color:'white',
    marginVertical:80,
  }
})