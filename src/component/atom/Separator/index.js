//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';

// create a component
const Separator = () => {
  return <View style={styles.container}></View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 3,
    backgroundColor: '#0A0A0A',
  },
});

//make this component available to the app
export default Separator;
