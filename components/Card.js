import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:'white',
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    borderRadius:5,
    shadowColor: 'black',
    shadowOffset: { x: 0, y: 1 },
    shadowOpacity: 0.2,
  },
});
