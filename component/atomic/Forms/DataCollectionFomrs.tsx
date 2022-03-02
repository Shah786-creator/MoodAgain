import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const DataCollectionFomrs = ({ Placeholder, onchangetext, value }: any) => {
  return (
    <TextInput placeholder={Placeholder} onChangeText={onchangetext} value={value}
      style={Styles.formstyling} />
  );
};

export default DataCollectionFomrs;
const Styles = StyleSheet.create({
  formstyling: {
    borderColor: '#808080',
    color: '#555555',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#ffffff'
  }
})