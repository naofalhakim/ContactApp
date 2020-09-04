//import liraries
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {plusIcon} from '../../../asset';

// create a component
const FAB = ({action}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Image style={styles.img} source={plusIcon} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#42a5f5',
    borderRadius: 80,
    padding: 20,
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});

//make this component available to the app
export default FAB;
