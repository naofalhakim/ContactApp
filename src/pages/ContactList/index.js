//import liraries
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {ContactItem, Loader, Header, SubHeader} from '../../component';
import FAB from '../../component/atom/FAB';
import {Ill_Contact} from '../../asset';
import {useSelector, useDispatch} from 'react-redux';
import {getAllData} from '../../../redux/action';
import {userService} from '../../services';

// create a component
const ContactList = ({navigation}) => {
  const [refresh, setRefresh] = useState(false);
  const ContactListReducer = useSelector((state) => state.ContactListReducer);

  const dispacth = useDispatch();

  const onRefresh = () => {
    return (dispacth) => {
      return userService
        .get('contact')
        .then((response) => {
          dispacth(getAllData(response.data.data));
          setRefresh(false);
        })
        .catch((err) => {
          console.log(err);
          setRefresh(false);
        });
    };
  };

  useEffect(() => {
    dispacth(onRefresh());
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Kontak Saya" />
      <SubHeader
        caption={'Informasi Kontak Telphone Anda'}
        subTitle={'Kontak Saya'}
        img={Ill_Contact}
      />
      <FlatList
        data={ContactListReducer.list}
        bounces={true}
        refreshing={refresh}
        ListEmptyComponent={<Text>Data Kosong</Text>}
        onRefresh={() => dispacth(onRefresh())}
        renderItem={({item}) => {
          return (
            <ContactItem
              data={item}
              action={() => navigation.navigate('Contact Detail', {item})}
            />
          );
        }}
      />
      <FAB action={() => navigation.navigate('Contact Form')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff2f7',
  },
});

//make this component available to the app
export default ContactList;
