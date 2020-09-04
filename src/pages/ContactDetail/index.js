import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView, Image} from 'react-native';
import {HeaderAction, Input, Gap, Button, Loader} from '../../component';
import {myStyle} from '../../component/atom/public-style';
import {accountIcon} from '../../asset';
import {chooseImage} from '../../helper';
import {useDispatch} from 'react-redux';
import {updateContactData, deleteContactData} from '../../../redux/action';
import {userService} from '../../services';

const ContactDetail = ({navigation, route}) => {
  const [data, setData] = useState({});
  const [dataOld, setDataOld] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onUpdateData = (newValue) => {
    let input = JSON.stringify(newValue);
    input = JSON.parse(input);
    delete input.id;
    let inputA = {...input, age: parseInt(input.age)};

    return (dispatch) => {
      userService
        .put(`contact/${newValue.id}`, inputA)
        .then((response) => {
          dispatch(updateContactData());
          console.log(response);
        })
        .catch((err) => console.log(err));
    };
  };

  const onDeleteData = (id) => {
    return (dispatch) => {
      userService
        .deleteDetail(`contact/${id}`)
        .then((response) => {
          console.log(response);
          dispatch(deleteContactData());
        })
        .catch((err) => console.log(err));
    };
  };

  useEffect(() => {
    setData(route.params.item);
    setDataOld(route.params.item);
  }, []);

  const letters = /^[0-9a-zA-Z]+$/;
  return (
    <View style={{flex: 1}}>
      <Loader loading={loading} />
      <HeaderAction
        title="Detail Kontak"
        onBack={() => navigation.goBack()}
        onSave={() =>
          Alert.alert(
            'Ubah Data',
            'Apa anda yakin ?',
            [
              {
                text: 'Yakin',
                onPress: () => {
                  console.log('data terganti');
                  dispatch(onUpdateData(data));
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
          JSON.stringify(data) !== JSON.stringify(dataOld) &&
          data.firstName.match(letters) &&
          data.lastName.match(letters) &&
          parseInt(data.age) > 1
        }
      />
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            style={{marginBottom: 20}}
            source={data.photo === 'N/A' ? accountIcon : {uri: data.photo}}
          />
          <Text
            onPress={() => chooseImage((val) => setData({...data, photo: val}))}
            style={[myStyle.text14GreenBold]}>
            Ubah Foto Profile
          </Text>
        </View>
        <Text style={[myStyle.text14GrayBold]}>Informasi Kontak</Text>

        <Input
          label="Nama Depan"
          onChangeText={(val) => setData({...data, firstName: val})}
          placeholder="Nama Depan"
          value={data.firstName}
        />

        <Input
          label="Nama Belakanag"
          onChangeText={(val) => setData({...data, lastName: val})}
          placeholder="Nama Belakang"
          value={data.lastName}
        />

        <Input
          label="Usia"
          onChangeText={(val) => setData({...data, age: val})}
          placeholder="Usia"
          inputType={'numeric'}
          value={data.age + ''}
        />
        <Gap height={30} />
        <Text style={[styles.idText, myStyle.text12GrayBold]}>
          {'ID: ' + data.id}
        </Text>
        <Gap height={50} />
        <Button
          text={'Hapus'}
          type={'secondary'}
          action={() =>
            Alert.alert(
              'Hapus Data',
              'Apa anda yakin ?',
              [
                {
                  text: 'Yakin',
                  onPress: () => {
                    dispatch(onDeleteData(data.id));
                    console.log('data terhapus');
                    setLoading(true);
                    setTimeout(() => {
                      navigation.goBack();
                      setLoading(false);
                    }, 500);
                  },
                  style: 'default',
                },
              ],
              {cancelable: true},
            )
          }
        />
        <Gap height={100} />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  idText: {
    alignSelf: 'center',
  },
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
export default ContactDetail;
