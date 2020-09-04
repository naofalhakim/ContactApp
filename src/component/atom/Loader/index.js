import React from 'react';
import {StyleSheet, View, ActivityIndicator, Modal} from 'react-native';

const Loader = (props) => {
  const {loading, ...attributes} = props;

  return (
    <Modal transparent={true} animationType="fade" visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ActivityIndicator: {
    width: 20,
    height: 20,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#009666',
    opacity: 0.6,
    justifyContent: 'center',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    alignSelf: 'center',
    padding: 20,
  },
});

export default Loader;
