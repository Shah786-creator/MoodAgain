import { View, Text, TextInput, StyleSheet, Keyboard} from 'react-native';
import React from 'react';

const Forms = ({Placeholder,onchangetext,value,keyboardtype,securetextentry,text}:any) => {
  return (
    <View>
      <Text style={Styles.textStyle}>{text}</Text>
    <TextInput placeholder={Placeholder} onChangeText={onchangetext}  value={value}
    placeholderTextColor = "#334756" style={Styles.formstyling}  keyboardType={keyboardtype} secureTextEntry={securetextentry}/>
    </View>
  );
};

export default Forms;
const Styles = StyleSheet.create({
  formstyling:{
    borderRadius:10,
    borderWidth: 1,
    padding:10,
    color:'#202020',
    borderColor:'#404040',
    marginVertical:10,
    backgroundColor:'#00000009'
  },
  textStyle:{
    fontWeight:"bold",
    marginLeft:5,
  }
})