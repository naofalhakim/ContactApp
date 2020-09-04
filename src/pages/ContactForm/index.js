//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Alert} from 'react-native';
import {Loader, Input, Gap, SubHeader, HeaderAction} from '../../component';
import {myStyle} from '../../component/atom/public-style';
import {accountIcon, Ill_Contact} from '../../asset';
import {chooseImage} from '../../helper';
import {useSelector, useDispatch} from 'react-redux';
import {setFormNewContact, addNewContact} from '../../../redux/action';
import {userService} from '../../services';

// create a component
const ContactForm = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const ContactFormReducer = useSelector(
    (state) => state.FormNewContactReducer,
  );
  const dispatch = useDispatch();

  const onChangeInput = (value, input) => {
    dispatch(setFormNewContact(value, input));
  };

  const onSubmitData = (value) => {
    let tempA = {...value, age: parseInt(value.age)}
    console.log(JSON.stringify(tempA))
    return (dispatch) => {
      return userService
        .post('contact', tempA)
        .then((response) => {
          console.log(response);
          dispatch(addNewContact());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
  };

  return (
    <View style={{flex: 1}}>
      <Loader loading={loading} />
      <HeaderAction
        onBack={() => navigation.goBack()}
        onSave={() =>
          Alert.alert(
            'Tambah Data',
            'Apa anda yakin data sudah benar ?',
            [
              {
                text: 'Yakin',
                onPress: () => {
                  console.log('data tertambah');
                  dispatch(onSubmitData(ContactFormReducer.formInput));
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    navigation.goBack();
                  }, 500);
                },
                style: 'default',
              },
            ],
            {cancelable: true},
          )
        }
        active={
          ContactFormReducer.formInput.firstName &&
          ContactFormReducer.formInput.lastName &&
          ContactFormReducer.formInput.age &&
          ContactFormReducer.formInput.photo
        }
        title="Tambah Kontak Baru"
      />
      <SubHeader
        subTitle={'Tambah Kontak'}
        caption={'Isi data kontak dengan benar dan cermat'}
        img={Ill_Contact}
      />
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            style={{marginBottom: 20}}
            source={
              ContactFormReducer.formInput.photo !== ''
                ? {uri: ContactFormReducer.formInput.photo}
                : accountIcon
            }
          />
          <Text
            onPress={() =>
              chooseImage((response) =>
                onChangeInput(
                  'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
                  'photo',
                ),
              )
            }
            style={[myStyle.text14GreenBold]}>
            Foto Profile
          </Text>
        </View>
        <Text style={[myStyle.text14GrayBold]}>Informasi Kontak</Text>

        <Input
          label="Nama Depan"
          onChangeText={(val) => onChangeInput(val, 'firstName')}
          placeholder="Nama Depan"
          value={ContactFormReducer.formInput.firstName}
        />

        <Input
          label="Nama Belakanag"
          onChangeText={(val) => onChangeInput(val, 'lastName')}
          placeholder="Nama Belakang"
          value={ContactFormReducer.formInput.lastName}
        />

        <Input
          label="Usia"
          onChangeText={(val) => onChangeInput(val, 'age')}
          placeholder="Usia"
          inputType={'numeric'}
          value={ContactFormReducer.formInput.age.toString()}
        />
        <Gap height={30} />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  logoutBtn: {
    backgroundColor: '#009666',
    flex: 1,
    padding: 10,
  },
  textLogout: {
    textAlign: 'center',
    color: '#FFF',
  },
});

//make this component available to the app
export default ContactForm;
