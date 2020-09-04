import ImagePicker from 'react-native-image-picker';

const chooseImage = (getPhoto) => {
  let options = {
    title: 'Select Image',
    customButtons: [
      {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    // console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = response.uri;

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      // alert(JSON.stringify(response));
      // console.log('response', JSON.stringify(response));
      getPhoto(source);
      //   this.setState({
      //     filePath: response,
      //     fileData: response.data,
      //     fileUri: response.uri,
      //   });
    }
  });
};

export {chooseImage};
