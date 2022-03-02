import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const BlockBtn = ({text}:any) => {
  return (
      <TouchableOpacity style={styles.blockbtn}>
          <Text style={{textAlign:'center',fontWeight:'bold',color:'#fff'}}>{text}</Text>
      </TouchableOpacity>
  );
};

export default BlockBtn;
const styles = StyleSheet.create({
    blockbtn:{
        backgroundColor:'#F0A500',
        width:200,
        alignSelf:'center',
        textAlign:'center',
        padding:20,
        borderRadius:20,
    }
})