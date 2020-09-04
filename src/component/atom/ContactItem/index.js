//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {myStyle} from '../public-style';
import { accountIcon } from '../../../asset';

const ContactItem = ({data, action}) => {
  return (
    <TouchableOpacity style={styles.containerItemOuter} onPress={action}>
      <View style={styles.containerItem}>
        <Image
          style={styles.imgProfile}
          source={data.photo === 'N/A' ? accountIcon : {uri: data.photo}}
        />
        <View>
          <Text style={[styles.caption, myStyle.fontFamilyBold]}>
            {data.firstName + ' ' + data.lastName + ' (' + data.age + ')'}
          </Text>
          <Text style={styles.subCaption}>Telp : 0822-9733-6755</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  caption: {
    color: 'rgba(51, 51, 51, 0.7)',
    fontSize: 15,
    lineHeight: 22,
  },
  subCaption: {
    color: 'rgba(51, 51, 51, 0.7)',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 18,
    alignSelf: 'flex-start',
  },
  outerContainer: {
    backgroundColor: '#eff2f7',
    height: '98%',
  },
  toolBar: {
    height: 60,
    backgroundColor: '#29B673',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#eff2f7',
    height: '100%',
  },
  containerItem: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    padding: 10,
    height: 76,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerItemOuter: {
    borderRadius: 4,
    backgroundColor: '#009666',
    height: 76,
    position: 'relative',
    marginVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  imgProfile: {
    borderRadius: 100,
    backgroundColor: '#009666',
    width: 60,
    height: 60,
    marginRight: 20,
  },
});

//make this component available to the app
export default ContactItem;
