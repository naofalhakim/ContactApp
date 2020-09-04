//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {myStyle} from '../../atom/public-style';

// create a component
const Header = ({title}) => {
  return (
    <View style={styles.toolBar}>
      <Text style={[styles.titleText, myStyle.fontFamilyMed]}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  titleText: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 24,
  },
  toolBar: {
    height: 60,
    backgroundColor: '#29B673',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default Header;
