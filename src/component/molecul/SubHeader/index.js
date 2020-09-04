import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {myStyle} from '../../atom/public-style';

const SubHeader = ({subTitle, caption, img}) => {
  return (
    <View style={styles.header}>
      <Image style={styles.img} source={img} />
      <View>
        <Text style={[styles.subTitle, myStyle.fontFamilyBold]}>
          {subTitle}
        </Text>
        <Text style={[styles.caption, myStyle.fontFamilyReg]}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {marginRight: 10, width: 20, height: 20},
  header: {
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 2,
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333333',
  },
  caption: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(51, 51, 51, 0.7)',
  },
});

export default SubHeader;
